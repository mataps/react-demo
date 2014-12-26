<?php

namespace Toogether\_core;


interface ModuleInterface {

    function initialize();

    static function getInstance();
}