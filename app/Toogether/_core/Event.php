<?php

namespace Toogether\_core;


class Event {

    private $name;
    private $data;
    /**
     * @var null
     */
    private $command_id;
    private $date_occurred;

    function __construct($name, $data, $command_id = null)
    {
        $this->name = $name;
        $this->data = $data;
        $this->command_id = $command_id;
        $this->date_occurred = date('Y-m-d H:i:s');
    }

    function __get($property)
    {
        return $this->data[$property];
    }

    function __set($property, $value)
    {
        $this->data[$property] = $value;

        return $this;
    }

    function getCommandId()
    {
        return $this->command_id;
    }

    function getName()
    {
        return $this->name;
    }

    function getDateOccurred()
    {
        return $this->date_occurred;
    }

    function toArray()
    {
        return array(
            'name' => $this->name,
            'data' => json_encode($this->data),
            'command_id' => $this->command_id,
            'date_occurred' => $this->date_occurred
        );
    }
}