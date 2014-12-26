<?php

$temp_file = tempnam(sys_get_temp_dir(), 'test-upload.jpg');

$uploadedFile = new Symfony\Component\HttpFoundation\File\UploadedFile($temp_file, 'test-upload.jpg', null, null, null, true);
\Input::replace(array('files'=>[$uploadedFile]));