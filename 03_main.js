let count = 0;

function buttonClicked(button) {
    count++;
    button.textContent = count;
}

document.getElementById('btn1').addEventListener('click', function() { buttonClicked(this); });
document.getElementById('btn2').addEventListener('click', function() { buttonClicked(this); });
document.getElementById('btn3').addEventListener('click', function() { buttonClicked(this); });
document.getElementById('btn4').addEventListener('click', function() { buttonClicked(this); });
document.getElementById('btn5').addEventListener('click', function() { buttonClicked(this); });
