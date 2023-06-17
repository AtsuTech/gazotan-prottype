import React from 'react';
import axios from 'axios';
import { Cookies, useCookies } from "react-cookie";
import { useState, useEffect, useContext } from "react";


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
        </div>
    );
}

export default MyPage;