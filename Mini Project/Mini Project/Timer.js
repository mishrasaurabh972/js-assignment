function showTimer() {
    var time = prompt("Please set time in the format = Hr:min:sec  Ex. 05:10:56", "00:01:00");
    timer_div = document.getElementById("timer_div");
     applyCSS(timer_div);
    timer_div.innerHTML = time;
    my_timer = setInterval(function () {
        var hr, min, sec;
        hr = min = sec = 0;
        var time_up = false;
        // split function breaks the string on the basis of Colon(:)
        t = time.split(":");
        // here we typeCaste string into integer 
        hr = parseInt(t[0]);
        min = parseInt(t[1]);
        sec = parseInt(t[2]);
        if (sec == 0) {
            if (min > 0) {
                sec = 59;
                min--;
            }
            else if (hr > 0) {
                min = 59;
                sec = 59;
                hr--;
            }
            else {
                time_up = true;
            }
        }
        else {
            sec--;
        }
        
        if (hr < 10) {
            hr = "0" + hr;
        }
        if (min < 10) {
            min = "0" + min;
        }
        if (sec < 10) {
            sec = "0" + sec;
        }
        time = hr + ":" + min + ":" + sec;
        var sound1 = new Audio('alarm-clock.mp3');
        let playSound = function () {
             sound1.play();
        }
        if (time_up==true) {
            playSound();
        }
        if (time_up) {
            time = "TIME UP"
        }
        timer_div = document.getElementById("timer_div");
        timer_div.innerHTML = time;
        if (time_up)
        clearInterval(my_timer);
        
    }, 1000);
}
function applyCSS(timer_div) {
    timer_div.style.fontSize = "50px";
    timer_div.style.color = "teal";
    timer_div.style.fontWeight = "bold";
    timer_div.style.width = "200px";
    timer_div.style.padding = "25px";
    timer_div.style.textAlign = "center";
    timer_div.style.border = "2px solid green";

}
function reset(){
    setTimeout(location.reload(true));
}
