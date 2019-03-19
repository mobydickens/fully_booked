<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Butterfly;
use App\Type;
use App\Sighting;

class ButterflyController extends Controller
{
  public function getAllButterflies()
  {
    $butterflies = Butterfly::all();
    return $butterflies;
  }
  public function getAll()
  {
    $types = Type::with('butterflies')->get()->all();
    return $types;
  }

  public function getTypes()
  {
    $types = Type::all();
    return $types;
  }

  public function create(Request $request)
  {
    $validatedData = $request->validate([
      'name' => 'required',
      'scientific_name' => 'required',
      'region' => 'required',
      'type_id' => 'required',
      'description' => 'required',
      'behavior' => 'required',
      'larvel_foodplants' => 'required',
      'photo_url' => 'required'
    ]);

    $butterfly = Butterfly::create($validatedData);
    return $butterfly;
  }
} 

