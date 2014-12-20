<?php

use SourceScript\Common\AbstractService;

class AbstractServiceTest extends PHPUnit_Framework_TestCase{

    function test_executing_invalid_command()
    {
        $this->assertTrue(true);
    }
}


class BaseServiceStub extends AbstractService
{}