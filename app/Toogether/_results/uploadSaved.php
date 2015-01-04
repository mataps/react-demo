<?php

$expected = array(
    'id' => 1,
    'uploader_id' => 1,
    'filename'  => 'test-upload.jpg',
    'size'      => null,
    'mime_type' => 'application/octet-stream'
);

$this->assertArrayEquals(1, $this->result->first()->id);