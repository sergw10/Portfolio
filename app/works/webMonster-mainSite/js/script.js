
/* For section 2 */

$('#grey_1').click( function () {
	$('#s2_img2').css({'opacity':'0','z-index':'20'});
	$('#grey_2').css({'background-color':'transparent','border-color':'#d1d1d1'});

	$('#s2_img3').css({'opacity':'0','z-index':'10'});
	$('#grey_3').css({'background-color':'transparent','border-color':'#d1d1d1'});

	$('#s2_img1').css({'opacity':'1','z-index':'100'});
	$('#grey_1').css({'background-color':'#e13b46','border-color':'#e13b46'});
});

$('#grey_2').click( function () {
	$('#s2_img3').css({'opacity':'0','z-index':'20'});
	$('#grey_3').css({'background-color':'transparent','border-color':'#d1d1d1'});

	$('#s2_img1').css({'opacity':'0','z-index':'20'});
	$('#grey_1').css({'background-color':'transparent','border-color':'#d1d1d1'});

	$('#s2_img2').css({'opacity':'1','z-index':'100'});
	$('#grey_2').css({'background-color':'#e13b46','border-color':'#e13b46'});
});

$('#grey_3').click( function () {
	$('#s2_img1').css({'opacity':'0','z-index':'20'});
	$('#grey_1').css({'background-color':'transparent','border-color':'#d1d1d1'});

	$('#s2_img2').css({'opacity':'0','z-index':'10'});
	$('#grey_2').css({'background-color':'transparent','border-color':'#d1d1d1'});

	$('#s2_img3').css({'opacity':'1','z-index':'100'});
	$('#grey_3').css({'background-color':'#e13b46','border-color':'#e13b46'});
});

/* For section 4 */

$('#s4_but_1').click( function () {
	$('.s4_imgs1').css({'opacity':'1','display':'flex'});
	$('#s4_but_1').css({'background-color':'#e13b46','border-color':'#e13b46'});

	$('.s4_imgs2').css({'opacity':'0','display':'none'});
	$('#s4_but_2').css({'background-color':'transparent','border-color':'#d1d1d1'});
});

$('#s4_but_2').click( function () {
	$('.s4_imgs2').css({'opacity':'1','display':'flex'});
	$('#s4_but_2').css({'background-color':'#e13b46','border-color':'#e13b46'});

	$('.s4_imgs1').css({'opacity':'0','display':'none'});
	$('#s4_but_1').css({'background-color':'transparent','border-color':'#d1d1d1'});
});

// /* For section 7 */
// $(".s7_grey_right").eq(0).show();
// $(".s7_grey_right").eq(1).hide();
// $(".s7_grey_right").eq(2).hide();
var counter = 1;

var	positionOne = function () {
		$('#s7_but_3, #s7_but_2').css({'background-color':'transparent','border-color':'#d1d1d1'});
		$('#s7_but_1').css({'background-color':'#e13b46','border-color':'#e13b46'});
		// $(".s7_grey_right").eq(0).fadeIn(500);
		// $(".s7_grey_right").eq(1).hide();
		// $(".s7_grey_right").eq(2).hide();

		$('#foto_2').css({'z-index':'10','opacity':'0'});
		$('#foto_1').css({'z-index':'100','opacity':'1'});
		$('#foto_3').css({'z-index':'20','opacity':'0'});
	};

var	positionTwo = function () {
		$('#s7_but_3, #s7_but_1').css({'background-color':'transparent','border-color':'#d1d1d1'});
		$('#s7_but_2').css({'background-color':'#e13b46','border-color':'#e13b46'});
		// $(".s7_grey_right").eq(0).hide();
		// $(".s7_grey_right").eq(1).fadeIn(500);
		// $(".s7_grey_right").eq(2).hide();

		$('#foto_1').css({'z-index':'10','opacity':'0'});
		$('#foto_2').css({'z-index':'100','opacity':'1'});
		$('#foto_3').css({'z-index':'20','opacity':'0'});
	};

