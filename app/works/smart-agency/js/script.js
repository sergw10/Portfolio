$(document).ready(function(){

	$('a[href^="#"]').click(function(){
    //Save value attribute "href" in variable:
    var targ = $(this).attr('href');
    $('html, body').animate({scrollTop: $(targ).offset().top}, 900);
        return false;
    });

	// Slick utility

	$('#slider').slick({ 
		dots: true,
		infinite: true,
		speed: 1200,
		// autoplay: true,
  		// autoplaySpeed: 5000,
		slidesToShow: 1
  	});

  	// Delete text in Owl-slider buttons

    $('.slick-prev, .slick-next, #slick-slide00, #slick-slide01, #slick-slide02').html("");

    $('#serv_1').click( function () {
    	$('#change_text').css('opacity', '0');
		$('#change_text').html('Modern App Cross-platform');
		$('#change_text').css('opacity', '1');
    });

    $('#serv_2').click( function () {
    	$('#change_text').css('opacity', '0');
		$('#change_text').html('The Development Of New Technologies');
		$('#change_text').css('opacity', '1');
    });

    $('#serv_3').click( function () {
    	$('#change_text').css('opacity', '0');
		$('#change_text').html('Implementation Of New Standards');
		$('#change_text').css('opacity', '1');
    });

    $('#serv_4').click( function () {
    	$('#change_text').css('opacity', '0');
		$('#change_text').html('Modern App Design');
		$('#change_text').css('opacity', '1');
    });

    var count = false;

    $('.menu').click( function () {
    	if (count == false) {
    		count = true;
    		$('#nav_menu').css('opacity', '1');
			$('#nav_menu').css('right', '0');
		}

		else {
			count = false;
    		$('#nav_menu').css('opacity', '0');
			$('#nav_menu').css('right', '-250px');
		}
    });

    $(window).scroll( function() {

        if ( $(window).scrollTop() >= 200 ) {
        	$('.menu').css('top', '10px');
        }
        else {
        	$('.menu').css('top', '25px');
        }

    });
});

