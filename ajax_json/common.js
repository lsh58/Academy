$(function () {
    //start
    $.ajax({
        url: 'data.json',
        type: 'GET', //POST
        dataType: 'json',
        //      beforeSend : function(){ 문서로드시 발생 },
        //      completed :function(){문서로드완료},
        success: function (data) {

            console.log(data.event)

            for (var i in data.event) {
                var imgNode = document.createElement('img');
                imgNode.src = data.event[i];
                // var imgNode = "<img src ="+data.event[i]+">";

                $('section').append(imgNode);
            }



        },
        error: function () {
            alert('FAIL');
        }
    });

    //end
});