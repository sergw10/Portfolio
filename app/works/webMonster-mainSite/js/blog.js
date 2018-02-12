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

	
}