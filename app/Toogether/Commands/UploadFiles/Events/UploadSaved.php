<?php

namespace Toogether\Commands\UploadFiles\Events;


use Illuminate\Support\Collection;

class UploadSaved extends Collection{

    protected $data = array();

    function getHandlers()
    {
        return array(
            'SetVisitor',
            'SaveFileUpload'
        );
    }

//    function toJson()
//    {
//        //TODO: map results to JSON
//        return array();
//    }
}