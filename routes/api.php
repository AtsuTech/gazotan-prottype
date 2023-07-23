<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\RgisterVerifyController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\PasswordResetController;
use App\Http\Controllers\FlashCardsController;

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

    //パスワードリセットのリクエストのメール送信
    Route::post('/password/forgot',[PasswordResetController::class,'sendemail']);

    //パスワードリセット処理
    Route::post('/password/reset',[PasswordResetController::class,'passwordreset'])->name('password.reset');

    //home画面共有単語帳の表示
    Route::get('/flashcard/home',[FlashCardsController::class,'home_index']);

    //単語帳作成
    Route::post('/flashcard/create',[FlashCardsController::class,'create']);

    Route::get('/flashcard/private',[FlashCardsController::class,'private_index']);
    
});

//ログアウト処理
Route::middleware(['jwt.auth'])->group(function (){
    Route::post('logout', 'App\Http\Controllers\LoginController@logout')->name('logout');
});