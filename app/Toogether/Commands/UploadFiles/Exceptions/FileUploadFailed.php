<?php

namespace Toogether\Commands\UploadFiles\Exceptions;


class FileUploadFailed extends \Exception{

    function __construct($validator)
    {
        parent::__construct('Command Failed');
        $this->messages = $validator->errors();
    }
}