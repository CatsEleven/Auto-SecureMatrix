// 全てのボタンに、関数を付与
for (let i = 0; i < 64; i++) {
    let btnId = 'btn' + i;
    document.getElementById(btnId).addEventListener('click', function() { buttonClicked(this); });
  }

document.getElementById("submit").addEventListener("click", submit)
document.getElementById("clear").addEventListener("click", clear)
document.getElementById("delete").addEventListener("click", deleteData)

// 数字を入れる処理
count = 0;
function buttonClicked(button) {
    if(!button.textContent){
        count++;
        button.textContent = count;
        
    }else{
        button.textContent = null;
        count--
    }
}

// 登録する処理
function submit(){
    if(window.confirm("登録します。よろしいですか？")){
        let submitArray = {};
        for (let i = 0; i < 64; i++) {
            let btnId = 'btn' + i;
            //console.log(document.getElementById("1").textContent)
            // ID：入ってる数字
            if(document.getElementById(btnId).textContent !== ''){
                submitArray[String(document.getElementById(btnId).textContent)] = i 
            }
        }

        if(Object.keys(submitArray).length != 8){
            window.alert('SecureMatrixパスワードは8ケタで入力してください')
        }else{
            // chromeStorageはここへ。
            chrome.storage.sync.set({'Auto-SM': submitArray}, function () {});
            //document.getElementById("inner").innerHTML = "登録しました"
            //document.getElementById("inner").innerHTML = submitArray
            window.alert(JSON.stringify(submitArray))
        }

        
    }
}



// クリアする処理
function clear() {
    if (window.confirm("選択された場所をクリアします。よろしいですか？")) {
        for (let i = 0; i < 64; i++) {
            let btnId = 'btn' + i;
            document.getElementById(btnId).innerHTML = '';
        }
        document.getElementById("inner").innerHTML = "クリアしました"
    }
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
    
}


// 読み込み時、データ復元
async function restoreData(){
    await chrome.storage.sync.get(['Auto-SM'], function (items) {
        let data = items['Auto-SM'];  // ここを修正
        if(Object.keys(data).length == 8){
            for(let i = 0; i < 8; i++){
                let key = Object.keys(data)[i];
                //window.alert(JSON.stringify(JSON.stringify(key[i])))
                //document.getElementById("inner").innerHTML = key[i]
                if(key){
                    document.getElementById("btn" + data[i]).innerHTML = Object.keys(data)[i];
                }
            }
        }
    })
}

function con(){
    console.log("hello")
}

window.addEventListener('load',function () {
    restoreData();
    con();
})