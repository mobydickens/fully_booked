<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Sighting;

class SightingController extends Controller
{
  public function getAll() {
    $sightings = Sighting::all();
    return $sightings;
  }

  public function create(Request $request)
  {
    $validatedData = $request->validate([
      'butterfly_id' => 'required',
      'date_sighted' => 'required',
      'location' => 'required',
      'notes' => 'required',
      'sighted_by' => 'required'
    ]);

    $sighting = Sighting::create($validatedData);
    
    return redirect()->back();
  }
}
