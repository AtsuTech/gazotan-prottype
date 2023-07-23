import React from 'react';
import { useState, useEffect} from "react";

document.title = '単語帳作成';

function CreateFlashCard(){

    const [form ,setForm] = useState({
        title:'',
        access:'',
    });


    return(
        <div className="block w-1/3 ml-auto mr-auto mt-10 mb-10 p-5 rounded-3xl bg-white text-slate-600">
            <h1>単語帳作成</h1>
            <form action="" className="/flex">
                <input type="text" className="w-full h-10 border border-gray-300 rounded pl-2" placeholder="タイトル" />

                <div>
                    <input type="radio" name="access" id="" />
                    <label htmlFor="access">公開 <br/>他のユーザーに公開します</label>
                </div>
                
                
                <div>
                    <input type="radio" name="access" id="" checked />
                    <label htmlFor="access">非公開 <br/>あなただけが閲覧できます</label>
                </div>
                

                
                <button type="submit" className="block mr-0 bg-emerald-400 w-14 h-10 text-white ml-auto mr-auto rounded-lg font-medium text-1xl">作成</button>
            </form>
        </div>
    );
}

export default CreateFlashCard;