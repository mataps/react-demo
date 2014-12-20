<?php

use SourceScript\Common\Parameters\PaginationParameters;

class PaginationParametersTest extends TestCase{

    function test_creating_pagination_from_array()
    {
        $inputs = array(
            'limit' => 5
        );

        $result = array(
            'limit' => 5,
            'page' => PaginationParameters::$defaults['page'],
        );

        $pagination = PaginationParameters::createFromArray($inputs);

        $this->assertInstanceSourceScriptctus\Common\Parameters\PaginationParameters', $pagination);
        $this->assertEquals($result, $pagination->toArray());
    }
}