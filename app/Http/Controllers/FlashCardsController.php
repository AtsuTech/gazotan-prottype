<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FlashCard;
use Illuminate\Support\Facades\Auth; // Authファサードを読み込む

class FlashCardsController extends Controller
{

    //home画面で公開ステートの単語帳を取得
    function home_index(Request $request){
        $public_flashcard = FlashCard::where('access',0)->with(['user'])->get();
        return response()->json($public_flashcard);
    }

    //承認ユーザーの単語帳を取得
    function private_index(Request $request){
        $private_flashcard = FlashCard::where('user_id',Auth::id())->with(['user'])->get();
        return response()->json($private_flashcard);
    }


    //DBに新しい単語帳を追加
    function create(Request $request){
        $flashcard = new FlashCard;
        $flashcard->fill($request->all())->save();
        return response()->json(['success' => '作成できました']);
    }
}
