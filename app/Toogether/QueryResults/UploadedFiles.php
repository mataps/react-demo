<?php

namespace Toogether\QueryResults;

use Illuminate\Database\Eloquent\Collection;

class UploadedFiles extends Collection{

    function handle()
    {
        return \Upload::all();
    }
}