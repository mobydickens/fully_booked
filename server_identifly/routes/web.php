<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/butterflies', 'ButterflyController@getAll');
Route::get('/getbutterflies', 'ButterflyController@getAllButterflies');
Route::get('/onebutterfly/{id}', 'ButterflyController@getOneButterfly');
Route::get('/types', 'ButterflyController@getTypes');
Route::post('/new', 'ButterflyController@create');
Route::put('/edit/{id}', 'ButterflyController@edit');

Route::get('/sighting', 'SightingController@getAll');
Route::post('/newsighting', 'SightingController@create');

Route::get('/getphotos', 'PhotoController@getPhotos');
Route::post('/newphoto', 'PhotoController@create');