<?php

use Behat\Behat\Context\BehatContext;
use Illuminate\Foundation\Testing\ApplicationTrait;
use Illuminate\Foundation\Testing\AssertionsTrait;

/**
 * Behat context class.
 */
class LaravelFeatureContext extends BehatContext
{
    /**
     * Responsible for providing a Laravel app instance.
     */
    use ApplicationTrait, AssertionsTrait;

    /**
     * Initializes context.
     *
     * Every scenario gets its own context object.
     * You can also pass arbitrary arguments to the context constructor through behat.yml.
     */
    public function __construct()
    {
    }

    /**
     * @BeforeScenario
     */
    public function setUp()
    {
        if (!$this->app) {
            $this->refreshApplication();
        }
    }

    /**
     * Creates the application.
     *
     * @return \Symfony\Component\HttpKernel\HttpKernelInterface
     */
    public function createApplication()
    {
        $unitTesting = true;

        $testEnvironment = 'testing';

        return require __DIR__ . '/../../../../bootstrap/start.php';
    }
}