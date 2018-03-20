<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    protected $table = 'notification';
    protected $fillable = ['subject', 'message', 'status'];

    public function getCreatedAtAttribute($value)
    {
    	$carbonDate = new Carbon($value);
    	return $carbonDate->diffForHumans();
    }
}
