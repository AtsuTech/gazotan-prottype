import React from 'react';

document.title = '登録完了';

function RegisterComplete() {

  return (
    <div className="w-1/2 h-80 ml-auto mr-auto mt-20 mb-20 p-4 rounded-3xl bg-white text-slate-600">
        <h1 className="w-full text-center text-2xl mb-10">
            登録完了
        </h1>
        <p className="text-center">
          ユーザー登録が完了しました。
        </p>
        <button className="block mt-10 mb-10 bg-amber-500 w-24 h-10 text-white ml-auto mr-auto rounded-lg shadow-lg font-medium text-1xl mb-0">
          OK
        </button>
    </div>
  );

}

export default RegisterComplete;