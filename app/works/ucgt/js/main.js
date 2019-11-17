;$( function() {

	// Slider utility
	$('.slider-wrapper').slick({
		infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    speed: 900,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arr-slider-right.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arr-slider-right.png"></button>',
    responsive: [
	    {
	      breakpoint: 1245,
	      settings: {
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 550,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	  ]
	});

	// Burger menu toggle
	$('.burger-menu').click( function() {
		if ( !$('.nav-menu').hasClass('open') ) {
			$('.nav-menu').addClass('open').slideDown();
		}
		else {
			$('.nav-menu').removeClass('open').slideUp();
		}
	});

});