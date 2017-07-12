// Search window height and create HEADER height

var headerHeight = $(window).height();

    $('#header').css('height',headerHeight);

// Animate numbers in header

	$('#num_1').animate({ num: 518 - 1/* - начало */ }, {
        duration: 7000,
        step: function (num) {
            this.innerHTML = (num + 1).toFixed(0)
        }
    });
    $('#num_2').animate({ num: 345 - 1/* - начало */ }, {
        duration: 7000,
        step: function (num) {
            this.innerHTML = (num + 1).toFixed(0)
        }
    });
    $('#num_3').animate({ num: 218 - 1/* - начало */ }, {
        duration: 7000,
        step: function (num) {
            this.innerHTML = (num + 1).toFixed(0)
        }
    });


// Menu from relative to fixed

$(window).scroll( function() {

    if ( $(window).scrollTop() >= headerHeight ) {

        $('#menu-fixed').css({'position':'fixed', 'border-bottom':'2px solid #adadad', 'z-index':'10000'});
        $('.menu-wrap').css('margin','0');
    } 

    if ( $(window).scrollTop() <= headerHeight ) {

        $('#menu-fixed').css({'position':'relative', 'border-bottom':'0px', 'z-index':'100'});
        $('.menu-wrap').css('margin','0 auto');
    }
});

// Menu click

var count = false;

    $('#menu-but').click( function () {

    if (count == false) {
        count = true;
        $('#menu-but').css({"background-image":"url('images/menu-close.png')", "width":"20px", "height":"20px"});
        $('.menu-item').css('display','block');
        $('#menu-fixed').css('height','auto');
    }

    else if (count == true) {
        count = false;
        $('#menu-but').css({"background-image":"url('images/menu-icon.png')", "width":"25px", "height":"25px"});
        $('.menu-item').css('display','none');
        $('#menu-fixed').css('height','48px');
    }

});

