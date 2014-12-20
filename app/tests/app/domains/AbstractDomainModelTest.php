<?php

use SourceScript\Common\Domains\AbstractDomainModel;

class AbstractDomainModelTest extends PHPUnit_Framework_TestCase{

    function test_property_getters_and_setters()
    {
        $domailModel = new DomainModelStub();
        $domailModel->setProperty('foo', 'bar');

        $this->assertEquals('bar', $domailModel->getProperty('foo'));
    }

    function test_property_getters_and_setters_using_magic_method()
    {
        $domailModel = new DomainModelStub();
        $domailModel->foo = 'bar';

        $this->assertEquals('bar', $domailModel->foo);
    }

    function test_checking_property()
    {
        $domailModel = new DomainModelStub();
        $domailModel->setProperty('foo', 'bar');
        $domailModel->setProperty('null', null);

        $this->assertTrue($domailModel->hasProperty('foo'));
        $this->assertFalse($domailModel->hasProperty('bar'));
        $this->assertFalse($domailModel->hasProperty('null'));
    }
}

class DomainModelStub extends AbstractDomainModel
{}