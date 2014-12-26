<?php

namespace Toogether\Services;

class Hashid {

    static function encode()
    {
        $appKey = \Config::get('app.key');
        $hashids = new \Hashids\Hashids($appKey);

        return call_user_func_array(array($hashids, 'encode'), func_get_args());
    }

    static function decode()
    {
        $appKey = \Config::get('app.key');
        $hashids = new \Hashids\Hashids($appKey);

        return call_user_func_array(array($hashids, 'decode'), func_get_args());
    }
}