var	positionThree = function () {

		$('#s7_but_1, #s7_but_2').css({'background-color':'transparent','border-color':'#d1d1d1'});
		$('#s7_but_3').css({'background-color':'#e13b46','border-color':'#e13b46'});
		// $(".s7_grey_right").eq(0).hide();
		// $(".s7_grey_right").eq(1).hide();
		// $(".s7_grey_right").eq(2).fadeIn(500);

		$('#foto_2').css({'z-index':'10','opacity':'0'});
		$('#foto_3').css({'z-index':'100','opacity':'1'});
		$('#foto_1').css({'z-index':'20','opacity':'0'});
	};


var s7_text1 = function () {
		$('.op-name').html('<b>Мария Колесник</b> / Представитель <br>FARTUK.IN.UA</h4>');
		$('.op-text').html('Команда WebMonsters - это команда профессионалов,' + 
							' которые точно знают чего хотят заказчики и конечные потребители!' +
							' Все на высшем уровне, очень довольны Вашей работой!');
	},
	s7_text2 = function () {
		$('.op-name').html('<b>Курицкая Елена</b> / Представитель <br>garant-service.in.ua</h4>');
		$('.op-text').html('Долгое время думала над созданием собственного сайта. Необходим' +
							' был личный онлайн магазин, который отлично бы функционировал,' +
							' давал прибыль и был доступен клиентам. В результате я обратилась' +
							' к команде ребят, которым изложила суть того, что мне хотелось бы видеть.' +
							' Итогом сотрудничества стал отличный сайт, который бесперебойно работает.' +
							' Ребята отнеслись к заданию серьезно и сделали работу именно так, как я и просила.' +
							' Соблюдение сроков – еще один плюс, который я могу поставить команде этих специалистов.' +
							' Искренне благодарна за проделанную работу и могу порекомендовать их всем,' +
							' кто задумывается о создании своего сайта!');
	},
	s7_text3 = function () {
		$('.op-name').html('<b>Роман</b> / Представитель <br>steamplay.org</h4>');
		$('.op-text').html('Хочу оставить положительный отзыв об этих специалистах. Обратился к ним с целью создания своего сайта,' +
						' занимающегося компьютерными играми. Ребята оказались толковые - сразу поняли, что именно я хотел бы видеть,' +
						' за что им огромный респект. Мне понравилось все: внимание к мелочам, серьезный подход к делу, умение договориться.' +
						' И еще меня волновала материальная сторона вопроса, так как за подобную работу многие другие компании требовали высокую оплату.' +
						' К счастью, с этим тоже не возникло проблем, поэтому ставлю пять баллов из пяти за демократичную цену, трудолюбие, организованность и отличный результат.');
	};



$('#s7_but_1').click( function () {
	counter = 1;
	positionOne();
	s7_text1();
});
$('#s7_but_2').click( function () {
	counter = 2;
	positionTwo();
	s7_text2();
});
$('#s7_but_3').click( function () {
	counter = 3;
	positionThree();
	s7_text3();
});

$('#arr_right').click( function () {

	if (counter == 1) {
		counter = 2;
		positionTwo();
		s7_text2();
	}
	else if (counter == 2) {
		counter = 3;
		positionThree();
		s7_text3();
	}
	else if (counter == 3) {
		counter = 1;
		positionOne();
		s7_text1();
	}
});

$('#arr_left').click( function () {
	if (counter == 3) {
		counter = 2;
		positionTwo();
		s7_text2();
	}
	else if (counter == 2) {
		counter = 1;
		positionOne();
		s7_text1();
	}
	else if (counter == 1) {
		counter = 3;
		positionThree();
		s7_text3();
	}	
});


// Yandex MAP

