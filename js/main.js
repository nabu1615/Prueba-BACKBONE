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

            }
        }]

    });


    $('a[href^="#"]').click(function() {
        var destino = $(this.hash); //this.hash lee el atributo href de este
        $('html, body').animate({ scrollTop: destino.offset().top }, 10000); //Llega a su destino con el tiempo deseado
        return false;
    });


    //hiden menu mobile

    $('.menu').on('click', function() {
        $(this).hide();
        $('.navigation').show();
    });

});