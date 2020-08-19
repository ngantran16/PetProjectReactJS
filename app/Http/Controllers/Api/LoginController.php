<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use \Firebase\JWT\JWT;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    function login(Request $request) {
        $username = $request->input('username');
        $password = $request->input('password');

        $key = "21A djfhsjhf sfddf";

        if(Auth::attempt(["username"=> $username,"password"=>$password])){
        $user = Auth:: user();
        $userId = $user->id;

        $data = array(
            "user_id" => $userId
        );

        $token = JWT::encode($data, $key);

        $responseData = array("user_id"=>$token);
        return response()->json($responseData, 200);
    }
}

    function getUserByID(){

        $token = request()->header("Authorization");
        $key = "21A djfhsjhf sfddf";
        $data = JWT::decode($token,$key, array('HS256'));

        $user = DB::table("users")->find($data->user_id);
        $responseData = array("user" => $user);
        return response()->json($responseData,200);
    }
}
