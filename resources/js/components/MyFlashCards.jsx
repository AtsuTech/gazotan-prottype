import React from 'react';
import { useState, useEffect} from "react";
import axios from 'axios';

document.title = 'My単語帳';



function MyFlashCards(){

    const [myflashcards,setmyflashcards] = useState([]);

    useEffect(()=>{
        // トークンでアクセスしてユーザー名を取得
        axios.get('http://127.0.0.1:8000/api/flashcard/private').then((response) => { 
            console.log(response);
            setmyflashcards(response.data);

        }).catch((error) => { 
            
        });
    },[]);


    return(
        <div className="block w-10/12 ml-auto mr-auto mt-10 mb-10 p-5 rounded-3xl bg-white text-slate-600">
            <h1>My単語帳</h1>

            {
                myflashcards.map( (myflashcard) => (

                    <li key={myflashcard.id} className="block w-full h-30 mb-5 mt-5 pl-5 border border-blue-600 rounded">
                        <h5>{myflashcard.title}</h5>
                        <p>{myflashcard.updated_at}</p>
                        <p>{myflashcard.user.name}</p>
                    </li>

                ))
            }
        </div>
    );
}

export default MyFlashCards;