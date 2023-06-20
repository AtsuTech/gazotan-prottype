import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useCookies} from "react-cookie";


function Logout(){

    const [auth_token, setCookie, removeCookie] = useCookies(["token"]);

    const LogoutAction = () => {

        // HTTPボディを書かないと、ログアウト処理を要求した際にUnauthorize(未承認)のエラーになる
        // POST通信の場合は、受け渡されるパラメータの内容が、ここに記述されます。
        const bodyParameters = {
            key: "value"
        };

        
        // トークンでアクセスしてユーザー名を取得
        axios.post('http://127.0.0.1:8000/api/logout',bodyParameters, { headers: { Authorization: "Bearer " + auth_token.token} }).then((response) => { 
            alert(response.data.message);

            // トークン削除
            removeCookie("token");

            // ユーザーネーム削除
            localStorage.removeItem('user_name');
   
            // ステータス書き換え
            localStorage.setItem('auth_status',401);


            //ログアウト後、ログインページに移動
            window.location.href = '/login'

        }).catch((error) => { 
            alert('ログアウトNG');        
        });

        

    }

    return(
        <button 
            className="block w-24 h-12 mt-4 p-1 ml-2 text-center text-gray-600"
            onClick={LogoutAction}
            >
            ログアウト
        </button>
    );

}

export default Logout;