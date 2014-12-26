<?php

use Toogether\Services\Hashid;

class Visitor extends Eloquent
{

    protected $table = 'visitors';

    protected $guarded = array();

    static function initialize()
    {
        static::generateFolderName();
        return static::getCurrent();
    }

    static function getCurrent()
    {
        $folder = static::getFolder();
        $id = Hashid::decode($folder);
        return static::findOrFail($id)->first();
    }

    static function getFolder()
    {
        if ( ! Session::has('id'))
        {
            throw new Exception('Visitor not identified');
        }
        return Session::get('id');
    }

    static function generateFolderName()
    {
        $id = Session::get('id');

        if ( ! Session::has('id')) {
            $user = static::create([]);
            $id = Hashid::encode($user->id);
        }
        Session::put('id', $id);
    }
}