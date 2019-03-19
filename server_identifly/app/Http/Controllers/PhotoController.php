<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Photo;

class PhotoController extends Controller
{
  public function getPhotos(Request $request)
  {
    $photos = Photo::all();
    return $photos;
  }

  public function create(Request $request)
  {
    $validatedData = $request->validate([
      'sighting_id' => 'required',
      'photo_url' => 'required'
    ]);

    $photo = Photo::create($validatedData);
    return redirect()->back();
  }
}
