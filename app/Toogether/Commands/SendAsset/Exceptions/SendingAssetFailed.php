<?php

namespace Toogether\Commands\SendAsset\Exceptions;


class SendingAssetFailed extends \Exception{

    function __construct($validator)
    {
        parent::__construct($validator->errors()->first());
        $this->messages = $validator->errors();
    }
}