window.onload = function () {

	$('.menu span a').each(function () {             // получаем все нужные нам ссылки
		var location = window.location.href; // получаем адрес страницы
		var link = this.href;                // получаем адрес ссылки
        if(location == link) {               // при совпадении адреса ссылки и адреса окна
            $(this).addClass('href-active');  //добавляем класс
        }
    });

    $('.menu-foot span a').each(function () {             // получаем все нужные нам ссылки
		var location = window.location.href; // получаем адрес страницы
		var link = this.href;                // получаем адрес ссылки
        if(location == link) {               // при совпадении адреса ссылки и адреса окна
            $(this).addClass('href-active-foot');  //добавляем класс
        }
    });
	
	ymaps.ready(init);
	    var myMap,
	        myPlacemark;
	
	    function init(){     
	        myMap = new ymaps.Map("map", {
	            center: [48.44440256, 35.02201684],
	            zoom: 15
	        });
		
		// Our position
	        myPlacemark = new ymaps.Placemark([48.444353, 35.022103], { 
	            hintContent: 'WebMonsters', 
	            balloonContent: '' 
	        });
	
	        myMap.geoObjects.add(myPlacemark);

	    // scroll off on map
	        myMap.behaviors.disable('scrollZoom');
	    }

// click and validation for inputs in index.html

	order1.onclick = function(){
		validName1();
		validPhone1();
	}

	order2.onclick = function(){
		validName2();
		validPhone2();
	}

	order3.onclick = function(){
		validName3();
		validPhone3();
	}
}

/* For validation order buttons */

var d = document,
	re = /^\d[\d\(\)\ -]{4,14}\d$/,
	numReg = /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Zа-яА-Я-ёЁ']+[a-zA-Zа-яА-ЯёЁ']?$/,
	order1 = d.getElementById('order1'),
	order2 = d.getElementById('order2'),
	order3 = d.getElementById('order3'),
	name1 = d.getElementById('name1'),
	name2 = d.getElementById('name2'),
	name3 = d.getElementById('name3'),
	redH1 = d.getElementsByClassName('red-h1');

var validPhone1 = function () {
    var	mess1 = d.getElementById('message1'),
    	myPhone1 = d.getElementById('phone1').value,
		nameClient = d.getElementById('name1').value,
    	valid = re.test(myPhone1);
    if (valid) {
    	output = 'Номер телефона введен правильно!';
    	mess1.style.color = "#ffffff";

    	$('#order1, #phone1, #name1').css('display', 'none');
    	redH1[0].style.display = "block";
		
			 $.post("/mail.php", {
																myPhone1: myPhone1, 
																nameClient:nameClient,
																   }, function(a) 
																   {   
																	$('#name1').val('');		
																	$('#phone1').val('');																	
																   });	
		
    }
    else {
    	output = 'Номер телефона введен неправильно!';
    	mess1.style.color = "#d91a26";
    }
    mess1.innerHTML = output;
    return valid;
};

var validPhone2 = function () {
    var	mess2 = d.getElementById('message2'),
    	myPhone2 = d.getElementById('phone2').value,
		nameClient1 = d.getElementById('name2').value,
    	valid = re.test(myPhone2);
    if (valid) {
    	output = 'Номер телефона введен правильно!';
    	mess2.style.color = "#1d1d1d";

    	$('#order2, #phone2, #name2').css('display', 'none');
    	redH1[1].style.display = "block";
		
		 $.post("/mail.php", {
																myPhone1: myPhone2, 
																nameClient:nameClient1,
																   }, function(a) 
																   {   
																	$('#name2').val('');		
																	$('#phone2').val('');																	
																   });			
		
    }
    else {
    	output = 'Номер телефона введен неправильно!';
    	mess2.style.color = "#d91a26";
    }
    mess2.innerHTML = output;
    return valid;
};

