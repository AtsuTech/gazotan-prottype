import React from 'react';
import { useState, useEffect} from "react";
import axios from 'axios';

function Home(){

    const [myflashcards,setmyflashcards] = useState([]);

    useEffect(()=>{
        // トークンでアクセスしてユーザー名を取得
        axios.get('http://127.0.0.1:8000/api/flashcard/home').then((response) => { 
            console.log(response);
            setmyflashcards(response.data);

        }).catch((error) => { 
            
        });
    },[]);

    return(
        <div className="block w-1/3 ml-auto mr-auto mt-10 mb-10 p-5 rounded-3xl bg-white text-slate-600">
            <h1>Home</h1>
            <p>ここはHome</p>
            {
                myflashcards.map( (myflashcard) => (

                    myflashcard.user != null ?
                    <li key={myflashcard.id} className="block w-full h-30 mb-5 mt-5 pl-5 border border-blue-600 rounded">
                        <h5>{myflashcard.title}</h5>
                        <p>{myflashcard.updated_at}</p>
                        <p>{myflashcard.user.name}</p>
                    </li>
                    :
                    <li key={myflashcard.id} className="block w-full h-30 mb-5 mt-5 pl-5 border border-green-600 rounded">
                        <h5>{myflashcard.title}</h5>
                        <p>{myflashcard.updated_at}</p>
                    </li>
                ))
            }
        </div>
        
    );
}

export default Home;