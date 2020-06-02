$(function () {
    $.ajax({
        url: 'data.xml',
        dataType: 'xml',
        type: 'get',
        beforeSend: function () {
            $('.loading').fadeIn();
        },
        success: function (data) {
            var thum;
            var photo = '',
                pop = '',
                text = '',
                idx = 0;
            $(data).find('item').each(function () {
                thum = $(this).find('thum').text();
                photo = '<article class="thumb">' + '<img src=' + thum + '>' + '</article>';
                $('#main').append(photo);
            });
            $('#main').on('click', 'article', function (e) {
                e.preventDefault();
                $('.poptrox-overlay').show();
                idx = $(this).index();
                dataInfo();

            });
            $('.nav-previous').click(function () {
                if (idx <= 0) {

                } else {
                    idx--;
                }
                dataInfo();
            });
            $('.nav-next').click(function () {
                idx++;
                dataInfo();
            });

            function dataInfo() {
                pop = $(data).find('item').eq(idx).find('full').text();
                text = $(data).find('item').eq(idx).find('title').text();
                $('.poptrox-popup .pic img').attr('src', pop);
                $('.caption').text(text);
            }

            $('.icon').click(function () {
                $('footer').toggleClass('active');
            });

            $('.closer').click(function () {
                $('.poptrox-overlay').hide();
            })

            $('.primary').click(function (e) {
                e.preventDefault();
                if ($('#name').val() == '' || $('#email').val() == '') {
                    alert('warning');
                } else {
                    $('footer').removeClass('active');
                }
            });
        },

        complete: function () {
            $('.loading').fadeIn();
            0
        },
        error: function () {
            alert('fail');
        }
    });
});
