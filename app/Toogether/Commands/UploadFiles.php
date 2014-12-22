<?php

namespace Toogether\Commands;

use Symfony\Component\HttpFoundation\File\UploadedFile;

class UploadFiles {

    static function execute()
    {
        if ( ! \Input::hasFile('files'))
        {
            throw new \Exception('No file uploaded');
        }

        if (\App::isLocal())
            sleep(3);

        $files = \Input::file('files');

        $userFolder = \Visitor::getFolder();

        $sessionFolder = \Visitor::getSessionFolder();

        $uploadPath = join('/', ['uploads', $userFolder, $sessionFolder]);

        $result = [];
        foreach ($files as $file) {
            $destinationPath = public_path($uploadPath);
            $fileName = time() .'_'. $file->getClientOriginalName();
            $file->move($destinationPath, $fileName);
            $result[] = [
                'deleteType' => 'DELETE', //"DELETE"
                'deleteUrl' => '', //"https://jquery-file-upload.appspot.com/AMIfv95ZzPk85LxSxvwLWppObo7XPOlqw0XbwknnfhiGtQXAUxoNqGoSzCxa_CSMRDzewCu_cmwGpLTz9xUoHu1lJWXpj160TH6BYZK5U6FwFzpG7wQyLKJRJMn3OJkQBn-_5QCBKNMLBK8yQQR37LGIFS2k5t8Pfl8wOy9BdD6xMgR3Spt_VtU/Untitled-2%20copy.JPG?delete=true"
                'name' => $fileName, //"Untitled-2 copy.JPG"
                'size' => $file->getClientSize(), //68854
                'thumbnailUrl' => '/'.$uploadPath .'/'. $fileName, //"https://lh6.ggpht.com/ptgXUlACKIVz2_mSWm-5EWzd-CuEfNWbZ869tK5BgJ9RTVQIKgK-OOKRLfTjgKY6PQvtSdp1B57kyU-C714HLszO48YVvX8=s80"
                'type' => $file->getClientMimeType(), //"image/jpeg"
                'url' => '/'.$uploadPath .'/'. $fileName //"https://jquery-file-upload.appspot.com/AMIfv95ZzPk85LxSxvwLWp
            ];
        }

        return \Response::json([
            'files' => $result
        ]);
    }

    static function _withEmptyFiles(\FeatureContext $context)
    {
        return $context->call('POST', 'upload');
    }

    static function _withJpegFile(\FeatureContext $context)
    {
        $uploadedFile = new UploadedFile(public_path('/tests/upload.jpg'), 'original-file-name.ext');
        return $context->call('POST', 'upload', [], ['files' => [$uploadedFile]]);
    }

    static function __UploadSaved(\FeatureContext $context)
    {

    }
}