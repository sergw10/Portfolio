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

    var d = document,
    h1put = '',
    re = /^\d[\d\(\)\ -]{4,14}\d$/,
    numReg = /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Zа-яА-Я-ёЁ']+[a-zA-Zа-яА-ЯёЁ']?$/;

/* Buttons */
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
        
    });

    $('#to_order').click( function() {   
        $('.popup-feedback').show();
    });

    $('.close').click( function() {   
        $('.popup-feedback').hide();
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
}