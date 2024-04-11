// async function getData(){
//     await chrome.storage.sync.get(['Auto-SM'], function (items) {
//         let data = items['Auto-SM'];  
//         if(Object.keys(data).length == 8){
//             //let returnValue = [];
//             // for(let i = 0; i < 8; i++){
//             //     let key = Object.keys(data)[i];
//             //     if(key){
//             //         returnValue.push(Object.keys(data)[i])
//             //     }
//             // }
//             return data;
//         }
//     })
// }

// async function setData(){
//     let data = await getData()
//         // TODO　dataからID情報を抜く。→そのIDをもとに、SecureMatrixからValue情報を抜く→配列か変数に格納→それを表示させる
//         //keysには、キーが一次元配列で格納される
//         let keys = Object.keys(data); 
//         window.alert(keys.length)
//         if(keys.length == 8){
//             let inputText = '';
//             for(let i = 0; i<9; i++){
//                 let id = data[keys[i]]; 
//                 inputText = inputText + document.querySelector(`[name="BTN${id}"]`).getAttribute('alt');
//                 document.getElementById('smxpwd').value = inputText;
//                 window.alert(inputText)
//             }

//         }

// }

// function ale(){
//     window.alert('data')
// }

// addEventListener('load', setData)

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

async function setData(){
        let data = await getData();
        let keys = Object.keys(data); 
        //indow.alert(keys.length);
        if(keys.length == 8){
            let inputText = '';
            for(let i = 0; i < keys.length; i++){
                let id = data[keys[i]]; 
                inputText += document.querySelector(`[name="BTN${id}"]`).getAttribute('alt');
            }
            //document.getElementById('smxpwd').type = 'text';
            document.getElementById('smxpwd').value = inputText;
            //document.querySelector('input[type="button"][value="OK"]').value = 'AIM';

            // brタグを取得するためにセレクタを使用
            const brElements = document.querySelectorAll('input[name="SMLOCALE"] + br');

            // 特定のbrタグを取得（2番目のbrタグと想定）
            const brElement = brElements[1]; // セキュアマトリクスパスワード直後のbr

            if (brElement) {
            // 新しいp要素を作成
            const pElement = document.createElement('p');
            // p要素にテキストを設定
            pElement.textContent = 'ここに新しいテキストを挿入';

            // brタグを新しいpタグで置き換える
            brElement.parentNode.replaceChild(pElement, brElement);
}



















            window.alert(inputText);
        }
}

//addEventListener('load', setData);

if(document.getElementById('smxpwd')){
    addEventListener('load', setData)
}
