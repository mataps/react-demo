<?php

namespace Toogether\_core;


class EventManager {

    function dispatch()
    {

        [
            'UserCreated' => [
                'CommandHandler' => [
                    'AnotherHandler',
                    'MoreHandler'
                ],
                'AnotherCommandHandler'
            ]
        ];
    }
}