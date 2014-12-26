<?php

namespace Toogether\_core;


class Command
{
    protected $name;
    protected $data;
    protected $user;
    protected $client_info;
    protected $executed_on;

    function __construct($name, array $data, $user = null, $client_info = null)
    {
        $this->name = $name;
        $this->data = $data;
        $this->user = $user;
        $this->client_info = $client_info;
        $this->executed_on = date('Y-m-d H:i:s');
    }

    function getUser()
    {
        return $this->user;
    }

    function getClientInfo()
    {
        return $this->client_info;
    }

    function getExecutionDate()
    {
        return $this->executed_on;
    }

    function __get($property)
    {
        return $this->data[$property];
    }
}