// Create an array and assign it values.
var colors;
colors = ["red", "black", "blue"];

// Show the first item from the array.
var el = document.getElementById("colors");

var clr = "";

for (var i in colors) {
    // clr += "<br>" + "<span style=color:" + colors[i] + ">";
    // clr += colors[i];
    // clr += "</span>";
    clr += "<span>" + colors[i] + "</span>";
}
el.innerHTML = clr;
var span = el.getElementsByTagName("span");

for (var i in colors) {
    span[i].className = colors[i];
    if (!span[i].classList.contains("white")) {
        span[i].classList.add("white");
    }
}

// for (var j in colors) {
//     span[j].style.color = colors[j];
// }
