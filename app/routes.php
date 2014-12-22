<?php

Route::post('delete', function() {
    $userFolder = \Visitor::getFolder();

    $sessionFolder = \Visitor::getSessionFolder();

    $uploadPath = public_path(join('/', ['uploads', $userFolder, $sessionFolder]));

    $result = File::deleteDirectory($uploadPath);

    return Response::json('Success!');
});

Route::any('upload', function() {
//    if (Input::hasFile('files'))
//    {
//        if (App::isLocal())
//        {
//            sleep(3);
//        }
//        $files = Input::file('files');
//
//        $userFolder = filter_var(Request::getClientIp(), FILTER_SANITIZE_NUMBER_INT);
//        $sessionFolder = Session::get('time');
//
//        $uploadPath = join('/', ['uploads', $userFolder, $sessionFolder]);
//
//        foreach ($files as $file) {
//            $destinationPath = public_path($uploadPath);
//            $fileName = time() .'_'. $file->getClientOriginalName();
//            $file->move($destinationPath, $fileName);
//        }
//
//        return Response::json('/'.$uploadPath .'/'. $fileName);
//    }
    return \Toogether\Commands\UploadFiles::execute();
});

Route::post('send', function() {
    $data = Input::only([
        'marker-email',
        'approver-email'
    ]);
    $rules = [
        'marker-email' => 'required|email',
        'approver-email' => 'required|email'
    ];
    $validation = Validator::make($data, $rules);

    if ($validation->passes())
    {
        $userFolder = filter_var(Request::getClientIp(), FILTER_SANITIZE_NUMBER_INT);
        $sessionFolder = Session::get('time');

        $appKey = Config::get('app.key');
        $hashids = new Hashids\Hashids($appKey);

        $hash = $hashids->encode($userFolder, $sessionFolder);

        $data['link'] = URL::to($hash);
        Mail::send('emails.approver-notification', $data, function($message) use ($data) {
            $message->from($data['marker-email'], 'Toogether');
            $message->to($data['approver-email'])->subject('Asset has been sent to you.');
        });

        return Response::json('Success!');
    }

    return Response::json('Invalid params');
});

Route::get('files', function() {
    $userFolder = \Visitor::getFolder();
    $sessionFolder = \Visitor::getSessionFolder();


//    return Response::json([
//        'data' => [
//            [
//                'deleteType' => 'DELETE',
//                'deleteUrl' => '',
//                'name' => 'test1.jpg',
//                'size' => 0,
//                'thumbnailUrl' => '/uploads/123/test1.jpg',
//                'type' => "",
//                'url' => '/uploads/123/test1.jpg'
//            ],
//            [
//                'deleteType' => 'DELETE',
//                'deleteUrl' => '',
//                'name' => 'test2.jpg',
//                'size' => 0,
//                'thumbnailUrl' => '/uploads/123/test2.jpg',
//                'type' => "",
//                'url' => '/uploads/123/test2.jpg'
//            ]
//        ]
//    ]);

    $uploadPath = join('/', ['uploads', $userFolder, $sessionFolder]);
    if (!is_dir(public_path($uploadPath)))
    {
        return Response::json(['data'=>[]]);
    }

    $files = scandir(public_path($uploadPath));
    $files = array_diff($files, array('.', '..'));

    return Response::json(['data' => array_map(function($fileName) use ($uploadPath) {
        return array(
            'deleteType' => 'DELETE',
            'deleteUrl' => '',
            'name' => $fileName,
            'size' => 0,
            'thumbnailUrl' => '/'.$uploadPath.'/'.$fileName,
            'type' => "",
            'url' => '/'.$uploadPath.'/'.$fileName
        );
    }, array_values($files))]);
});

Route::get('/', function() {
    \Visitor::generateFolderName();
//    \Visitor::generateSessionFolderName();

    return View::make('index');
});

Route::get('/{all}', function($hash) {
    $appKey = Config::get('app.key');
    $hashids = new Hashids\Hashids($appKey);

    list($folder, $time) = $hashids->decode($hash);
    $folderPath = "uploads/$folder/$time";
    if (!is_dir(public_path($folderPath)))
    {
        App::abort(404, 'Not found');
    }

    $files = scandir(public_path($folderPath));
    $files = array_diff($files, array('.', '..'));

    return View::make('asset-preview', compact('files', 'folderPath'));
})->where('all', '^((?!api).)*$');