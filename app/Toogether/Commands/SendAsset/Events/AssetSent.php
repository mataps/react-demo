<?php

namespace Toogether\Commands\SendAsset\Events;


use Illuminate\Support\Collection;

class AssetSent extends Collection{

    protected $data = array();

    function getHandlers()
    {
        return array(
            'MailAsset'
        );
    }

//    function toJson()
//    {
//        //TODO: map results to JSON
//        return array();
//    }
}