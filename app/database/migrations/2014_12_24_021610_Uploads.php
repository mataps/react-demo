<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Uploads extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('uploads', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('uploader_id')->unsigned()->index();
			$table->string('filename', 100);
			$table->integer('size')->unsigned()->nullable();
			$table->string('mime_type', 100);
			$table->timestamps();

			$table->foreign('uploader_id')->references('id')->on('visitors');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::dropIfExists('uploads');
	}

}
