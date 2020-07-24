var name = prompt(`Enter your name:`);
title.innerText = `Welcome ${name} to our website`;
var time = document.getElementById('time');
function clck(){
    var a = new Date;
    var b = a.toLocaleTimeString();
    time.innerText = `Time is:` +b;
}
setInterval(clck,1000);
var drkmode = document.getElementById("btn");
drkmode.onclick = function playmode(){
    var s = document.body;
    s.classList.toggle("darkmode");
}