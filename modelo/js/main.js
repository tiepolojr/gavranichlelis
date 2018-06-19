jQuery( document ).ready(function( $ ) {
"use strict"

    // ---------- Preloader ---------- //
    jQuery(window).load(function() {
        jQuery("#status").delay(2000).fadeOut();
        jQuery("#preloader").delay(2000).fadeOut("slow");
    })
    // ---------- Preloader ---------- //

    // ------- Scroll to Top ------- //
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });
    $('.scrollup').on( "click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 2000);
        return false;
    });
    // ------- Scroll to Top ------- //

	// ---------- Banner Slider ---------- //  
    $('#main-slider').carousel({
        interval:5000,
        pause: "false"
    });
    // ---------- Banner Slider ---------- //

    // ---------- Banner Slider Fix ---------- //
    $(".header").sticky({topSpacing: 0});
    // ---------- Banner Slider Fix ---------- //

    // ---------- Toggle Search Bar ---------- //
    $("#search-toggle").on( "click", function(e){
        e.preventDefault();
        $(".search-box").toggleClass("on-click");
    });
    // ---------- Toggle Search Bar ---------- //

    // ---------- practice slider ---------- //
    $('.practice-slider').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots: false,
        smartSpeed:200,
        responsiveClass:true,
        responsive:{
            0:{ items:1},
            320:{ items:1},
            480:{ items:1},
            640:{ items:2},
            768:{ items:2},
            800:{ items:2},
            960:{ items:3},
            991:{ items:3},
            1024:{ items:3},
            1199:{ items:4},
            1200:{ items:4}
        }
    })
    // ---------- practice slider ---------- //

    // ---------- Accordion ---------- //
    var lastIcon;
    $('.accordion > .accordion-item').on( "click", function () {
        if ($(this).hasClass('active')) {
          $(this).removeClass('active');
          $(this).find('i').toggleClass('fa-plus-square-o fa-minus-square-o');
          lastIcon = null;
          return true;
        }
        $('.accordion > .accordion-item').removeClass('active');
        $(this).addClass('active');
        $(this).find('i').add(lastIcon).toggleClass('fa-plus-square-o fa-minus-square-o');
        lastIcon = $(this).find('i');
    });
    // ---------- Accordion ---------- //

    // ---------- practice slider ---------- //
    $('#blog-post-slider').owlCarousel({
        loop:true,
        nav:true,
        items: 1,
        dots: false,
        smartSpeed:500
    })
    // ---------- practice slider ---------- //

    // ---------- Attorney Slider ---------- //
    $('.attorney-slider').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots: true,
        smartSpeed:200,
        responsiveClass:true,
        responsive:{
            0:{ items:1},
            320:{ items:1},
            480:{ items:1},
            640:{ items:1},
            768:{ items:1},
            800:{ items:1},
            960:{ items:1},
            991:{ items:1},
            1024:{ items:2},
            1199:{ items:2}
        }
    })
    // ---------- Attorney Slider ---------- //

    // ---------- Attorney Slider ---------- //
    $('#blog-post-slider-2').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots: false,
        smartSpeed:200,
        responsiveClass:true,
        responsive:{
            0:{ items:1},
            320:{ items:1},
            480:{ items:1},
            640:{ items:1},
            768:{ items:1},
            800:{ items:1},
            960:{ items:1},
            991:{ items:1},
            1024:{ items:2},
            1199:{ items:2}
        }
    })
    // ---------- Attorney Slider ---------- //

    // ---------- Testimonial Slider 1 ---------- //
    $('.testimonial-slider').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots: false,
        smartSpeed:200,
        responsiveClass:true,
        responsive:{
            0:{ items:1},
            320:{ items:1},
            480:{ items:1},
            640:{ items:1},
            768:{ items:1},
            800:{ items:1},
            960:{ items:1},
            991:{ items:1},
            1024:{ items:2},
            1199:{ items:2}
        }
    })
    // ---------- Testimonial Slider 1 ---------- //

    // ---------- Testimonial Slider 2 ---------- //
    $('.testimonial-slider-2').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots: false,
        smartSpeed:200,
        responsiveClass:true,
        responsive:{
            0:{ items:1},
            320:{ items:1},
            480:{ items:1},
            640:{ items:2},
            768:{ items:3},
            800:{ items:3},
            960:{ items:3},
            991:{ items:3},
            1024:{ items:3},
            1199:{ items:3}
        }
    })
    // ---------- Testimonial Slider 2 ---------- //

    // ---------- Brands Icons Slider ---------- //
    $('.brands-icons-sliedr').owlCarousel({
        loop:true,
        nav:false,
        dots: false,
        smartSpeed:200,
        responsiveClass:true,
        responsive:{
            0:{ items:1},
            320:{ items:1},
            480:{ items:2},
            640:{ items:3},
            768:{ items:3},
            800:{ items:3},
            960:{ items:4},
            991:{ items:5},
            1024:{ items:6},
            1199:{ items:6}
        }
    })
    // ---------- Brands Icons Slider ---------- //

    // ------- Counter ------- //
    try {
        $('#tc-counters').appear(function () {
            $('.tc-timer').countTo()
        });
    } catch (err) {}    
    // ------- Counter ------- //

    // ------- Animated Progress Bar ------- //
    try {
        $('#tc-skillgroup-1, #tc-skillgroup-2').appear(function () {
            jQuery('.tc-skillholder').each(function () {
                jQuery(this).find('.tc-skillbar').animate({
                    width: jQuery(this).attr('data-percent')
                }, 2500);
            });
        });
    } catch (err) {}
    // ------- Animated Progress Bar ------- //

    // ---------- practice slider ---------- //
    $('#slider-post').owlCarousel({
        loop:true,
        nav:true,
        items: 1,
        dots: false,
        smartSpeed:500
    })
    // ---------- practice slider ---------- //

    // ------- Google Map ------- // 
    $("#contact-map").gmap3({
        marker: {
            address: "Haltern am See, Weseler Str. 151"
        },
        map: {
            options: {
                zoom: 16,
                scrollwheel: false,
            }
        },
    });
    // ------- Google Map ------- //

    // ------- Auto height function ------- //
    var setElementHeight = function () {
        var width = $(window).width();
        var height = $(window).height();
        $('.fullscreen').css('height', (height));
        }
    $(window).on("resize", function () {
        setElementHeight();
    }).resize();
    // ------- Auto height function ------- //

    // ------- Prety Photo ------- //
    $("a[data-rel]").each(function () {
		$(this).attr("rel", $(this).data("rel"));
	});
	$("a[data-rel^='prettyPhoto']").prettyPhoto({
		animation_speed: 'normal',
		theme: 'dark_square',
		slideshow: 3000,
		autoplay_slideshow: false,
		social_tools: false
	});
	// ------- Prety Photo ------- //

	// ------- PrettyPhoto Video Popup ------- //
    $("a[rel^='prettyPhoto']").prettyPhoto();
    // ------- PrettyPhoto Video Popup ------- //

});