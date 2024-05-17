// 学院ポータル画面で、パスワードを自動入力する処理
// データを取得する関数
async function getData(){
    return new Promise((resolve) => {
        chrome.storage.sync.get(['Auto-SM'], function (items) {
            let data = items['Auto-SM'];  
            if(data && Object.keys(data).length == 8){
                resolve(data);
            }
        });
    });
}

// データを設定する関数。inputエリアに自動入力する。ユーザに見せる数字は、もとからあるbrタグをpタグに置き換えて表示する
async function setData(){
        let data = await getData();
        let keys = Object.keys(data); 
        
        // input要素に入力する処理
        if(keys.length == 8){
            let inputText = '';
            for(let i = 0; i < keys.length; i++){
                let id = data[keys[i]]; 
                inputText += document.querySelector(`[name="BTN${id}"]`).getAttribute('alt');
            }
            document.getElementById('smxpwd').value = inputText;
           
            // ユーザに数字を見せる処理
            let brTags = document.querySelectorAll('br');
            if (brTags.length >= 2) {
                // 新しい<p>要素を作成
                const newP = document.createElement('p');
            
                // 新しい<p>要素にテキストを設定
                newP.textContent = inputText;
            
                // 2番目の<br>タグを新しい<p>要素で置き換え
                brTags[1].replaceWith(newP);
              }
    }
}

if(document.getElementById('smxpwd')){
    addEventListener('load', setData)
}
