<?php

$visitor = \Visitor::initialize();

$upload = \Upload::create([
    'uploader_id' => $visitor->id,
    'filename'  => 'valid-file',
    'size'      => 1,
    'mime_type' => 'image/jpeg'
]);

$hash = Toogether\Services\Hashid::encode($visitor->id, $upload->id);

return $hash;