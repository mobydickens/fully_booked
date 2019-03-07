<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Butterfly extends Model
{

  protected $guarded = [];
  
  public function type()
  {
    return $this->belongsTo('App\Type');
  }
}
