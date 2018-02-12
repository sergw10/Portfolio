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

	var d = document,
	re = /^\d[\d\(\)\ -]{4,14}\d$/,
	numReg = /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Zа-яА-Я-ёЁ']+[a-zA-Zа-яА-ЯёЁ']?$/,
	but_con = d.getElementById('but_con');

	but_con.onclick = function() {
		validName1();
		validPhone1();
	}

	var validPhone1 = function () {
    	var	mess1 = d.getElementById('con-message'),
    		myPhone1 = d.getElementById('phone-con').value,
			myName = d.getElementById('name-inp').value,
			mailpost = d.getElementById('mailpost').value,
			message = d.getElementById('mess-text').value,
    		valid = re.test(myPhone1);
    	if (valid) {
    		output = 'Спасибо за Ваше сообщение, мы свяжемся с Вами в ближайшее время!';
    		mess1.style.color = "#828282";
	
    		but_con.style.display = "none";
			
			$.post("/mail.php", {
																myPhone1: myPhone1, 
																nameClient: myName,
																mailpost:mailpost,
																message:message
																   }, function(a) 
																   {   
																	//$('#name3').val('');		
																	//$('#phone3').val('');																	
																   });	
			
			
			
			
    	}
    	else {
    		output = 'Номер телефона введен не верно или вовсе не введен!';
    		mess1.style.color = "#d91a26";
    	}
    	mess1.innerHTML = output;
    	return valid;
	};

	var validName1 = function () {
	    var	mess1 = d.getElementById('name-con'),
	    	myName1 = d.getElementById('name-inp').value,
	    	valid = numReg.test(myName1);
	    if (valid) {
	    	output = 'Имя введено корректно!';
	    	mess1.style.color = "#828282";
	    }
	    else {
	    	output = 'Имя введено не корректно или не указано!';
	    	mess1.style.color = "#d91a26";
	    }
	    mess1.innerHTML = output;
	};

/* Yandex map */
	
	ymaps.ready(init);

	var myMap,
	    myPlacemark;
	
	function init(){     
	    myMap = new ymaps.Map("map-con", {
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
	};
}