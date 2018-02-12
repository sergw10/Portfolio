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
        re = /^\d[\d\(\)\ -]{4,14}\d$/,
        numReg = /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Zа-яА-Я-ёЁ']+[a-zA-Zа-яА-ЯёЁ']?$/,
        order2 = d.getElementById('order2'),
        name2 = d.getElementById('name2');
    
    order2.onclick = function() {
        validName2();
        validPhone2();
    };
    
    
    var validPhone2 = function () {
        var mess2 = d.getElementById('message2'),
            myPhone2 = d.getElementById('phone2').value,
            valid = re.test(myPhone2);
        if (valid) {
            output = 'Номер телефона введен правильно!';
            mess2.style.color = "#1d1d1d";
    
            $('#order2, #phone2, #name2').css('display', 'none');
            $('.red-h1').css('display', 'inline');
        }
        else {
            output = 'Номер телефона введен неправильно!';
            mess2.style.color = "#d91a26";
        }
        mess2.innerHTML = output;
        return valid;
    };
    
    var validName2 = function () {
        var mess2 = d.getElementById('message2-2'),
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

}
    
