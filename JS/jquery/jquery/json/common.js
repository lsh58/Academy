$(function(){
    //start
    $.ajax({
        url : 'data.xml',
        type : 'GET', //POST
        dataType : 'xml',
//      beforeSend : function(){ 문서로드시 발생 },
//      completed :function(){문서로드완료},
        success :function(data){
            
            
            
    var imgTag;

    $(data).find('item').each(function(i){
        
        imgTag = "<img src="+$(this).text()+">";
        $('section').append(imgTag);
        
    });
          
            
            
            
        },
        error : function(){
            alert('FAIL');
        }
    });
    
    //end
});