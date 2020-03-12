// Create and name the variable.
// Tell the interpreter it is an array.
// Assign values inside the parentheses.
var colors = new Array("white", "black", "custom");

// Show the first item from the array.
var el = document.getElementById("colors");
el.textContent = "";

for (var i in colors) {
    el.innerHTML += "<a>" + colors[i] + "</a>" + ",";
}

var aTag = document.getElementsByTagName("a");

for (var i in colors) {
    if (i != 1) {
        aTag[i].className = colors[i];
    }
}
