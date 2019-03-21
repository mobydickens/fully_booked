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

  public function getOneButterfly(Request $request)
  {
    $butterfly = Butterfly::find($request->id);
    return $butterfly;
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
  public function edit(Request $request)
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

    $updatedButterfly = Butterfly::find($request->id);

    $updatedButterfly->name = $request->name;
    $updatedButterfly->scientific_name = $request->scientific_name;
    $updatedButterfly->region = $request->region;
    $updatedButterfly->type_id = $request->type_id;
    $updatedButterfly->description = $request->description;
    $updatedButterfly->behavior = $request->behavior;
    $updatedButterfly->larvel_foodplants = $request->larvel_foodplants;
    $updatedButterfly->photo_url = $request->photo_url;
    $updatedButterfly->save();
  }
} 

