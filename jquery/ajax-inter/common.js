$(function () {
    //start
    $.ajax({
        url: 'data.xml',
        type: 'GET', //POST
        dataType: 'xml',
        timeout: 2000,
        beforeSend: function () { //처음에 뜨는거
            //console.log('로딩중');
            $('.loading').fadeIn();
        },
        complete: function () { //2초후에 나오게
            setTimeout(function () {
                $('.loading').fadeOut();
            }, 1000);
        },
        success: function (data) {

            var imgTag = '';
            var itemRow = 3,
                first = 0,
                last = itemRow;

            setTimeout(function () {
                function getItem() {
                    $(data).find('item').each(function (i) { //item을 찾아서 각각에 function 사용
                        if (first <= i && i < last) { //0~2, 3~5, 6~8 찾기
                            imgTag = "<img src=" + $(this).text() + ">"; //item의 text내용 불러와서 imgTag에 넣기
                            $('section').append(imgTag); //집어넣기
                            $('section img').eq(i).hide().fadeIn(); //태그넣으면 바로넣으니까 가려놓고 나오게
                        }
                    });
                }
                getItem()
                //$('section').html(imgTag);
                $('section').fadeIn();
                $('button').on('click', function () {
                    first += itemRow;
                    last += itemRow;
                    getItem();
                });
            }, 2000);
        },
        error: function () {
            alert('FAIL');
        }
    });

    //end
});