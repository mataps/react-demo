<?php

use Toogether\Services\Hashid;

class Upload extends Eloquent
{
    protected $table = 'uploads';

    protected $guarded = array();

    function visitor()
    {
        return $this->belongsTo('Visitor', 'uploader_id');
    }

    function toArray()
    {
        $attributes = parent::toArray();
        $folder = Hashid::encode($this->visitor->id);
        $attributes['url'] = '/uploads/'.$folder.'/'.$attributes['filename'];

        return $attributes;
    }
}