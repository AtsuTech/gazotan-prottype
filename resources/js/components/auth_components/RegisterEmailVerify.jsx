import axios from 'axios';

document.title = 'メール承認';

function RegisterEmailVerify(props) {

  function Submit(e) {

    e.preventDefault();

    axios.get('http://127.0.0.1:8000/api/email/resesnd', {params: {email: props.email}}).then(function (response) {
        // 送信成功時の処理
        alert('メールを再送しました');
    })
    .catch(function (error) {
        // 送信失敗時の処理
        alert('NG');
        console.log('通信に失敗しました');
    });

  }


  return (
    <div className="block w-full mt-10 mb-10 p-5 rounded-3xl bg-white text-slate-600">
        <h1 className="w-full text-center text-2xl mb-10">
          メール承認
        </h1>
        
        <p>
          <b>{props.email}</b>宛にメールを送りました。<br/>
          届いたメールの承認ボタンを押してアカウントを有効化ください。<br/>
          ※ボタンがうまく機能しない場合はリンクをクリックしてください。
          
        </p>
        <form onSubmit={Submit}>
          <button type="submit" className='text-yellow-500'>
            メールが届いてない場合はこちらをクリック
          </button>
        </form>
    </div>
  );
}

export default RegisterEmailVerify;