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
        $order = new Order;
        $order->user_id = Auth::user()->id;
        $order->total_price = $request->total;
        $order->status = 1;
        $order->save();

        $order_id = $order->id;

        return response()->json($order_id);

    }

    public function storeorder_detail(Request $request)
    {
        $detail = new Order_detail;
        $detail->user_id = Auth::user()->id;
        $detail->total_price = $request->total;
        $detail->status = 1;
        $detail->save();

        $order_id = $order->id;

        return response()->json($order_id);
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
