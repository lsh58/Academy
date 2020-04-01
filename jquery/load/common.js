$(function(){
	//start
	$('header').load("header.html nav");
	$('footer').load("header.html .foot");
	$('section').load("main.html");
	
	$('body').addClass('active');
	
	setTimeout(function(){
		$('header nav a').on('click',function(e){
			e.preventDefault();//페이지 안넘어감?
		
			var link = $(this).attr('href');
			
			$('body').removeClass('active');
			setTimeout(function(){
				location.href = link;
			},500);
		
		});
		
	},10);
	
	//end
});