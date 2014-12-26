<?php

namespace Toogether\_core;


use Exception;
use Illuminate\Container\Container;

class CommandMapper {

    protected $container;

    protected $commands = array();

    function __construct(Container $container)
    {
        $this->container = $container ?: new Container;
    }

    function register($command, $handlers)
    {
        [
            'CommandTest' => [
                'CommandHandler' => [
                    'AnotherHandler',
                    'MoreHandler'
                ],
                'AnotherCommandHandler'
            ]
        ];
        $this->commands[$command] = $handlers;

        return $this;
    }

    function run($command)
    {
        if ( ! $this->commandExist($command))
        {
            throw new Exception('Command does not exist');
        }

        //run the command
        $command = $this->container->make($command);

        foreach ($handlers as $handler)
        {
            $handler->handle($command);
        }
    }

    function commandExist($command)
    {
        return isset($this->commands[$command]);
    }
}