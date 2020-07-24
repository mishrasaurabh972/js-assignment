var i =0;
function colorchange(){
    var doc = document.getElementById("background");
    var color = ["blue","Gray","Brown","Navy","lime","mustard","coral","green","indigo","violet","orange"]
    doc.style.backgroundColor = color[i];
    i = (i+1)%color.length;
}
setInterval(colorchange, 5000);