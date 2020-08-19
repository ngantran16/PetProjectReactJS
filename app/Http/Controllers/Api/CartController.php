<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Cart;
use App\Order;
use \Firebase\JWT\JWT;

class CartController extends Controller
{
	function addToCart(Request $request){
	    $user_id = $request->input('user_id');
	    $product_id = $request->input('id');
	    $name = $request->input('name');
	    $price = $request->input('price');
	    $image = $request->input('image');

	    $key = "21A djfhsjhf sfddf";
	    $data = JWT::decode($user_id,$key, array('HS256'));
	    $userId = $data->user_id;

	    $cart = Cart::where('product_id','=',$product_id,'and','user_id','=',$userId)->first();
	    if (!$cart){
	    	$newCart = new Cart;
	    	$newCart->user_id = $userId;
	    	$newCart->product_id = $product_id;
	    	$newCart->name = $name;
	    	$newCart->price = $price;
	    	$newCart->image = $image;
	    	$newCart->quantity = 1;
	    	$newCart->save();
	    } else {
	    	$qty = $cart->quantity + 1;
	    	$cart->quantity = $qty;
	    	$cart->save();
	    }
	    $responseData = array("data"=>null);
	    return response()->json($responseData, 200);
	}
	function getCartByUserID($id){
		$key = "21A djfhsjhf sfddf";
	    $data = JWT::decode($id,$key, array('HS256'));
	    $userId = $data->user_id;

		$cart = Cart::where('user_id',$userId)->get();
		return $cart;
	}
	function plusQuantity(Request $request){
		$product_id = $request->input('product_id');
		$user_id = $request->input('user_id');

		$product = Cart::where('product_id','=',$product_id,'and','user_id','=',$user_id)->first();
		if ($product) {
			$product->quantity += 1;
			$product->save(); 
		}
		$responseData = array("data"=>null);
	    return response()->json($responseData, 200);
	}
	function minusQuantity(Request $request){
		$product_id = $request->input('product_id');
		$user_id = $request->input('user_id');

		$product = Cart::where('product_id','=',$product_id,'and','user_id','=',$user_id)->first();
		if ($product) {
			if ($product->quantity > 1) {
				$product->quantity -= 1;
			}
			$product->save(); 
		}
		$responseData = array("data"=>null);
	    return response()->json($responseData, 200);
	}
	function deleteProduct(Request $request){
		$product_id = $request->input('product_id');
		$user_id = $request->input('user_id');

		Cart::where('product_id','=',$product_id,'and','user_id','=',$user_id)->delete();
		$responseData = array("data"=>null);
	    return response()->json($responseData, 200);
	}
	function order(Request $request){
		$user_id = $request->input('user_id');
		$fullname = $request->input('fullname');
		$email = $request->input('email');
		$address = $request->input("address");
		$products = $request->input('products');
 		$products = json_encode($products);
		
		$key = "21A djfhsjhf sfddf";
	    $data = JWT::decode($user_id,$key, array('HS256'));
	    $userId = $data->user_id;

	    $order = new Order;
	    $order->user_id = $userId;
	    $order->fullname = $fullname;
	    $order->email = $email;
	    $order->address = $address;
	    $order->products = $products;
	    $order->save();

	    Cart::where('user_id', $userId)->delete();

	    $responseData = array("data"=>null);
	    return response()->json($responseData, 200);
	}
}
