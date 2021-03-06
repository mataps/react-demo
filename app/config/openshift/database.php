<?php

return array(

	/*
	|--------------------------------------------------------------------------
	| Database Connections
	|--------------------------------------------------------------------------
	|
	| Here are each of the database connections setup for your application.
	| Of course, examples of configuring each database platform that is
	| supported by Laravel is shown below to make development simple.
	|
	|
	| All database work in Laravel is done through the PHP PDO facilities
	| so make sure you have the driver for your particular database of
	| choice installed on your machine before you begin development.
	|
	*/

	'connections' => array(

		'mysql' => array(
			'driver'    => 'mysql',
			'host'      => getenv('OPENSHIFT_MYSQL_DB_HOST'),
			'port' 		=> getenv('OPENSHIFT_MYSQL_DB_PORT'),
			'database'  => getenv('OPENSHIFT_GEAR_NAME'),
			'username'  => getenv('OPENSHIFT_MYSQL_DB_USERNAME'),
			'password'  => getenv('OPENSHIFT_MYSQL_DB_PASSWORD'),
			'charset'   => 'utf8',
			'collation' => 'utf8_unicode_ci',
			'prefix'    => '',
		)

	),

);
