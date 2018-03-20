<?php
use Illuminate\Http\Request;


Route::get('/', function () {
    return view('master');
});


// Auth Route
/*Route::post('/auth', 'UserController@checkAuth');
Route::post('/signUp', 'UserController@signUp');

// Data Route
Route::get('/data', 'DataController@getData');
Route::post('/post', 'DataController@addData');
Route::put('/update', 'DataController@updateData');
Route::delete('/delete', 'DataController@deleteData');

// Gallery Route
Route::post('/addGallery', 'GalleryController@store')->middleware('auth:web');
Route::get('/gallery', 'GalleryController@index')->middleware('auth:web');
Route::get('/gallery/{id}', 'GalleryController@show')->middleware('auth:web');
Route::post('/upload-file', function(Request $request){ return response($request->all(), 201); });

// Notif Route
Route::get('/getNotif', 'NotifController@getAllNotif');
Route::get('/getCount', 'NotifController@countNotif');
Route::post('/createNotif', 'NotifController@createNotif');
Route::post('/readNotif', 'NotifController@readableNotif');

// Chats
Route::get('/getUser', 'ChatController@getAllUser');
Route::post('/sendMessage', 'ChatController@sendMessage')->middleware('auth:web');
Route::post('/getChat', 'ChatController@getMessage')->middleware('auth:web');

// Food
Route::get('/getFood', 'FoodController@index');
Route::get('/showFood/{id}', 'FoodController@show');
Route::post('/addFood', 'FoodController@store');
Route::put('/updateFood', 'FoodController@update');
Route::delete('/deleteFood', 'FoodController@destroy');*/



