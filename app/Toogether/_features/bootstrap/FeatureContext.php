<?php

require __DIR__.'/LaravelFeatureContext.php';

use Toogether\Application;

class FeatureContext extends LaravelFeatureContext {

    /**
     * @Given /^a "([^"]*)"$/
     */
    public function a($scenario)
    {
        $scenario = lcfirst($scenario);
        $this->context = require app_path("Toogether/_scenarios/{$scenario}.php");
    }

    /**
     * @When /^I view "([^"]*)"$/
     */
    public function iView($query)
    {
        try {
            $this->result = call_user_func(array(Application::getInstance(), 'query'), $query);
        }
        catch(Exception $e)
        {
            $this->result = $e;
        }
    }

    /**
     * @When /^I view "([^"]*)" with "([^"]*)"$/
     */
    public function iViewWith($query, $params)
    {
        $params = require app_path("Toogether/_scenarios/{$params}.php");
        try {
            $this->result = call_user_func_array(array(Application::getInstance(), 'query'), array($query, $params));
        }
        catch(Exception $e)
        {
            $this->result = $e;
        }
    }

    /**
     * @Then /^I should see "([^"]*)"$/
     */
    public function iShouldSee($result)
    {
        $result = lcfirst($result);
        require app_path("Toogether/_results/{$result}.php");
    }

    /**
     * @When /^I "([^"]*)" with "([^"]*)"$/
     */
    public function iWith($command, $scenario)
    {
        $scenario = lcfirst($scenario);
        require app_path("Toogether/_scenarios/{$scenario}.php");

        try {
            $this->result = Application::$command();
        }
        catch(Exception $e)
        {
            $this->result = $e;
        }
    }

    /**
     * @Then /^expect "([^"]*)"$/
     */
    public function expect($result)
    {
        if (is_subclass_of($this->result, 'Exception'))
        {
            throw $this->result;
        }
        $reflect = new ReflectionClass($this->result);
        $this->assertStringsEqual($result, $reflect->getShortName());
    }

    /**
     * @Then /^expect error "([^"]*)"$/
     */
    public function expectError($result)
    {
        $excludedExceptions = [
            'Behat\Behat\Exception\ErrorException',
            'Exception'
        ];

        if (in_array(get_class($this->result), $excludedExceptions))
        {
            throw $this->result;
        }
        $result = lcfirst($result);
        require app_path("Toogether/_results/{$result}.php");
    }
}