<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\User;

class DataController extends Controller
{
    public function getData()
    {
    	$data = User::all();

    	return response()->json($data); 
    }

    public function addData(Request $request)
    {
    	$data = json_decode($request->getContent(), true);

    	$user = new User;
    	$user->name 	= $data['name'];
    	$user->email 	= $data['email'];
    	$user->password = bcrypt($data['password']);

    	$user->save();

    }

    public function updateData(Request $request)
    {
    	/*$data = json_decode($request->getContent(), true);*/
    	$id = $request->id;

    	$user = User::find($id);
    	$user->name 	= $request->name;
    	$user->email 	= $request->email;

    	$user->save();
    }

    public function deleteData(Request $request)
    {
    	$data = json_decode($request->getContent(), true);
    	$id = $data['id'];

    	$user = User::find($id);
    	$user->delete();
    }
}
