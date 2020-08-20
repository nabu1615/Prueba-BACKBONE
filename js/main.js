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
        arrows: false,
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
                arrows: false,
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
    $('#acabados').on('click', function() {
        $(this).addClass('activeBtn');
        $(this).removeClass('inactiveBtn');
        $('#gris').addClass('inactiveBtn');
        $('#gris').removeClass('activeBtn');
        $('.gris').hide();
        $('.acabados').show();
        // $('.InfoDesgloce').hide();
    });
    $('#gris').on('click', function() {
        $(this).addClass('activeBtn');
        $(this).removeClass('inactiveBtn');
        $('#acabados').addClass('inactiveBtn');
        $('#acabados').removeClass('activeBtn');
        $('.gris').show();
        $('.acabados').hide();
        // $('.InfoDesgloce').show();
    });
    $('.menuApto').on('mouseenter', function() {
        $('.desplegable').show();
    });
    $('.modulo').on('mouseleave', function() {
        $('.desplegable').hide();
    });
    $(function() {
        $('.first-image-map').maphilight();
    });
    $('.first-image-map').rwdImageMaps();
    $("#apto option").each(function(index, element) {
        var clase = $(this).attr('class');
        if (clase == 'vendido') {
            var id = $(this).attr('data-apartamento')
            $('#apartment-' + id).attr('data-maphilight', '{"fillColor":"000000","shadow":true,"strokeColor": "000000","alwaysOn":false}');
        }
        if (clase == 'disponible') {
            var id = $(this).attr('data-apartamento')
            $('#apartment-' + id).attr('data-maphilight', '{"fillColor":"4422B1","shadow":true,"strokeColor": "000552","alwaysOn":false}');
        }
    });

    function reseatData(indexApto) {
        $('area').each(function(index, element) {
            index = index + 1;
            if (indexApto != index) {
                var data = $(this).data('maphilight');
                data.alwaysOn = false;
                $(this).removeAttr('data-maphilight');
                $(this).data('maphilight', data).trigger('alwaysOn.maphilight');
            }

        })
    }
    $('#apto').on('change', function(e) {
        var selectedapto = $(this).children("option:selected").data('apartamento');
        var hola = $('#apartment-' + selectedapto);
        var data = hola.data('maphilight') || {};
        data.alwaysOn = true;
        hola.data('maphilight', data).trigger('alwaysOn.maphilight');
        reseatData(selectedapto);
    });
});