<?php

namespace Toogether\QueryResults;


use Toogether\Exceptions\AssetDoesNotExist;
use Toogether\Services\Hashid;

class UploadedFile {

    function handle($hash_id)
    {
        @list($uploader_id, $file_id) = Hashid::decode($hash_id);
        $upload = \Upload::where('id', $file_id)->first();

        if (! $upload)
        {
            throw new AssetDoesNotExist('Asset does not exist');
        }

        return $upload;
    }
}