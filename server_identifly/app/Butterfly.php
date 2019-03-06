<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Butterfly extends Model
{
  public function type()
  {
    return $this->belongsTo('App\Type');
  }
}
