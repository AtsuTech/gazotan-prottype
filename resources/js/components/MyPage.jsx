import React from 'react';
import axios from 'axios';
import { Cookies, useCookies } from "react-cookie";
import { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom';

document.title = 'Myページ';

function MyPage(){
    const [auth_token, setCookie, removeCookie] = useCookies(["token"]);
    const API_TOKEN = auth_token.token 

    const [user ,setUser] = useState({
        name:'',
        email:'',
        password:'',
        created_at:'',
    });

    useEffect(()=>{
        // トークンでアクセスしてユーザー名を取得
        axios.get('http://127.0.0.1:8000/api/user',{ headers: { Authorization: "Bearer " + API_TOKEN } }).then((response) => { 
            console.log(response);
            
            setUser({
                name:response.data.name,
                email:response.data.email,
                password:response.data.password,
                created_at:response.data.created_at,                
            });

        }).catch((error) => { 
            // alert('NG');
            console.log(error.response.status);
            localStorage.setItem('auth_status',error.response.status);
            localStorage.setItem('isAuth',false);
        });
    },[]);

    return(
        <div className="block w-1/3 ml-auto mr-auto mt-10 mb-10 p-5 rounded-3xl bg-white text-slate-600">
            <h1 className="text-3xl">MyPage</h1>
            <ul>
                <li>{user.name}</li>
                <li>{user.email}</li>
                <li>{user.password}</li>
                <li>{user.created_at}</li>
            </ul>

            <Link to="/myflashcards">
                <button className="block mt-5 bg-gray-800 w-full h-10 text-white ml-auto mr-auto rounded-lg shadow-lg font-medium text-1xl">My単語帳</button>
            </Link>
            <Link to="/flashcards/create">
                <button className="block mt-5 bg-gray-800 w-full h-10 text-white ml-auto mr-auto rounded-lg shadow-lg font-medium text-1xl">単語帳を作る</button>
            </Link>
            <Link to="/about">
                <button className="block mt-5 bg-gray-800 w-full h-10 text-white ml-auto mr-auto rounded-lg shadow-lg font-medium text-1xl">暗記する</button>
            </Link>
        </div>
    );
}

export default MyPage;