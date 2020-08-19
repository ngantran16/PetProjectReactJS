<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Article;

class ArticleController extends Controller
{
    function index(){
        $articles = Article::all();
    	return view('admin.article.index',['articles' => $articles]);
    }
    function destroyArticle($id){
        Article::find($id)->delete();
        return redirect('/admin/articles');
    }
    function editArticle($id) {
        $article = Article::find($id);
        return view('admin.article.edit',['article' => $article]);
    }
    function updateArticle($id,Request $request){
        $title = $request->title;
        $content = $request->content;
        $image = $request->file("image")->store("public");

        $article = Article::find($id);
        $article->title = $title;
        $article->content = $content;
        $article->image = $image;
        $article->save();

        return redirect('/admin/articles');
    }
    function createArticle(){
        return view('admin.article.create');
    }
    function storeArticle(Request $request){
        $title = $request->title;
        $content = $request->content;
        $image = $request->file("image")->store("public");

        $article = new Article;
        $article->title = $title;
        $article->content = $content;
        $article->image = $image;
        $article->save();

        return redirect('/admin/articles');
    }
}
