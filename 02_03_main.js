// 全てのボタンに、関数を付与
for (let i = 0; i < 64; i++) {
    let btnId = 'btn' + i;
    document.getElementById(btnId).addEventListener('click', function() { buttonClicked(this); });
  }
document.getElementById("submit").addEventListener("click", submit)
document.getElementById("clear").addEventListener("click", clear)
document.getElementById("delete").addEventListener("click", deleteData)


// 数字を入れる処理
let count = 0;
function buttonClicked(button) {
    if(!button.textContent){
        if (count < 8) {
            count++;
            button.textContent = count;
        }
    } else {
        if (0 < count && count < 8 && button.textContent.length ==1) {
            let left = button.textContent;
            let right = count + 1;
            button.textContent = left + '|' + right;
            count++;
        }
    }
}

// 登録する処理
function submit(){
    if(window.confirm("登録します。よろしいですか？")){
        let submitArray = {};
        for (let i = 0; i < 64; i++) {
            let btnId = 'btn' + i;

            // ID：textContent（入ってる数字） Value: 数字の入っていた場所のgetElementByID 
            let content = document.getElementById(btnId).textContent;
            if(content !== ''){
                if (content.includes('|')) {
                    let leftStr = content.substring(0, content.indexOf('|'));
                    let rightStr = content.substring(content.indexOf('|')+1);
                    submitArray[String(leftStr)] = i;
                    submitArray[String(rightStr)] = i;
                }else{
                    submitArray[String(content)] = i;
                }
            }
        }

        if(Object.keys(submitArray).length != 8){
            document.getElementById("inner").innerHTML = 'エラー⚠SecureMatrixパスワードは8ケタで入力してください'
        }else{
            // chromeStorageはここへ。
            chrome.storage.sync.set({'Auto-SM': submitArray}, function () {});
            document.getElementById("inner").innerHTML = "登録しました";
        }
    }
}



// クリアする処理
function clear() {
    // if (window.confirm("選択された場所をクリアします。よろしいですか？")) {
        for (let i = 0; i < 64; i++) {
            let btnId = 'btn' + i;
            document.getElementById(btnId).innerHTML = '';
        }
        document.getElementById("inner").innerHTML = "クリアしました"
        count = 0;
    // }
}


// 消去する処理
function deleteData(){
    if (window.confirm("登録抹消します。よろしいですか？")) {
        for (let i = 0; i < 64; i++) {
            let btnId = 'btn' + i;
            document.getElementById(btnId).innerHTML = '';
    
        }
        chrome.storage.sync.set({'Auto-SM': ''}, function () {});
        document.getElementById("inner").innerHTML = "登録抹消しました"
    }
    count = 0;
    
}


//読み込み時、データ復元
async function restoreData(){
    await chrome.storage.sync.get(['Auto-SM'], function (items) {
        let data = items['Auto-SM'];  // ここを修正
        if (typeof(data) === 'object' && Object.keys(data).length === 8){
        // if(Object.keys(data) && Object.keys(data).length == 8){
            for(let i = 0; i < 8; i++){
                // let key = Object.keys(data)[i];
                // let key = Object.keys(data)[i-1];
                // キーの情報が、一次元配列で格納される。
                let keys = Object.keys(data);
                console.log(keys)

                // Object.keys(data)[i];で、連想配列のキーの方を手に入れる
                // 連想配列のバリューの方は、連想配列[キーの名前]で手に入れる
                // キーはただの一次元配列（0スタート）だが、連想配列は1スタート

                if(keys){
                    if (document.getElementById("btn" + data[keys[i]]).innerHTML) {
                        let before = document.getElementById("btn" + data[keys[i]]).innerHTML;
                        let after = keys[i];
                        document.getElementById("btn" + data[keys[i]]).innerHTML = before + '|' + after;
                    }else{
                        document.getElementById("btn" + data[keys[i]]).innerHTML = keys[i];
                    }    
                }
                count ++;
            }
        }
    })
}


// 読み込まれたときに、表示を復元させる
window.addEventListener('load',function () {
    restoreData();
})