var validPhone3 = function () {
    var	mess3 = d.getElementById('message3'),
    	myPhone3 = d.getElementById('phone3').value,
		nameClient2 = d.getElementById('name3').value,
    	valid = re.test(myPhone3);
    if (valid) {
    	output = 'Номер телефона введен правильно!';
    	mess3.style.color = "#1d1d1d";

    	$('#order3, #phone3, #name3').css('display', 'none');
    	redH1[2].style.display = "block";
		
		$.post("/mail.php", {
																myPhone1: myPhone3, 
																nameClient:nameClient2,
																   }, function(a) 
																   {   
																	$('#name3').val('');		
																	$('#phone3').val('');																	
																   });	
		
		
		
    }
    else {
    	output = 'Номер телефона введен неправильно!';
    	mess3.style.color = "#d91a26";
    }
    mess3.innerHTML = output;
    return valid;
};

var validName1 = function () {
    var	mess1 = d.getElementById('message1-1'),
    	myName1 = d.getElementById('name1').value,
    	valid = numReg.test(myName1);
    if (valid) {
    	output = 'Имя введено корректно!';
    	mess1.style.color = "#ffffff";
    }
    else {
    	output = 'Имя введено не корректно!';
    	mess1.style.color = "#d91a26";
    }
    mess1.innerHTML = output;
};

var validName2 = function () {
    var	mess2 = d.getElementById('message2-2'),
    	myName2 = d.getElementById('name2').value,
    	valid = numReg.test(myName2);
    if (valid) {
    	output = 'Имя введено корректно!';
    	mess2.style.color = "#1d1d1d";
    }
    else {
    	output = 'Имя введено не корректно!';
    	mess2.style.color = "#d91a26";
    }
    mess2.innerHTML = output;
};

var validName3 = function () {
    var	mess3 = d.getElementById('message3-3'),
    	myName3 = d.getElementById('name3').value,
    	valid = numReg.test(myName3);
    if (valid) {
    	output = 'Имя введено корректно!';
    	mess3.style.color = "#1d1d1d";
    }
    else {
    	output = 'Имя введено не корректно!';
    	mess3.style.color = "#d91a26";
    }
    mess3.innerHTML = output;
};

//счетчик на главной

				 setInterval(countdown5, 1000);

 function countdown5(){
	var today = new Date().getTime();
	var end = new Date(2018, 4,01, 00, 00).getTime();
	var dateX = new Date(end-today);
	var perDays = 60*60*1000*24;

	var DateDate = Math.round(dateX/perDays);
	if (DateDate<10){DateDate=0+DateDate;}
	var HourHour = dateX.getUTCHours().toString();
	if (HourHour<10){HourHour=0+HourHour;}
	var MinuteMinute = dateX.getMinutes().toString();
	if (MinuteMinute<10){MinuteMinute=0+MinuteMinute;}
	var SecondSecond = dateX.getSeconds().toString();
	if (SecondSecond<10){SecondSecond=0+SecondSecond;}
	
			date_to_write = ('<span><p>Дней</p><p>'+DateDate+'</p></span><span><p>Часов</p><p>'+HourHour+'</p></span><span><p>Минут</p><p>'+MinuteMinute+'</p></span><span><p>Секунд</p><p>'+SecondSecond+'</p></span>');

var result1 = document.getElementsByClassName('time-to-order');
	for(var i=0; i < result1.length; i++) 
		{ 
			result1[i].innerHTML = date_to_write;
		}
} 
			

$('.link').click(function () {
	$('.gal_hidden').css('display', 'flex');
	$(this).hide();
});

$('.more-partners').click(function () {
	$('.part_hide').css('display', 'flex');
	$(this).hide();
});


				
// Scroll UP

    $(window).scroll( function() {

    if ( $("body").width() <= 750 ) {
    	
		$('#anchor-bg').hide();
    	
    } else {

    	if ( $(window).scrollTop() >= 200 ) {
    		$('#anchor-bg').show();
    	}
    	else {
    		$('#anchor-bg').hide();
    	}
    }



    });

    $('a[href^="#"]').click(function(){

    //Save value attribute "href" in variable:

    var targ = $(this).attr('href');
    $('html, body').animate({scrollTop: $(targ).offset().top}, 800);
        return false;
    });