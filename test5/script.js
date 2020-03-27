var burger = document.querySelector('.burger');
var visual = document.querySelector('.visual');
var popMenu = document.querySelector('.popMenu');
var a = 0;
var visual_text = visual.querySelector('.textWrapper');
var h3 = document.querySelector('section h3');
var div = document.querySelectorAll('section .imageBox>div');
var banner = document.querySelector('.banner');
var header = document.querySelector('header');

window.addEventListener('load', function () {
    visual_text.style.opacity = 1;
    visual_text.style.paddingTop = '0';
});

burger.addEventListener('click', function () {
    popMenu.classList.toggle('active');
    visual.style = 'animation: pop01 .7s forwards;';
    a++;
    if (a == 2) {
        visual.style = 'animation: pop02 .7s forwards';
        a = 0;
    }
})

console.log(div[2].offsetTop - window.innerHeight + 200);
var lastScroll = 0;
window.addEventListener('scroll', function () {
    var scroll = window.scrollY;
    console.log(scroll);
    h3.style.opacity = 1;
    h3.style.paddingTop = '20px';
    if (scroll > lastScroll) {
        header.style.top = '-300px';
        // for(var i=0; i<div.length;i++)
        if (scroll > div[0].offsetTop - window.innerHeight + 200) {
            div[0].style = 'transform: translateY(0)';
            div[0].style.opacity = 1;
            setTimeout(function () {
                div[1].style = 'transform: translateY(0)';
                div[1].style.opacity = 1;
            }, 300);
        }
        if (scroll > div[2].offsetTop - window.innerHeight + 200) {
            div[2].style = 'transform: translateY(0)';
            div[2].style.opacity = 1;
            setTimeout(function () {
                div[3].style = 'transform: translateY(0)';
                div[3].style.opacity = 1;
            }, 300);
        }
        if (scroll > div[4].offsetTop - window.innerHeight + 200) {
            div[4].style = 'transform: translateY(0)';
            div[4].style.opacity = 1;
            setTimeout(function () {
                div[5].style = 'transform: translateY(0)';
                div[5].style.opacity = 1;
            }, 300);
        }
        if (scroll > banner.offsetTop - window.innerHeight + 200) {
            banner.style = 'transform: translateY(0)';
            banner.style.opacity = 1;
        }
    }
    else {
        header.style.top = '0';
        if (scroll < 200) {
            h3.style.opacity = 0;
            h3.style.paddingTop = '60px';
            for (var i = 0; i < div.length; i++) {
                div[i].style = 'transform: translateY(100px)';
                div[i].style.opacity = 0;
            }
            banner.style = 'transform: translateY(50px)';
            banner.style.opacity = 0;
        }
    }
    lastScroll = scroll;

})