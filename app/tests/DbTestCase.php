<?php

class DbTestCase extends TestCase{

    function setUp()
    {
        parent::setUp();
        $this->app['artisan']->call('migrate');
        $this->seed('DatabaseSeeder');
    }
} 