<?php

namespace App\Http\Controllers;

use Auth;
use DB;
use App\Chat;
use App\User;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function getAllUser()
    {
        $user = User::all();

        return response()->json($user);
    }

    public function getMessage(Request $request)
    {
    	$id1 = Auth::user()->id;
    	$id2 = $request->to;

    	$chats =  Chat::where([['from', '=', $id1], ['to', '=', $id2]])
    				  ->orWhere([['from', '=', $id2], ['to', '=', $id1]])
    				  ->with('user_from')
    				  /*->with('user_to')*/
    				  ->get();

    	return response()->json($chats);
    }

    public function sendMessage(Request $request)
    {
        $chat = new Chat;
        $chat->from   	= Auth::user()->id;
        $chat->to    	= $request->to;
        $chat->message  = $request->message;
        $chat->save();
    }
}
