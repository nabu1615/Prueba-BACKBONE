$(document).ready(function() {
    $('#slideshow .slick').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        speed: 2000,
        autoplaySpeed: 4000,

    });

    $('#slideshow .slick-2').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        autoplaySpeed: 4000,
        speed: 2000
    });


    $('#slideshow .slick-3').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        autoplaySpeed: 4000,
        speed: 2000
    });

    $('#slideshow .slick-4').slick({
        autoplay: true,
        arrows: true,
        dots: true,
        autoplaySpeed: 4000,
        speed: 2000
    });



    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        dots: false,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,

            }
        }, {
            breakpoint: 1280,
            settings: {
                slidesToShow: 2,

            }
        }, {
            breakpoint: 1600,
            settings: {
                slidesToShow: 3,

            }
        }]

    });


    $('.multiple-items-2').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        dots: false,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,

            }
        }, {
            breakpoint: 1280,
            settings: {
                slidesToShow: 3,

            }

        }]
    });
    $('.multiple-items-3').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                dots: false,

            }
        }, {
            breakpoint: 1280,
            settings: {
                slidesToShow: 2,

            }
        }, {
            breakpoint: 1600,
            settings: {
                slidesToShow: 3,

            }
        }]

    });

    //hiden menu mobile

    $('.menu').on('click', function() {
        $(this).hide();
        $('.navigation').show();
        $('.closeMenu').show();
        $('header').addClass('sm-navigation');
    });
    $('.closeMenu').on('click', function() {
        $(this).hide();
        $('.navigation').hide();
        $('.menu').show();
        $('header').removeClass('sm-navigation');
        $('header').removeClass('container');

    });

    $('.menuApto').on('mouseenter', function() {
        $('.desplegable').show();
    });

    $('.modulo').on('mouseleave', function() {
        $('.desplegable').hide();
    });
});