// ログインユーザーのみアクセスできる制限をかける関数

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Cookies, useCookies } from "react-cookie";
import { Navigate } from 'react-router-dom';

/**  
* ログイン処理の際に、ローカルストレージに200ステータスを保存している。
* cookieに承認トークンを保存しているので、このトークンで承認成功すれば、ログインユーザーのみページのアクセスを許可する。
* トークンでの承認が失敗した場合、ローカルストレージのステータスを401に上書きしてページのアクセスを拒否する。
*/

const AuthRequier = ({ children }) => {

  const [auth_token, setCookie, removeCookie] = useCookies(["token"]);
  const API_TOKEN = auth_token.token;

  useEffect(()=>{
      // cookieに保存されたトークンでauth承認APIにアクセスし、失敗(トークン有効期限切れ)の場合ローカルストレージのステータスを401に上書きする。
      axios.get('http://127.0.0.1:8000/api/auth',{ headers: { Authorization: "Bearer " + API_TOKEN } }).catch((error) => { 
        localstorage.setItem('auth_status', 401);
      });
  },[]);

  const isAuthenticated = localStorage.getItem('auth_status');

  //未承認ユーザーがアクセスした場合はログインページに移動させる
  return isAuthenticated == 200 ? (children) : ( <Navigate to="/login" />);

};

export default AuthRequier;