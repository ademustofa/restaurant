<?php

namespace App;

use Carbon\Carbon;
use App\User;
use Illuminate\Database\Eloquent\Model;

class Gallery extends Model
{
	protected $table = 'gallery';
    protected $fillable = ['name', 'user_id'];

    public function getCreatedAtAttribute($value)
    {
    	$carbonDate = new Carbon($value);
    	return $carbonDate->diffForHumans();
    }

    public function user(){
    	return $this->belongsTo('App\User');
    }
}
