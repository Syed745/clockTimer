var hr = 0;
var min = 0;
var sec = 0;
var mSec = 0;


var hours = document.getElementById('hours');
var minute = document.getElementById('minute');
var second = document.getElementById('second');
var milisec = document.getElementById('milisec');
var dis = document.getElementById('dis')




var interval;


function foo() {
    mSec++
    milisec.innerHTML = mSec;
    if(mSec >= 100){
        sec++
        second.innerHTML = sec
        mSec = 0
    }else if(sec >= 60){
        min++
        minute.innerHTML = min
        sec = 0
    }
    
}

function start(){
interval = setInterval(foo,10)
dis.style.display = "none"
}

function pause(){
    clearInterval(interval)
    dis.style.display = "block"
}
 
function reset(){
    hr = 0;
    min = 0;
    sec = 0;
    mSec = 0;
    hours.innerHTML = hr
    minute.innerHTML = min
    second.innerHTML = sec
    milisec.innerHTML = mSec
    pause()
}

