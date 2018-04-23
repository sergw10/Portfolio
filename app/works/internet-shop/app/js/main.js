;$(function () {

	var windowWidth = $(window).width();

  if ( windowWidth > 1000 ) {
    /* Add active styles in main slider navigation menu */
    $('.js--slider-navigation--item').click( function () {
      $('.js--slider-navigation--item').removeClass('active');
      $(this).addClass('active');
    });
  }

  if ( windowWidth < 1000 ) {
    $('.user').text('Вход');

    $('.js--slider-navigation--item').click( function () {
      var $this = $(this),
          text = $this.find('button span').text();
          $('.slider-main--nav-item--hidden').text(text);
          $('.slider-navigation--item-wrap, .js--nav--menu-burger--slider').removeClass('open')
    });
  }

  $('.slider--main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 1700
  });

  $('.slider-main--wrapper').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="main-slider--arr main-slider--prev slick-prev"></button>',
    nextArrow: '<button type="button" class="main-slider--arr main-slider--next slick-next"></button>',
    responsive: [
      {
        breakpoint: 1230,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  /* Open header burger menu */
  $('.js--nav--menu-burger--header').click(function() {
    var $burgerHeader = $('.nav--main-menu--copy');
    if ( !$burgerHeader.hasClass('open') ) {
      $burgerHeader.addClass('open');
    }
    else {
      $burgerHeader.removeClass('open');
    }
  });

  $('.js--nav--menu-burger').click(function() {
    if ( !$(this).hasClass('open') ) {
      $(this).addClass('open');
    }
    else {
      $(this).removeClass('open');
    }
  });

  $('.js--nav--menu-burger--slider').click(function() {
    var $burgerSlider = $('.slider-navigation--item-wrap');
    if ( !$burgerSlider.hasClass('open') ) {
      $burgerSlider.addClass('open');
    }
    else {
      $burgerSlider.removeClass('open');
    }
  });

});