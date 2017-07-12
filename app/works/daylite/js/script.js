(function(){
var d = document,
    wrap = d.getElementById("wrap"),
    slider = d.getElementById("slider"),
    image = slider.getElementsByClassName("img"),
    counter = 2, l = 0, start,
    
    /* --- Setings ---- */
    direction = "right";  /* Направление */
    window_W = 100,       /* размер экрана */
    speed = 3400,         /* скорость смены картинки */
    ts = "1s",            /* transition */
    /* ---------------- */
    c = speed/2;

    /* Меняем длину слайдера */
    function width() {
        var w = window_W * image.length;
        	slider.style.width = w + "%";
    }
    width();
    
    /* Листать вправо */
    function slideRight() {
        slider.style.transition = ts;
        slider.style.right = window_W * counter + "%";
        counter++;
        if (counter == image.length) {
            setTimeout(function () {
                slider.style.transition = "0s";
                slider.style.right = window_W + "%";
                counter = 2;
            }, c);
        }
    }

    /* Листать влево */
    function slideLeft() {
        slider.style.transition = ts;
        counter--;
        slider.style.right = window_W * (counter - 1) + "%";
        if (counter == 1) {
            setTimeout(function () {
                slider.style.transition = "0s";
                l = image.length - 2;
                slider.style.right = window_W * l + "%";
                counter = image.length - 1;
            }, c);
        }
    }

    /* Выбираем направление */
    function sliderInterval() {
        if (direction == "right") {
            slideRight();
        } 
        else {
            slideLeft();
        }
    }

    /* Авто-перелистывание в выбраном направлении */
    function slideImageLine() {
        start = setInterval(sliderInterval, speed);
    }

    /* Ставим слайдер на паузу */
    slider.onmouseover = function () {
        clearInterval(start);
    };

    /* Убираем слайдер с паузы */
    slider.onmouseout = function () {
        slideImageLine();
    };

    /* Запуск слайдера */
    slideImageLine();

    })();


 /* --------------------------------------------------  */

 $(window).scroll( function() {
    
    if ( $(window).scrollTop() >= 600 ) { 
        $('#circle').css('transition','2.5s');
        $('#circle').css('right','0%'); 
    }

    if ( $(window).scrollTop() >= 1000 ) {                 
        $('#section-5').css('transition','2.5s');
        $('#section-5').css('left','0%');          
    }
});