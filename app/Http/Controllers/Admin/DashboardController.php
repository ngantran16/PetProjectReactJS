<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use App\Comment;

class DashboardController extends Controller
{
    function index(){
        return view('admin.dashboard');
    }
    function showUsers(){
        $users = User::all();
        return view('admin.user.index',['users' => $users]);
    }
    function destroyUser($id){
        User::find($id)->delete();
        return redirect('/admin/users');
    }
    function showComment(){
        $comments = Comment::all();
        return view('admin.comment.index',['comments' => $comments]);
    }
    function destroyComment($id){
        Comment::find($id)->delete();
        return redirect('/admin/comments');
    }

}
