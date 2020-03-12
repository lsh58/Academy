//ex1
window.addEventListener("DOMContentLoaded", function() {
    var ex1 = document.getElementById("ex1");
    var txtinput = document.querySelectorAll(".txt-input");
    var addbtn = document.querySelector(".add-button");
    var resultbtn = document.querySelector(".result-button");
    var menulist = document.querySelector(".menu-list");
    var name = Array();
    var math = Array();
    var eng = Array();
    var i = 0;

    addbtn.addEventListener("click", function() {
        enter();
    });
    ex1.addEventListener("keydown", function(e) {
        if (e.keyCode == 13) {
            enter();
        }
    });
    function enter() {
        name[i] = txtinput[0].value;
        math[i] = parseInt(txtinput[1].value);
        eng[i] = parseInt(txtinput[2].value);
        menulist.innerHTML += "<p>이름:" + name[i] + " 수학점수: " + math[i] + " 영어점수: " + eng[i];
        i++;
        txtinput[0].value = null;
        txtinput[1].value = null;
        txtinput[2].value = null;
    }

    resultbtn.addEventListener("click", function() {
        for (var k = 0; k < name.length; k++) {
            menulist.innerHTML +=
                "<li>" + name[k] + "의 총점 : " + (math[k] + eng[k]) + "</li>" + "<li>" + name[k] + "의 평균 : " + (math[k] + eng[k]) / 2 + "</li>";
        }
    });
});
window.addEventListener("DOMContentLoaded", function() {
    var ex2 = document.getElementById("ex2");
    var a = document.querySelector(".class-list");

    a.addEventListener("click", function() {
        a.classList.add("red");
        a.classList.remove("class-list");
    });
});
window.addEventListener("DOMContentLoaded", function() {
    var ex3 = document.getElementById("ex3");
    var a = document.querySelector(".class-list");

    a.addEventListener("click", function() {
        this.classList.add("active");
        this.classList.remove("class-list");
    });
});
window.addEventListener("DOMContentLoaded", function() {
    var ex4 = document.getElementById("ex4");
    var toggleclass = document.querySelector(".toggle");

    toggleclass.addEventListener("click", function() {
        this.classList.toggle("on");
    });
    console.log(toggleclass.className == "toggle on");
});
window.addEventListener("DOMContentLoaded", function() {
    var ex5 = document.getElementById("ex5");
    var li = document.querySelectorAll(".faq li");
    var div = document.querySelectorAll(".faq li div");

    for (var i = 0; i < li.length; i++) {
        li[i].addEventListener("click", function(e) {
            for (var j = 0; j < div.length; j++) {
                if (li[j].childNodes[1].className == "on") {
                    li[j].childNodes[1].classList.remove("on");
                }
                e.target.childNodes[1].classList.add("on");
            }
        });
    }
});
