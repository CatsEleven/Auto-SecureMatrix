// 全てのボタンに、関数を付与
for (let i = 1; i <= 64; i++) {
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
        // ここに、chromeStorageの記述を追加する。8コ無いときはエラー吐かせる。
        let submitArray = [];
        for (let i = 1; i <= 64; i++) {
            let btnId = 'btn' + i;
            //console.log(document.getElementById("1").textContent)
            if(document.getElementById(btnId).textContent){
            }
          }
        console.log(document.getElementById("btn1").innerHTML)
        document.getElementById("inner").innerHTML = "登録しました"
    }
}



// クリアする処理
function clear(){
    if(window.confirm("選択された場所をクリアします。よろしいですか？")){
        for (let i = 1; i <= 64; i++) {
            let btnId = 'btn' + i;
            document.getElementById(btnId).textContent = '';
          }
}
}

function deleteData(){
    if(window.confirm("登録抹消します。よろしいですか？")){
        for (let i = 1; i <= 64; i++) {
            let btnId = 'btn' + i;
            document.getElementById(btnId).textContent = '';
        }
        // ここに、chromeStorageの記述を追加する
        document.getElementById("inner").innerHTML = "登録抹消しました";
    }
}