<?php

use Toogether\Application;

Route::group(array('prefix' => 'layouts'), function() {
    Route::get('/', function() {
        return View::make('home');
    });
    Route::get('preview', function() {
        return View::make('preview');
    });
});

Route::any('upload', function() {
    $result = Application::uploadFiles();

    return Response::json($result->toJson());
});

Route::post('send', function() {
    Application::sendAsset();
});

Route::get('files', function() {
    $app = Application::getInstance();
    $results = $app->query('UploadedFiles');

    return $results->toJson();
});

Route::get('/', function() {
    \Visitor::initialize();

    $app = Application::getInstance();
    $results = $app->query('UploadedFiles');

    $data['files'] = $results->toArray();

    return View::make('index', $data);
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