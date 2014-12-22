<?php

require __DIR__.'/LaravelFeatureContext.php';

use Behat\Behat\Context\BehatContext;
use Behat\Behat\Event\ScenarioEvent;
use Behat\Behat\Event\SuiteEvent;
use Behat\Behat\Exception\PendingException;
use Behat\Gherkin\Node\TableNode;
use Illuminate\Foundation\Testing\ApplicationTrait;

class FeatureContext extends LaravelFeatureContext {

    /**
     * @Given /^a new "([^"]*)"$/
     */
    public function aNew($arg)
    {
        $this->context = new $arg;
    }

    /**
     * @When /^I "([^"]*)" with "([^"]*)"$/
     */
    public function iWith($command, $param)
    {
        //create the command instance
        $this->commandClass = "Toogether\\Commands\\$command";
        $commandClass = $this->commandClass;

        try {
            $method = "_with".$param;
            $this->response = $commandClass::$method($this);
        }
        catch (Exception $e)
        {
            $this->error = $e;
        }
    }

    /**
     * @Then /^expect "([^"]*)"$/
     */
    public function expect($event)
    {
        $commandClass = $this->commandClass;
        $verifyEvent = "__{$event}";
        $this->assertTrue(method_exists($commandClass, $verifyEvent), "Method $commandClass::$verifyEvent does not exist.");
        $commandClass::$verifyEvent($this);
//        $this->assertResponseOk();
//
//        if ($this->response->headers->get('content-type') == 'application/json')
//        {
//            $this->assertStringsEqual($message, json_decode($this->response->getContent(), true)['message']);
//        }
//        else
//        {
//            $this->assertStringsEqual($message, $this->response->getContent());
//        }
    }

    /**
     * @Then /^expect Error "([^"]*)"$/
     */
    public function expectError($message)
    {
        $this->assertTrue($this->error instanceof Exception, 'Exception was not thrown');
        $this->assertStringsEqual($message, $this->error->getMessage());
    }

    function assertStringsEqual($expected, $actual)
    {
        $this->assertEquals($expected, $actual, "Strings are not equal: \n{$expected}\n{$actual}");
    }

    function __call($method, $params)
    {
        return call_user_func_array(array('PHPUnit_Framework_Assert', $method), $params);
    }
}