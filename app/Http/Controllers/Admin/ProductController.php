<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Product;

class ProductController extends Controller
{
    function index(){
    	$products = Product::all();
    	return view('admin.product.index',['products' => $products]);
    }
    function destroyProduct($id){
        Product::find($id)->delete();
        return redirect('/admin/products');
    }
    function createProduct(){
        return view('admin.product.create');
    }
     function storeProduct(Request $request){
        $name = $request->name;
        $price = $request->price;
        $old_price = $request->old_price;
        $quantity = $request->quantity;
        $sale = $request->sale;
        $image = $request->file("image")->store("public");

        $product = new Product;
        $product->name = $name;
        $product->price = $price;
        $product->old_price = $old_price;
        $product->quantity = $quantity;
        $product->sale = $sale;
        $product->image = $image;
        $product->save();
        
        return redirect('/admin/products');
    }
    function editProduct($id) {
        $product = Product::find($id);
        return view('admin.product.edit',['product' => $product]);
    }
    function updateProduct($id,Request $request){
        $name = $request->name;
        $price = $request->price;
        $quantity = $request->quantity;
        $sale = $request->sale;
        $image = $request->file("image")->store("public");

        $product = Product::find($id);
        $product->name = $name;
        $product->price = $price;
        $product->quantity = $quantity;
        $product->sale = $sale;
        $product->image = $image;
        $product->save();

        return redirect('/admin/products');
    }
}
