<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateButterfliesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('butterflies', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('type_id');
            $table->foreign('type_id')
                  ->references('id')->on('types')
                  ->onDelete('cascade');
            $table->string('name');
            $table->string('scientific_name');
            $table->text('region');
            $table->text('description');
            $table->text('behavior');
            $table->text('larvel_foodplants');
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
        Schema::dropIfExists('butterflies');
    }
}
