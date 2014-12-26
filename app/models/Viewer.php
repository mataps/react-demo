<?php

use Toogether\Services\Hashid;

class Viewer extends Eloquent
{
    protected $table = 'viewers';

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
        if ( ! Session::has('viewer_id'))
        {
            throw new Exception('Viewer not identified');
        }
        return Session::get('viewer_id');
    }

    static function generateFolderName()
    {
        $viewer_id = Session::get('viewer_id');

        if ( ! Session::has('viewer_id')) {
            $user = static::create([]);
            $viewer_id = Hashid::encode($user->id);
        }
        Session::put('viewer_id', $viewer_id);
    }
}