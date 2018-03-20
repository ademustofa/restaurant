<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Notification;

class NotifController extends Controller
{
    public function getAllNotif()
    {
    	$data = Notification::orderBy('id', 'desc')->take(4)->get();

    	return response()->json($data); 
    }

    public function createNotif(Request $request)
    {
    	$notif = new Notification;

    	$notif->subject = $request->subject;
    	$notif->message = $request->message;
    	$notif->status = 0;

    	$notif->save();

    	return response()->json($notif, 201);
    }

    public function countNotif()
    {
    	$notif = Notification::where('status', 0)->count();

    	return response()->json($notif);
    }

    public function readableNotif()
    {
    	$notif = Notification::where('status', 0)->update(['status' => 1]);

    	return response()->json($notif);
    }


}
