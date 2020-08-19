<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
//Manage Articles
Route::get('/admin/articles',"Admin\ArticleController@index");
Route::delete('/admin/article/{id}', "Admin\ArticleController@destroyArticle");
Route::get('/admin/article/{id}/edit', "Admin\ArticleController@editArticle");
Route::patch('/admin/article/{id}','Admin\ArticleController@updateArticle');
Route::get('/admin/article/create',"Admin\ArticleController@createArticle");
Route::post('/admin/articles',"Admin\ArticleController@storeArticle");

//Manage Users
Route::get('/admin/users',"Admin\DashboardController@showUsers");
Route::delete('/admin/user/{id}',"Admin\DashboardController@destroyUser");

//Manage Comments
Route::get('/admin/comments',"Admin\DashboardController@showComment");
Route::delete('/admin/comment/{id}',"Admin\DashboardController@destroyComment");

//Manage Products
Route::get('/admin/products',"Admin\ProductController@index");
//delete
Route::delete('/admin/product/{id}',"Admin\ProductController@destroyProduct");
//create
Route::get('/admin/product/create',"Admin\ProductController@createProduct");
Route::post('/admin/products',"Admin\ProductController@storeProduct");
//update
Route::get('/admin/product/{id}/edit', "Admin\ProductController@editProduct");
Route::patch('/admin/product/{id}','Admin\ProductController@updateProduct');
