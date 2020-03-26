$(function () {
    //start
    $.ajax({
        url: 'data.xml',
        type: 'GET', //POST
        dataType: 'xml',
        beforeSend: function () {
            // console.log('로딩중')
            $('.loading').fadeOut();

        },
        completed: function () {
            // console.log('로딩삭제')
            $('.loading').fadeOut();
        },
        success: function (data) {

            setTimeout(function () {

                var imgTag;

                $(data).find('item').each(function (i) {

                    imgTag = '<img src=' + $(this).text() + '>';
                    $('section').append(imgTag);

                });

            }, 3000);


        },
        error: function () {
            alert('FAIL');
        }
    });

    //end
});