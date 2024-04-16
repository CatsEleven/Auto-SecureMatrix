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
