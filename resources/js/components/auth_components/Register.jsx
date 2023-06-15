import React, { useState, useEffect} from 'react';
import RegisterEmailVerify from './RegisterEmailVerify';
import RegisterForm from './RegisterForm';



function Register(){

    // 初期状態(status=true)の場合、登録情報の入力画面コンポーネントを表示する
    const [ registerCheck, setRegisterCheck ] = useState({
        status: true,
        email: '',
    });


    return (
        // 登録情報の送信が完了or未了で表示を切り替える
        <div className="w-1/3 ml-auto mr-auto">
            
            { registerCheck.status ? 
                <RegisterForm setRegisterCheck={setRegisterCheck} /> 
                : 
                <RegisterEmailVerify email={registerCheck.email} /> 
            }
        
        </div>
    );
    
    
}

export default Register;