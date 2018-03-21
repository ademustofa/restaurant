<?php

namespace App\Http\Controllers;
use Auth;
use App\Order;
use App\Order_detail;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    
    public function index()
    {
        //
    }

    
    public function create()
    {
        //
    }

    
    public function store_order(Request $request)
    {
        $order              = new Order;
        $order->user_id     = Auth::user()->id;
        $order->total_price = $request->total;
        $order->status      = 1;
        $order->save();

        $order_id = $order->id;

        return response()->json($order_id);

    }

    public function store_order_detail(Request $request)
    {
        $detail             = new Order_detail;
        $detail->order_id   = $request->order_id;
        $detail->food_id    = $request->food_id;
        $detail->quantity   = $request->qty;
        $detail->total      = $request->jumlah;
        $detail->save();
    }

    
    public function show($id)
    {
        //
    }

    
    public function edit($id)
    {
        //
    }

    
    public function update(Request $request, $id)
    {
        //
    }

    
    public function destroy($id)
    {
        //
    }
}
