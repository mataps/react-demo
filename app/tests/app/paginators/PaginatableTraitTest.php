<?php

use SourceScript\Common\Paginators\PaginatableTrait;
use Illuminate\Database\Eloquent\Builder;

class PaginatableTraitTest extends TestCase{

    function inputProvider()
    {
        return array(
            array(
                array(
                    'min_id' => null,
                    'max_id' => null,
                    'limit' => 10
                ),
                array(1),
                'select * from "users" where "id" >= ? order by "id" desc limit 10'
            ),
            array(
                array(
                    'min_id' => 2,
                    'max_id' => 3,
                    'limit' => 20
                ),
                array(2, 3),
                'select * from "users" where "id" between ? and ? order by "id" desc limit 20'
            ),
            array(
                array(
                    'min_id' => NULL,
                    'max_id' => 3,
                    'limit' => NULL
                ),
                array(1, 3),
                'select * from "users" where "id" between ? and ? order by "id" desc'
            ),
        );
    }

    /**
     * @dataProvider inputProvider
     */
    function test_paginating_query($params, $bindings, $query)
    {
        $builder = User::query();
        $trait = new TraitStub();
        $trait->buildPagination($builder, $params);

        $this->assertEquals($bindings, $builder->getQuery()->getBindings());
        $this->assertEquals($query, $builder->getQuery()->toSql());
    }
}

class TraitStub {
    use PaginatableTrait;
}