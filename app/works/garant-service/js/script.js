window.onload = function () {

/* счетчик на главной */
    
    var time_main = setInterval(time, 1000);
    
    function time () {
        var today = new Date().getTime();
        var end = new Date(2016, 11,01, 00, 00).getTime();
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
        
        date_to_write = '<span>'+HourHour+'</span><span>:</span><span>'+MinuteMinute+'</span><span>:</span><span>'+SecondSecond+'</span>';
    
        var result1 = document.getElementById('clock');

        result1.innerHTML = date_to_write; 
    };

/* Основные переменные */

	var d = document,
	h1put = '',
	re = /^\d[\d\(\)\ -]{4,14}\d$/,
	numReg = /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Zа-яА-Я-ёЁ']+[a-zA-Zа-яА-ЯёЁ']?$/;

/* Кнопка для заказа по акции */

    $('.but-js-order').click( function() {
    var mess1 = $(this).parent().children('.mess1'),
        mess2 = $(this).parent().children('.mess2'),
        mess3 = $(this).parent().children('.mess3'),
        mess4 = $(this).parent().children('.mess4'),
        myPhone = $(this).parent().children('.phone-inp').val(),
        myName = $(this).parent().children('.name-inp').val(),
        myModel = $(this).parent().children('.model-inp').val(),
        myCity = $(this).parent().children('.city-inp').val(),
        output, output1, output4,
        valid_ph = re.test(myPhone),
        valid_name = numReg.test(myName),
        valid_city = numReg.test(myCity);

        if (valid_ph) {
            output = 'Номер телефона введен верно';
            mess2.css('color', '#828282');
        }
        else {
            output = 'Номер телефона введен не верно';
            mess2.css('color', '#d91a26');
        }
        mess2.html(output);
        
        if (valid_name) {
            output1 = 'Имя введено верно';
            mess1.css('color', '#828282');
        }
        else {
            output1 = 'Имя введено не верно';
            mess1.css('color', '#d91a26');
        }
        mess1.html(output1);

        if (valid_city) {
            mess4.css('color', '#828282');
        }
        else {
            output4 = 'Город введен не верно';
            mess4.css('color', '#d91a26');
        }
        mess4.html(output4);

        if ( valid_ph == true && valid_city == true ) {
            $(this).hide();
            h1put = 'Спасибо за Ваше сообщение, мы свяжемся с Вами в ближайшее время!';
            mess3.html(h1put);
        }
    });


/* Все кнопки */

    $('.but-js').click( function() {
        var mess1 = $(this).parent().children('.mess1'),
            mess2 = $(this).parent().children('.mess2'),
            mess3 = $(this).parent().children('.mess3'),
            myPhone = $(this).parent().children('.phone-inp').val(),
            myName = $(this).parent().children('.name-inp').val(),
            output, output1,
            valid_ph = re.test(myPhone),
            valid_name = numReg.test(myName);	

        if (valid_ph) {
            output = 'Номер телефона введен верно';
            h1put = 'Спасибо за Ваше сообщение, мы свяжемся с Вами в ближайшее время!';
            mess2.css('color', '#828282');
            $(this).hide();
        }
        else {
            output = 'Номер телефона введен не верно';
            mess2.css('color', '#d91a26');
        }
        mess2.html(output);
        mess3.html(h1put);
            
        if (valid_name) {
            output1 = 'Имя введено верно';
            mess1.css('color', '#828282');
        }
        else {
            output1 = 'Имя введено не верно';
            mess1.css('color', '#d91a26');
        }
        mess1.html(output1);		
		
		
		$.post("mail.php", {
																myCity: myCity, 
																myModel: myModel,
																myPhone:myPhone,
																myName: myName
																   }, function(a) 
																   {   
																																	
																   });
		
		if(valid_ph&&valid_name){
			
		}
		
    });

/* Yandex map init */
	ymaps.ready(init);
	
    var myMap,
        myPlacemark;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [48.46250290, 35.00721467],
            zoom: 15
        });
	
	// Our position
        myPlacemark = new ymaps.Placemark([48.46250290, 35.00721467], { 
            hintContent: 'Garant servis', 
            balloonContent: 'Сервис и ремонт техники' 
        });

        myMap.geoObjects.add(myPlacemark);

    // scroll off on map
        myMap.behaviors.disable('scrollZoom');
    }

/* Some click's */

    $('.more-com').click( function () {
        $('.client-comment-show').show();
        $(this).hide();
		$('.phone-inp').val('');
$('.name-inp').val('');
$('.city-inp').val('');
$('.model-inp').val('');
    });

    $('.popup-feedback').click(function () {
        $(this).hide();
    });

    $('.popup-feed').click(function () {
        return false;
    });

    $('.close').click( function () {
        $('.call-me').hide();
        $('.action-event').hide();
		$('.phone-inp').val('');
$('.name-inp').val('');
$('.city-inp').val('');
$('.model-inp').val('');
    });
    
    $('.call-mod').click( function () {
        $('.call-me').show();
    });

    $('.call-action').click( function () {
        $('.action-event').show();
    });



//---- End  window.onload ------
}

