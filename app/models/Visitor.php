<?php

class Visitor {

    static function generateFolderName()
    {
        if ( ! Session::has('key')) {
            Session::put('key', Session::getId());
        }
    }

    static function getFolder()
    {
        if ( ! Session::has('key'))
        {
            throw new Exception('Visitor not identified');
        }

        return Session::get('key');
    }

    static function generateSessionFolderName()
    {
        Session::put('sessionFolder', uniqid());
    }

    static function getSessionFolder()
    {
        if ( ! Session::has('sessionFolder'))
        {
            throw new Exception('No session folder');
        }

        return Session::get('sessionFolder');
    }
}