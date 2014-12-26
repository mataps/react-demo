<?php

namespace Toogether;

use Exception;
use Illuminate\Container\Container;
use Input;
use Toogether\_core\Command;
use Toogether\_core\CommandMapper;
use Toogether\_core\Event;
use Toogether\_core\EventManager;
use Toogether\_core\Module;

class Application
{
    /**
     * @var self
     */
    protected static $instance;

    function __construct()
    {
        if (isset(static::$instance))
        {
            return static::$instance;
        }
    }

    /**
     * @return Application
     */
    public static function getInstance()
    {
        return new static;
    }

    function query()
    {
        $args = func_get_args();
        $query = array_shift($args);

        $queryClass = "Toogether\\QueryResults\\{$query}";
        $query = new $queryClass;

        return call_user_func_array(array($query, 'handle'), $args);
    }

    static function __callStatic($commandName, $parameters)
    {
        return call_user_func_array(array(self::getInstance(), $commandName), $parameters);
    }

    function __call($commandName, $parameters)
    {
        //load config
        $commandName = ucfirst($commandName);
        $commandConfig = require(__DIR__."/Commands/{$commandName}/_config.php");
        $validationConfig = require(__DIR__."/Commands/{$commandName}/_validation.php");


        $validationVersion = key( array_slice($validationConfig, -1, 1, TRUE ) );
        $commandValidation = $validationConfig[$validationVersion];


        $commandInputs = Input::all();

        //validate command
        $validation = \Validator::make($commandInputs, $commandValidation['rules'], $commandValidation['messages']);

        if ($validation->fails())
        {
            $commandFailClass = "Toogether\\Commands\\{$commandName}\\Exceptions\\" . $commandConfig['fail'];
            throw new $commandFailClass($validation);
        }

        //TODO: save command
        $resultClass = "Toogether\\Commands\\{$commandName}\\Events\\" . $commandConfig['result'];
        $result = new $resultClass;

        $eventHandlers = $result->getHandlers();
        //execute command events
        foreach($eventHandlers as $handlerClass)
        {

            $handlerClass = "Toogether\\Commands\\{$commandName}\\Handlers\\" . $handlerClass;
            $handler = new $handlerClass;
            $handler->handle($commandInputs, $result);
        }
        //TODO: save event results

        return $result;
    }

    private function saveCommand($commandName, $inputs)
    {
        \DB::table('command_logs')->insert(array(
            'name' => $commandName,
            'data' => json_encode($inputs),
            'executed_on' => date('Y-m-d H:i:s'),
            'client_info' => ''
        ));
    }

    private function dispatchEvents($commandName, $inputs)
    {
        if ( ! isset($this->commandListeners[$commandName]))
        {
            throw new Exception('Listener for '.$commandName.' not found');
        }

        //initialize the command
        $command = new Command($commandName, $inputs);

        $listeners = $this->commandListeners[$commandName];

        //loop through each listeners and each callback to satisfy the event
        foreach ($listeners as $eventName => $callbacks)
        {
            $event = new Event($eventName, $inputs);

            foreach ($callbacks as $callback)
            {
                require __DIR__."/_event_handlers/{$callback}.php";
                $callbackInstance = new $callback;
                $callbackInstance->handle($command, $event);
            }

            $this->addEventToTransaction($event);
        }

        $this->saveTransactions();
    }

    private function addEventToTransaction($event)
    {
        $this->transactions[] = $event;
    }

    private function saveTransactions()
    {
        \DB::beginTransaction();
        foreach ($this->transactions as $transaction)
        {
            \DB::table('event_logs')->insert($transaction->toArray());
        }
        \DB::commit();
    }
}