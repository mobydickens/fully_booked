<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
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
}
