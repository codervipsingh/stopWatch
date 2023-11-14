
let  [msec, secs, min, hours] = [0,0,0,0];

let timerId = null;


function stopTime(){
    msec ++;
    if(msec == 100){
        msec = 0;
        secs++;
        if(secs == 60){
            secs = 0;
             min++;
             if(min==60){
                min=0;
                hours++
             }
        }
    }
    let h= hours < 10 ? '0' + hours : hours;
    let m= min < 10 ? '0' + min : min;
    let s= secs < 10 ? '0' + secs :secs;
    let ms= msec < 10 ? '0' + msec :msec;

    timerDisplay.innerHTML = h + ':' + m + ':'+ s + ':'+ ms;
}
    function startWatch (){
        if(timerId !== null){
            clearInterval(timerId);
        }
        timerId = setInterval(stopTime, 10);
}


function stopWatch(){
    clearInterval(timerId);
}

function resetWatch(){
    clearInterval(timerId);
    [msec, secs, min, hours] = [0,0,0,0];
    timerDisplay.innerHTML = '00:00:00';
}