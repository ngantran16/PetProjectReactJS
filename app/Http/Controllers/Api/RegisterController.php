<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\User;

class RegisterController extends Controller
{
    function register(Request $request) {
        $username = $request->input('username');
        $password = $request->input('password');
        $email = $request->input('email');
        $address = $request->input('address');
        $role = 'user';

        $hashPassword = Hash::make($password);

        $user = new User;
        $user->username = $username;
        $user->password = $hashPassword;
        $user->email = $email;
        $user->address = $address;
        $user->role = $role;
        $user->save();

        $responseData = array("data"=>null);
        return response()->json($responseData, 200);
    }
}
