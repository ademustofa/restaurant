<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\User;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function checkAuth(Request $request)
    {

        $credentials = [
            'email'     => $request->email,
            'password'  => $request->password,
        ];

    	if (!Auth::attempt($credentials)) {

    		return response()->json('Username or Password does not match', 403);
    	}

    	$id = Auth::user()->id;

    	$user = User::find($id);
    	return response()->json($user);

    }

    public function signUp(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'      => 'required|min:3',
            'email'     => 'required|unique:users',
            'password'  => 'required|min:5'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $user = new User;
        $user->name      = $request->name;
        $user->email     = $request->email;
        $user->password  = bcrypt($request->password);
        $user->api_token = bcrypt($request->email);

        $user->save();

    }

}
