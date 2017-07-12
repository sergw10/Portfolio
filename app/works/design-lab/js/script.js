$(document).ready(function(){

// Scroling
	$(window).scroll( function() {
	    if ( $(window).scrollTop() >= 800 ) { 
	        $('#block-1').css('transition','1.5s');
	        $('#block-1').css('left','0%'); 
	    }
	    if ( $(window).scrollTop() >= 1200 ) { 
	        $('#block-2').css('transition','1.5s');
	        $('#block-2').css('right','0%'); 
	    }
	    if ( $(window).scrollTop() >= 1800 ) { 
	        $('#block-3').css('transition','3s');
	        $('#block-3').css('opacity','1'); 
	    }
	});

// Anhor
	$("#arrow").on("click","a", function (event) {
    	//отменяем стандартную обработку нажатия по ссылке
    	event.preventDefault();
   		//забираем идентификатор бока с атрибута href
   		var id  = $(this).attr('href'),
   		//узнаем высоту от начала страницы до блока на который ссылается якорь
   		bot = $(id).offset().bot;
    	//анимируем переход на расстояние - bottom за 2000 мс
    	$('body,html').animate({scrollTop: bot}, 2000);
    });
});