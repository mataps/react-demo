<?php

/*
|--------------------------------------------------------------------------
| Register The Laravel Class Loader
|--------------------------------------------------------------------------
|
| In addition to using Composer, you may use the Laravel class loader to
| load your controllers and models. This is useful for keeping all of
| your classes in the "global" namespace without Composer updating.
|
*/

ClassLoader::addDirectories(array(

	app_path().'/commands',
	app_path().'/controllers',
	app_path().'/models',
	app_path().'/database/seeds',

));

/*
|--------------------------------------------------------------------------
| Application Error Logger
|--------------------------------------------------------------------------
|
| Here we will configure the error logger setup for the application which
| is built on top of the wonderful Monolog library. By default we will
| build a basic log file setup which creates a single file for logs.
|
*/

Log::useFiles(storage_path().'/logs/laravel.log');

/*
|--------------------------------------------------------------------------
| Application Error Handler
|--------------------------------------------------------------------------
|
| Here you may handle any errors that occur in your application, including
| logging them or displaying custom views for specific errors. You may
| even register several error handlers to handle different types of
| exceptions. If nothing is returned, the default error view is
| shown, which includes a detailed stack trace during debug.
|
*/

///**
// *  Handles Bad requests
// */
//App::pushError(function(HttpBadRequestException $exception, $code)
//{
//    if (Request::ajax() || Request::wantsJson())
//    {
//        return Response::json([
//            'type' => get_base_class($exception),
//            'errors' => $exception->toArray(),
//        ], ApiController::HTTP_BAD_REQUEST);
//    }
//});


///**
// *  Handles Unauthorized exceptions
// */
//App::pushError(function(HttpUnAuthorizedException $exception, $code)
//{
//    if (Request::ajax() || Request::wantsJson())
//    {
//        return Response::json([
//            'type' => get_base_class($exception),
//            'message' => $exception->getMessage(),
//        ], ApiController::HTTP_UNAUTHORIZED);
//    }
//});


///**
// *  Handles Forbidden exceptions
// */
//App::pushError(function(HttpForbiddenException $exception, $code)
//{
//    if (Request::ajax() || Request::wantsJson())
//    {
//        return Response::json([
//            'type' => get_base_class($exception),
//            'message' => $exception->getMessage(),
//        ], ApiController::HTTP_FORBIDDEN);
//    }
//});

/**
 *  Handles all Uncaught exceptions
 */
App::pushError(function(Exception $exception, $code)
{
    Log::error(Request::__toString());
    Log::error(json_encode(Input::all()));
    Log::error($exception);

    if ( (Request::ajax() || Request::wantsJson()) && App::environment() == 'production')
    {
        return Response::json([
            'type' => get_base_class($exception),
            'message' => $exception->getMessage()
        ], ApiController::HTTP_INTERNAL_SERVER_ERROR);
    }
});

/*
|--------------------------------------------------------------------------
| Maintenance Mode Handler
|--------------------------------------------------------------------------
|
| The "down" Artisan command gives you the ability to put an application
| into maintenance mode. Here, you will define what is displayed back
| to the user if maintenance mode is in effect for the application.
|
*/

App::down(function()
{
	return Response::make("Be right back!", 503);
});

/*
|--------------------------------------------------------------------------
| Require The Filters File
|--------------------------------------------------------------------------
|
| Next we will load the filters file for the application. This gives us
| a nice separate location to store our route and application filter
| definitions instead of putting them all in the main routes file.
|
*/

require app_path().'/filters.php';
