function add() {
    var sum = 0;
    var a = prompt("첫번째 숫자");
    var b = prompt("두번째 숫자");
    a = parseInt(a);
    b = parseInt(b);
    sum = a + b;
    var result = document.getElementById("result");
    result.textContent = sum;
}
function add2() {
    var sum = 0;
    var x = document.getElementsByClassName("x");
    var y = document.getElementsByClassName("y");
    x = parseInt(x[0].value);
    y = parseInt(y[0].value);
    sum = x + y;
    var result = document.getElementById("result2");
    result.textContent = sum;
}

var answer = document.getElementById("answer");
var calc = document.querySelectorAll(".calc input");
var clear = document.getElementById("clear");
var equal = document.getElementById("equal");

for (var i = 0; i < calc.length; i++) {
    calc[i].onclick = function num() {
        if (answer.value == 0) {
            answer.value = "";
        }
        answer.value += this.value;
    };
}

clear.addEventListener("click", function() {
    answer.value = "0";
});

equal.addEventListener("click", function() {
    var total = eval(answer.value);
    answer.value = total;
});

var content = document.getElementById("content");
var check = document.getElementById("check");
var tbody = document.querySelector("tbody");
var numbering = tbody.querySelectorAll("tr").length;

function enter() {
    if (content.value == "") {
        alert("입력값이 없습니다");
    } else if (numbering < 9) {
        numbering++;
        tbody.innerHTML += "<tr><td>" + "0" + numbering + "</td>" + "<td>" + content.value + "</td></<tr>";
    } else {
        numbering++;
        tbody.innerHTML += "<tr><td>" + numbering + "</td>" + "<td>" + content.value + "</td></<tr>";
    }
    content.value = "";
}

check.addEventListener("click", enter);

content.addEventListener("keydown", function(e) {
    if (e.keyCode == 13) {
        enter();
    }
});
