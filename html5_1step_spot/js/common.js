$(function () {
    //start
    $('.depth div').hide();
    $('.depth').on('mouseenter', function () {
        $(this).find('div').stop().slideDown();
    });
    $('.depth').on('mouseleave', function () {
        $(this).find('div').stop().slideUp();
    });

    $('.burger>span').hide();
    $('.trigger_menu').on('click', function () {
        $('.burger>span').stop().slideToggle();
    });
    // $('.trigger_menu').on('click', function () {
    //     $('.burger>span').show().animate({
    //         top: 40, opacity: 1
    //     });
    // });

    //end
});