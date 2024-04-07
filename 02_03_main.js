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

// 全てのボタンに、関数を付与
for (let i = 1; i <= 64; i++) {
    let btnId = 'btn' + i;
    document.getElementById(btnId).addEventListener('click', function() { buttonClicked(this); });
  }

document.getElementById("clear").addEventListener("click", clear)

function clear(){
    if(window.confirm("選択された場所をクリアします。よろしいですか？")){
        for (let i = 1; i <= 64; i++) {
            let btnId = 'btn' + i;
            document.getElementById(btnId).textContent = '';
          }
}
}

