$(function(){
    //start
    $.ajax({
        url : 'data.xml',
        type : 'GET', //POST
        dataType : 'xml',
        timeout : 2000,
        beforeSend : function(){ 
            //console.log('로딩중');
            $('.loading').fadeIn();
        },
        complete :function(){ 
            setTimeout(function(){
                $('.loading').fadeOut();
            },1000);
        },
        success :function(data){
            
            
setTimeout(function(){
    var imgTag='';

    $(data).find('item').each(function(i){
        if(6<9){}
        
        if(3<6){}
        
        if(0<3){
            imgTag = "<img src="+$(this).text()+">";
            $('section').append(imgTag);
        }
        
    });
    //$('section').html(imgTag);
    $('section').fadeIn();
},2000);          
            
            
            
        },
        error : function(){
            alert('FAIL');
        }
    });
    
    //end
});