<?php

use Toogether\Application;

Route::group(array('prefix' => 'layouts'), function() {
    Route::get('/', function() {
        return View::make('home', ['showBanner'=>true]);
    });
    Route::get('preview', function() {
        return View::make('preview');
    });
    Route::get('comments', function() {
        return View::make('comments');
    });
    Route::get('upload', function() {
        return View::make('upload');
    });
    Route::get('dialogs', function() {
        return View::make('dialogs');
    });
});

Route::group(array('prefix' => 'api/v1'), function() {
    Route::any('upload', function() {
        $result = Application::uploadFiles();
        return Response::json($result->toArray());
    });

    Route::post('send', function() {
        Application::sendAsset();
    });

    Route::get('uploads', function() {
        $app = Application::getInstance();
        $results = $app->query('UploadedFiles');
        return Response::json($results->toArray());
    });
});

Route::get('/', function() {
    \Visitor::initialize();
//
//    $app = Application::getInstance();
//    $results = $app->query('UploadedFiles');
//
//    $data['files'] = $results->toArray();
    $data['files'] = [];

    return View::make('layouts.left-layout', $data);
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