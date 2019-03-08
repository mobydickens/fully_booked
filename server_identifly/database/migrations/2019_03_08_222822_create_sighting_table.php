<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSightingTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sighting', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('butterfly_id');
            $table->foreign('butterfly_id')
                  ->references('id')->on('butterflies')
                  ->onDelete('cascade');
            $table->date('date_sighted');
            $table->text('location');
            $table->text('notes');
            $table->text('photo');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sighting');
    }
}
