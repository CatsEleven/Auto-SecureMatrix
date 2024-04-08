async function getData(){
    await chrome.storage.sync.get(['Auto-SM'], function (items) {
        let data = items['Auto-SM'];  
        if(Object.keys(data).length == 8){
            let returnValue = [];
            for(let i = 0; i < 8; i++){
                let key = Object.keys(data)[i];
                if(key){
                    returnValue.push(Object.keys(data)[i])
                }
            }
        }
    })
}

if(document.getElementById('smxpwd')){

    document.getElementById('smxpwd').value = getData();
}