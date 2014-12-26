<?php

$visitor = Visitor::initialize();

foreach(range(1, 5) as $index)
{
    \Upload::create([
        'uploader_id' => $visitor->id,
        'filename'  => "test{$index}.jpg",
        'size'      => 1,
        'mime_type' => 'image/jpeg'
    ]);
}