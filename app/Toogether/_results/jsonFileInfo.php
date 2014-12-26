<?php

$this->assertStringsEqual('valid-file', $this->result->filename);
$this->assertStringsEqual(1, $this->result->size);
$this->assertStringsEqual('image/jpeg', $this->result->mime_type);