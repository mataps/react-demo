<?php

namespace Toogether\Commands\UploadFiles\Handlers;


class SaveFileUpload {

    function handle($originalInput, $result)
    {
        $files = $originalInput['files'];
        $userFolder = $result->visitor->getFolder();

        $uploadPath = join('/', ['uploads', $userFolder]);

        foreach ($files as $file)
        {
            $destinationPath = public_path($uploadPath);
            $file->move($destinationPath, $file->getClientOriginalName());
            $upload = \Upload::create([
                'uploader_id' => $result->visitor->id,
                'filename'  => $file->getClientOriginalName(),
                'size'      => $file->getClientSize(),
                'mime_type' => $file->getClientMimeType()
            ]);
            $result->push($upload);
        }
    }
}