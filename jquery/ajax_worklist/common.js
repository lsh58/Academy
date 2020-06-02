$(function () {
    //start
    $.ajax({
        url: 'data.xml',
        type: 'GET',
        dataType: 'xml',
        success: function (data) {


            var thum, name, time;
            var workMain, workList = '';

            $(data).find('work').each(function (i) {
                thum = $(this).find('thum').text();
                name = $(this).find('name').text();
                time = $(this).find('time').text();

                if (!$('section').hasClass('work')) {
                    funMain(i);
                } else {
                    funSub(i);
                }
            });


            function funMain(idx) {

                workMain = "<figure><a href=sub.html#" + idx + ">";
                workMain += "<img src=" + thum + ">";
                workMain += "<figcaption>" + name + "</figcaption></a></figure>";

                $('section').append(workMain);
            }

            function funSub() {
                workList = "<li>";
                workList += "<figure>";
                workList += "<img src=" + thum + ">";
                workList += "<figcaption>";
                workList += "<span>" + name + "</span>";
                workList += "<span>" + time + "</span>";
                workList += "</figcaption>";
                workList += "</figure>";
                workList += "</li>";

                $('section ul').append(workList);
            }

            function detail(fIdx) {
                var detail = $(data).find('work').eq(fIdx).find('detail').text();
                var nameDetail = $(data).find('work').eq(fIdx).find('name').text();
                var timeDetail = $(data).find('work').eq(fIdx).find('time').text();
                var linkDetail = $(data).find('work').eq(fIdx).find('link').text();

                $('article img').attr('src', detail);
                $('article figcaption span').eq(0).text(nameDetail);
                $('article figcaption span').eq(1).text(timeDetail);
                $('article figcaption a').attr('href', linkDetail);
            }

            var url = location.hash.substr(1);
            console.log(url);
            $('section ul li').eq(url).addClass('active');
            detail(url);

            $('section ul li').on('click', function () {
                var idx = $(this).index();
                detail(idx);
            });
















            //            
            //            main(썸네일,제목),
            //            sub(썸네일,제목)
            //            detail(큰이미지,제목,기간,)
            //            



        }
    });

    //end
});







 // data.portfolio.length; 2
// data.portfolio[0].work1.length; 5
//            
//            for(var i in data.portfolio){
//                
//                for(var j in data.portfolio[i].work1){
//                    
//                }
//                
//            }
//            