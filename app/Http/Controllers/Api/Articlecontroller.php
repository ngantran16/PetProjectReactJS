<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Article;
use App\Comment;
use \Firebase\JWT\JWT;
use Illuminate\Support\Facades\DB;
use DateTime;

class ArticleController extends Controller
{
     function index(){
        $articles = Article::all();
        return $articles;
    }
    function getArticleLimit(){
        $articles = Article::where('id','>',0)->limit(5)->get();
        return $articles;
    }
    function detail($id){
    	$article = Article::find($id);
    	return $article;
    }
    function comment(Request $request) {
    	$user_id = $request->input('user_id');
        $article_id = $request->input('article_id');
        $name = $request->input('name');
        $email = $request->input('email');
        $content = $request->input('content');
        $now = new DateTime();
        $now->format('Y-m-d H:i:s');

        $key = "21A djfhsjhf sfddf";
        $data = JWT::decode($user_id,$key, array('HS256'));

        $userId = $data->user_id;

        $comment = new Comment;
        $comment->user_id = $userId;
        $comment->article_id = $article_id;
        $comment->name = $name;
        $comment->email = $email;
        $comment->content = $content;
        $comment->created_at = $now;
        $comment->save();

        $responseData = array("data"=>null);
        return response()->json($responseData, 200);
    }
    function getCommentByIDArticle($id){
        $comments = Comment::where('article_id',$id)->get();
        return $comments;
    }
}
