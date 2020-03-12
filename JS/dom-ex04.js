//ex1
window.addEventListener("DOMContentLoaded", function() {
    var ex1 = document.querySelector("#ex1"),
        bugger = ex1.querySelector(".menu-trigger"),
        nav = ex1.querySelector(".nav");

    bugger.addEventListener("click", function() {
        // if (this.className != "menu-trigger active-1") {
        //     this.classList.add("active-1");
        //     nav.classList.add("active");
        // } else {
        //     this.classList.remove("active-1");
        //     nav.classList.remove("active");
        // }
        //if문 처리
        //
        this.classList.toggle("active-1");
        nav.classList.toggle("active");
        //토글사용방법
        //
        // this.classList.toggle("active-1");
        // if (this.classList.contains("active-1")) {
        //     nav.classList.add("active");
        // } else {
        //     nav.classList.remove("active");
        // }
        //토글+컨테인 사용방법
    });
});
//ex2
window.addEventListener("DOMContentLoaded", function() {
    var ex2 = document.querySelector("#ex2"),
        tab = ex2.querySelector(".tab"),
        con = ex2.querySelectorAll(".tab-con");

    tab.addEventListener("click", function(e) {
        e.target.classList.toggle("active");
        var tabactive = ex2.querySelector(".active");
        tabactive.classList.remove("active");
        //반복문 안쓰고 모든active 제거하기
        var data = e.target.dataset.id;
        var num = data.replace("tab0", "");
        console.log(num);
        con[num - 1].classList.toggle("active");
        //
        // this.classList.toggle("active-1");
        // if (this.classList.contains("active-1")) {
        //     nav.classList.add("active");
        // } else {
        //     nav.classList.remove("active");
        // }
        //토글+컨테인 사용방법
    });
});
