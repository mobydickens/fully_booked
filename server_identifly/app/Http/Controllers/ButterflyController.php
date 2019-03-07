<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Butterfly;
use App\Type;

class ButterflyController extends Controller
{
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

  public function store(Request $request)
  {
    $validatedData = $request->validate([
      'name' => 'required',
      'scientific_name' => 'required',
      'region' => 'required',
      'description' => 'required',
      'behavior' => 'required',
      'larvel_foodplants' => 'required',
      'photo_url' => 'required'
    ]);
    $type = $request->input('type');
    $typeId = Type::where('type', $type)->firstOrFail()->id;

    $butterfly = Butterfly::create($validatedData + ['type_id' => $typeId]);
    return $butterfly;
  }
} 

