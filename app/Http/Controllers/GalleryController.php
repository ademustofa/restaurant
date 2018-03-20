<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Gallery;
use Auth;

class GalleryController extends Controller
{

	public function index()
	{
		$id = Auth::user()->id;

		$gallery = Gallery::where('user_id', $id)->with('user')->get();

		return response()->json($gallery);
	}


    public function store(Request $request)
    {
    	$validator = Validator::make($request->all(), [
    		'name' => 'required|min:3',

    	]);

    	if ($validator->fails()) {
    		return response()->json($validator->errors()->all(), 422);
    	}

    	$gallery = new Gallery;
    	$gallery->name 		= $request->name;
    	$gallery->user_id 	= Auth::user()->id;
    	$gallery->save();
    	

    	return response()->json($gallery, 201);

    }
    

    public function show($id)
    {
    	$gallery = Gallery::where('id', $id)->with('user')->first();

		return response()->json($gallery);
    }
}
