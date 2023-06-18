<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\RgisterVerifyController;
use App\Http\Controllers\LoginController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) { 
    return $request->user();
});

//承認確認
Route::middleware('auth:api')->get('/auth', function (Request $request) { 
    return response()->json(['authenticated' => 200]);
});

Route::middleware(['api'])->group(function ($router){
    //ユーザー新規登録
    Route::post('/register',[RegisterController::class,'register'])->name('verification.verify');

    //登録メール承認
    Route::get('email/verify/{id}',[RgisterVerifyController::class,'verify'])->name('verification.verify');

    //登録メール承認 再送処理
    Route::get('email/resesnd',[RgisterVerifyController::class,'resend'])->name('verification.resend');

    //ログイン処理
    Route::post('/login',[LoginController::class,'login']);
});

//ログアウト処理
Route::middleware(['jwt.auth'])->group(function (){
    Route::post('logout', 'App\Http\Controllers\LoginController@logout')->name('logout');
});