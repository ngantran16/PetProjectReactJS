<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
//Manage Articles
Route::get('/articles',"Api\ArticleController@index");
Route::get('/articles/new',"Api\ArticleController@getArticleLimit");
Route::get('/articles/{id}',"Api\ArticleController@detail");

//Manage Login
Route::post('/login', "Api\LoginController@login");
Route::get('/profile',"Api\LoginController@getUserByID");

//Manage Register
Route::post('/register',"Api\RegisterController@register");

//Manage Comments
Route::post('/user/comment',"Api\ArticleController@comment");
Route::get('/comments/{id}',"Api\ArticleController@getCommentByIDArticle");

//Manage Products
Route::get('/products',"Api\ProductController@getProducts");

//Manage Cart
Route::post('/user/addToCart',"Api\CartController@addToCart");
Route::get('/user/cart/{id}',"Api\CartController@getCartByUserID");
Route::post('/cart/plus',"Api\CartController@plusQuantity");
Route::post('/cart/minus',"Api\CartController@minusQuantity");
Route::delete('/cart/delete',"Api\CartController@deleteProduct");

