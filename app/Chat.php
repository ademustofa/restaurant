<?php

namespace App;

use App\User;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Chat extends Model
{
    protected $table = 'chats';
    protected $fillable = ['from', 'to', 'message'];

    public function getCreatedAtAttribute($value)
    {
    	$carbonDate = new Carbon($value);
    	return $carbonDate->diffForHumans();
    }

    public function user_from(){
    	return $this->hasOne('App\User', 'id', 'from');
    }

    /*public function user_to(){
        return $this->hasOne('App\User', 'id', 'from');
    }*/
}
