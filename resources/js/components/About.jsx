import React from 'react';


function About(){
    document.title = 'About';
    return(
        <>
            <main className='w-4/5 ml-auto mr-auto'>
                <h1 className='text-3xl mt-6'>Gazotanはどんなサービス？</h1>

                <p className='mt-3 text-zinc-800'>
                    Gazotan(ガゾタン)は画像付きのweb英単語帳です。<br/>
                    画像で単語のイメージし、記憶を定着するサポートをします。<br/>
                    また、画像だけでなくて品詞をカテゴリを設定したり、例文なども登録可能です。<br/>
                    自由に編集して、あなただけのオリジナルの単語帳を作りましょう！
                </p>
            </main>
            
        </>
        
    );
}

export default About;