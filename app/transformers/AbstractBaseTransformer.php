<?php

use SourceScript\Common\Collections\ResultCollection as Collection;
use SourceScript\Common\Parameters\FieldsParameters;
use SourceScript\Common\Parameters\PaginationParameters;
use Illuminate\Database\Eloquent\Model;

abstract class AbstractBaseTransformer {

    protected $fields = array();

    private $queryParams;

    function transformCollection(Collection $collection, FieldsParameters $fieldsParameters = null, PaginationParameters $paginationParameters = null)
    {
        $transformer = $this;

        if ($fieldsParameters && $fieldsParameters->getFields() != ['*'])
        {
            $fields = array_flip($fieldsParameters->getFields());

            $this->fields = array_intersect_key($this->fields, $fields);

            $this->addToQueryParams(['fields' => implode(',', array_keys($this->fields))]);
        }

        $data = $collection->map(function($model) use ($transformer)
        {
            return call_user_func_array([$transformer, 'transform'], [$model]);
        });

        $results = ['data' => $data];

        if ($paginationParameters)
        {
            $results['paging'] = $this->paginate($collection, $paginationParameters);
        }

        return $results;
    }

    private function paginate(Collection $collection, PaginationParameters $paginationParameters)
    {
        $paging = [];
        $params = $paginationParameters->toArray();

        $paging['total']        = $collection->getCountRows();
        $paging['start_count']  = $paging['total'] ? ($params['page'] * $params['limit']) - $params['limit'] + 1 : 0;
        $paging['end_count']    = $paging['total'] ? ($paging['start_count'] + $collection->count()) - 1 : 0;

        if ($paginationParameters->getPage() > 1)
        {
            $params = $paginationParameters->toArray();
            $params['page'] = min($params['page'], $params['page'] - 1);

            $paging['previous'] = '?' . http_build_query($params) . $this->queryParams;
        }

        if ($collection->getCountRows() != $paginationParameters->getLimit() && $paging['end_count'] != $paging['total'])
        {
            $params = $paginationParameters->toArray();
            $params['page'] += 1;

            $paging['next'] = '?' . http_build_query($params) . $this->queryParams;
        }

        return $paging;
    }

    private function addToQueryParams(array $params)
    {
        $this->queryParams .= urldecode(http_build_query($params));
    }

    private function getModelValue($field, Model $model)
    {
        return $model->{$field};
    }

    protected function getString($value)
    {
        return (string)$value;
    }

    protected function getInteger($value)
    {
        return (int)$value;
    }

    private function transformValue($value, $operations)
    {
        foreach ($operations as $operation)
        {
            $op = 'get' . ucfirst($operation);
            $value = call_user_func(array($this, $op), $value);
        }

        return $value;
    }

    public function transform(Model $model, $except = array())
    {
        $results = array();

        foreach ($this->fields as $field => $operations)
        {
            if ( ! in_array($field, $except))
            {
                $value = $this->getModelValue($field, $model);

                $ops = explode('|', $operations);

                $results[$field] = empty($operations) ? $value : $this->transformValue($value, $ops);
            }
        }

        return $results;
    }
} 