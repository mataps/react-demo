<?php

Route::any('upload', function() {
    if (Input::hasFile('files'))
    {
        if (App::isLocal())
        {
            sleep(3);
        }
        $files = Input::file('files');

        $userFolder = filter_var(Request::getClientIp(), FILTER_SANITIZE_NUMBER_INT);
        $sessionFolder = Session::get('time');

        $uploadPath = join('/', ['uploads', $userFolder, $sessionFolder]);

        foreach ($files as $file) {
            $destinationPath = public_path($uploadPath);
            $fileName = time() .'_'. $file->getClientOriginalName();
            $file->move($destinationPath, $fileName);
        }

        return Response::json('/'.$uploadPath .'/'. $fileName);
    }
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
            $message->from($data['marker-email'], 'Approview');
            $message->to($data['approver-email'])->subject('Asset has been sent to you.');
        });

        return Response::json('Success!');
    }

    return Response::json('Invalid params');
});

Route::get('files', function() {
    $userFolder = filter_var(Request::getClientIp(), FILTER_SANITIZE_NUMBER_INT);
    $sessionFolder = Session::get('time');

    $uploadPath = join('/', ['uploads', $userFolder, $sessionFolder]);
    if (!is_dir(public_path($uploadPath)))
    {
        App::abort(404, 'Not found');
    }

    $files = scandir(public_path($uploadPath));
    $files = array_diff($files, array('.', '..'));

    return Response::json(['data' => array_map(function($item) use ($uploadPath) {
        return array(
            'name' => $item,
            'url' => '/'.$uploadPath.'/'.$item
        );
    }, array_values($files))]);
});

Route::get('/', function() {
//    Session::put('time', time());
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