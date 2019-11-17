$(document).ready(function() {

// OWL slider utility
 
    $("#owl-example").owlCarousel({
    	navigation : true, // Show next and prev buttons
    	slideSpeed : 600,
    	paginationSpeed : 400,
    	singleItem: true
    });

// Delete text in Owl-slider buttons

  	$('.owl-prev, .owl-next').html("");

    // OWL slider utility

    $('.slid_slick').slick();

// Delete text in Slick-slider buttons

    $('.slick-prev, .slick-next').html("");

// Yandex map open

    $('#open_map').click(function(){
        $('.s14_img_bg').css("top","0px");
    });

// Menu scroll

    $('a[href^="#"]').click(function(){
    //Save value attribute "href" in variable:
    var targ = $(this).attr('href');
    $('html, body').animate({scrollTop: $(targ).offset().top}, 800);
        return false;
    });

// Scroll menu from absolute position to fixed

    $(window).scroll( function() {

        if ( $("#body").width() == 320 ) {

            if ( $(window).scrollTop() >= 600 ) {

                $('#switches').css({
                    'height':'50px',
                    'padding':'5px',
                    'position':'fixed',
                    'top':'0px',
                    'left':'50%',
                    'margin-left':'-160px',
                    'bottom':'0px',
                    'background-color':'#95e1d3'
                });
            } 

            if ( $(window).scrollTop() <= 700 ) {

                $('#switches').css({
                    'position':'absolute', 
                    'bottom':'0px', 
                    'top':'852px', 
                    'left':'50%', 
                    'margin-left':'-160px', 
                    'background-color':'transparent'
                });
            }
        }

        if ( $("#body").width() >= 1200 ) {

            if ( $(window).scrollTop() >= 1000 ) {

                $('#switches').css({
                    'height':'50px',
                    'padding':'5px',
                    'position':'fixed',
                    'top':'0px',
                    'bottom':'0px',
                    'background-color':'#95e1d3'
                });
            }
        }

        if ( $(window).scrollTop() <= 990 ) {

            $('#switches').css({
                'position':'absolute', 
                'bottom':'0px', 
                'top':'948px', 
                'left':'0', 
                'margin-left':'0', 
                'background-color':'transparent'
            });
        }
    });

// Acordion buttons

    var t = true, 
        f = false,
        count1 = t, 
        count2 = t, 
        count3 = t;

// Rotate img .arr_1,2,3 and change height for div"s #acordion_1,2,3

    $('#acordion_1').click(function(){
        if (count1 == t) {
            count1 = f;
            count2 = t;
            count3 = t;

            $(".ac_arr").css("transition", ".35s");
            $(".arr_1").css("transform","rotate(180deg)");

            $(".arr_2, .arr_3").css("transform","rotate(0deg)");

            $("#acordion_1").css({"transition":"1s", "height":"240px"});

            $("#acordion_2, #acordion_3").css({"transition":".5s", "height":"60px"});
            $("#p_acord_2, #p_acord_3").css("display", "none");

            $("#p_acord_1").css({"transition":"2s", "opacity":"1", "display":"block"});
        }
        else {
            count1 = t;

            $("#p_acord_1").css("opacity", "0");
            
            $(".arr_1").css("transform","rotate(360deg)");
            $(".ac_arr").css("transition", ".4s");

            $("#acordion_1").css({"transition":".5s", "height":"60px"});

            $("#p_acord_1").css({"transition":"0s", "display":"none"});
        }
    });

    $('#acordion_2').click(function(){
        if (count2 == t) {
            count1 = t;
            count2 = f;
            count3 = t;

            $(".ac_arr").css("transition", ".35s");
            $(".arr_2").css("transform","rotate(180deg)");

            $(".arr_1, .arr_3").css("transform","rotate(0deg)");

            $("#acordion_2").css({"transition":"1s", "height":"240px"});

            $("#acordion_1, #acordion_3").css({"transition":".5s", "height":"60px"});
            $("#p_acord_1, #p_acord_3").css("display", "none");

            $("#p_acord_2").css({"transition":"2s", "opacity":"1", "display":"block"});
        }
        else {
            count2 = t;

            $("#p_acord_2").css("opacity", "0");
            
            $(".arr_2").css("transform","rotate(360deg)");
            $(".ac_arr").css("transition", ".4s");

            $("#acordion_2").css({"transition":".5s", "height":"60px"});

            $("#p_acord_2").css({"transition":"0s", "display":"none"});
        }
    });

    $('#acordion_3').click(function(){
        if (count3 == t) {
            count1 = t;
            count2 = t;
            count3 = f;

            $(".ac_arr").css("transition", ".35s");
            $(".arr_3").css("transform","rotate(180deg)");

            $(".arr_1, .arr_2").css("transform","rotate(0deg)");

            $("#acordion_3").css({"transition":"1s", "height":"240px"});

            $("#acordion_1, #acordion_2").css({"transition":".5s", "height":"60px"});
            $("#p_acord_1, #p_acord_2").css("display", "none");

            $("#p_acord_3").css({"transition":"2s", "opacity":"1", "display":"block"});
        }
        else {
            count3 = t;

            $("#p_acord_3").css("opacity", "0");
            
            $(".arr_3").css("transform","rotate(360deg)");
            $(".ac_arr").css("transition", ".4s");

            $("#acordion_3").css({"transition":".5s", "height":"60px"});

            $("#p_acord_3").css({"transition":"0s", "display":"none"});
        }
    });

// Pink img hover section 1

    $(".s1_wrap_1").hover( 
        function () {
            $(".s1_img_1").css({"bottom":"10px", "right":"10px"});
            $(".s1_grad_1").css("opacity","1");
        },
        function () {
            $(".s1_img_1").css({"bottom":"0px", "right":"0px"});
            $(".s1_grad_1").css("opacity","0");
        }
    );

    $(".s1_wrap_2").hover( 
        function () {
            $(".s1_img_2").css({"bottom":"10px", "right":"10px"});
            $(".s1_grad_2").css("opacity","1");
        },
        function () {
            $(".s1_img_2").css({"bottom":"0px", "right":"0px"});
            $(".s1_grad_2").css("opacity","0");
        }
    );

    $(".s1_wrap_3").hover( 
        function () {
            $(".s1_img_3").css({"bottom":"10px", "right":"10px"});
            $(".s1_grad_3").css("opacity","1");
        },
        function () {
            $(".s1_img_3").css({"bottom":"0px", "right":"0px"});
            $(".s1_grad_3").css("opacity","0");
        }
    );

    $(".s1_wrap_1").hover( 
        function () {
            $(".s1_img_1").css({"bottom":"10px", "right":"10px"});
            $(".s1_grad_1").css("opacity","1");
        },
        function () {
            $(".s1_img_1").css({"bottom":"0px", "right":"0px"});
            $(".s1_grad_1").css("opacity","0");
        }
    );

// Pink img hover section 7

    $(".sky_wrap_1").hover( 
        function () {
            $(".img_1_team").css({"bottom":"10px", "right":"10px"});
            $(".s7_grad_1").css("opacity","1");
        },
        function () {
            $(".img_1_team").css({"bottom":"0px", "right":"0px"});
            $(".s7_grad_1").css("opacity","0");
        }
    );

    $(".sky_wrap_2").hover( 
        function () {
            $(".img_2_team").css({"bottom":"10px", "right":"10px"});
            $(".s7_grad_2").css("opacity","1");
        },
        function () {
            $(".img_2_team").css({"bottom":"0px", "right":"0px"});
            $(".s7_grad_2").css("opacity","0");
        }
    );

    $(".sky_wrap_3").hover( 
        function () {
            $(".img_3_team").css({"bottom":"10px", "right":"10px"});
            $(".s7_grad_3").css("opacity","1");
        },
        function () {
            $(".img_3_team").css({"bottom":"0px", "right":"0px"});
            $(".s7_grad_3").css("opacity","0");
        }
    );

// Animate counter numbers

    $(window).scroll( function() {

        if ( $(window).scrollTop() >= 1400 ) {

            $(".dis_n").css("opacity","1");

            $('#num_1').animate({ num: 42 - 1/* - начало */ }, {
                duration: 5000,
                step: function (num){
                    this.innerHTML = (num + 1).toFixed(0)
                }
            });
            $('#num_2').animate({ num: 123 - 1/* - начало */ }, {
                duration: 5000,
                step: function (num){
                    this.innerHTML = (num + 1).toFixed(0)
                }
            });
            $('#num_3').animate({ num: 15 - 1/* - начало */ }, {
                duration: 5000,
                step: function (num){
                    this.innerHTML = (num + 1).toFixed(0)
                }
            });
            $('#num_4').animate({ num: 99 - 1/* - начало */ }, {
                duration: 5000,
                step: function (num){
                    this.innerHTML = (num + 1).toFixed(0)
                }
            });
            $('#num_5').animate({ num: 24 - 1/* - начало */ }, {
                duration: 5000,
                step: function (num){
                    this.innerHTML = (num + 1).toFixed(0)
                }
            });
        }
    });

// Opacity in section 3

    $(window).scroll( function() {

        if ( $(window).scrollTop() >= 2000 ) {

            $('.services').css('opacity','1');
        }

    });

// Opacity in section 12

    $(window).scroll( function() {

        if ( $(window).scrollTop() >= 7720 ) {

            $('.s12_left, .s12_right').css('opacity','1');
        }

    });

// CLick's for comment-block's (open and close)

    $('.s13_item_1').click(function(){
        $('.comment_shadow_1').css("display","block");
    });
    $('.s13_item_2').click(function(){
        $('.comment_shadow_2').css("display","block");
    });
    $('.s13_item_3').click(function(){
        $('.comment_shadow_3').css("display","block");
    });

// Close comment-block's

    $('.close').click(function(){
        $('.comment_shadow_1, .comment_shadow_2, .comment_shadow_3').css("display","none");
    });

// File upload in comment_block

$(function(){
    var wrapper = $( ".file_upload" ),
        inp = wrapper.find( "input" ),
        btn = wrapper.find( ".button" ),
        lbl = wrapper.find( "mark" );

    // Crutches for the :focus style:
    inp.focus(function(){
        wrapper.addClass( "focus" );
    }).blur(function(){
        wrapper.removeClass( "focus" );
    });

    var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

    inp.change(function(){
        var file_name;
        if( file_api && inp[ 0 ].files[ 0 ] )
            file_name = inp[ 0 ].files[ 0 ].name;
        else
            file_name = inp.val().replace( "C:\\fakepath\\", '' );

        if( ! file_name.length )
            return;

        if( lbl.is( ":visible" ) ){
            lbl.text( file_name );
            btn.text( "Выбрать" );
        }else
            btn.text( file_name );
    }).change();

});
$( window ).resize(function(){
    $( ".file_upload input" ).triggerHandler( "change" );
});

//End JQuery
});

// Create yandex map

window.onload = function () {
    
    ymaps.ready(init);
        
    var myMap,
        myPlacemark;
    
    function init() {     
        myMap = new ymaps.Map("map_ya", {
            center: [48.44440256, 35.02201684],
            zoom: 10
        });
        
    // Our position
        myPlacemark = new ymaps.Placemark([48.444353, 35.022103], { 
            hintContent: 'WebMonsters', 
            balloonContent: '' 
        });
    
        myMap.geoObjects.add(myPlacemark);

    // scroll off on map
        myMap.behaviors.disable('scrollZoom');
    }
}

