$(document).ready(function () {

    // For wow animation 
    new WOW().init();

    // For latest-praise testimonials slider
    $('.latest-praise-testimonials-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        rows: 0,
        dots: false,
        arrows: true,
        swipeToSlide: true,
        autoplay: false,
        autoplaySpeed: 2000,
        prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow: '<button class="slide-arrow next-arrow"><i class="fa-solid fa-angle-right"></i></button>',
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                dots: true,
                arrows: false,
            }
        }]
    });

    // For gallery testimonials slider
    $('.gallery-testimonial-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        rows: 2,
        infinite: true,
        dots: false,
        arrows: true,
        autoplay: false,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        speed: 1000,
        prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow: '<button class="slide-arrow next-arrow"><i class="fa-solid fa-angle-right"></i></button>',
        responsive: [{
            breakpoint: 992,
            settings: {
                rows: 1,
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                arrows: false,
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                arrows: false,
            }
        }]
    });


    // For brand testimonials slider
    $('.brand-testimonial-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false,
        autoplay: false,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        speed: 1000,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        }, {
            breakpoint: 426,
            settings: {
                slidesToShow: 1,
            }
        }]
    });

    // For Mobile Dropdown
    $width = $(window).width();

    if ($width <= 991) {
        $('.menu-toggle').click(function () {
            $(this).toggleClass('active');
            $(".nav-right").toggleClass('active');
            $(".dropdown-nav-item").removeClass('dropdown-active');
        })

        $('.dropdown-nav-item > a').click(function () {
            $(".dropdown-nav-item").toggleClass('dropdown-active');
        })

        $('.main-menu li a:not(.dropdown-nav-item > a)').click(function () {
            $('.menu-toggle').removeClass('active');
            $(".nav-right").removeClass('active');
            $(".dropdown-nav-item").removeClass('dropdown-active');
        })
    }

    // For Header position sticky
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('header').addClass("sticky");
        }
        else {
            $('header').removeClass("sticky");
        }
    });

    //for scrolltop button
    var btn = $('#scrolltop');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '100');
    });


});