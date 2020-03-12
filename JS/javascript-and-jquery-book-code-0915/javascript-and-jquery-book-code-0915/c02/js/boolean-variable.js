// Create variables and assign their values
var inStock;
var shipping;
inStock = true;
shipping = false;

var aa = document.getElementById("content");

var a = "active";
var b = "";
// Get the element that has an id of stock
var elStock = document.getElementById("stock");
// Set class name with value of inStock variable
elStock.className = inStock;
elStock.addEventListener("click", function() {
    if (elStock.className === "true") {
        elStock.className = shipping;
        aa.className = a;
    } else {
        elStock.className = inStock;
        aa.className = b;
    }
});

// Get the element that has an id of shipping
var elShip = document.getElementById("shipping");
// Set class name with value of shipping variable
elShip.className = shipping;
elShip.addEventListener("click", function() {
    if (elShip.className === "false") {
        elShip.className = inStock;
        aa.className = a;
    } else {
        elShip.className = shipping;
        aa.className = b;
    }
});

var e = document.getElementById("tit");
e.innerHTML = "ClassName";
