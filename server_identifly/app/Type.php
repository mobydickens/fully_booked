<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Type extends Model
{
  public function butterflies()
  {
    return $this->hasMany('App\Butterfly');
  }
}
