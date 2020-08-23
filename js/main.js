$(document).ready(function() {
    var defaultPiso = $('#pisos').children("option:selected").data('piso');
    var selectedPiso = $('#piso-' + defaultPiso);


    function cleanGroup() {
        $('area').each(function(index, element) {
            $(this).removeAttr('data-maphilight');

            $('.first-image-map').maphilight();

            // var hola = $('#apartment-' + selectedapto);
            // var data = hola.data('maphilight') || {};
            // data.alwaysOn = true;
            // hola.data('maphilight', data).trigger('alwaysOn.maphilight');
        })
    }

    function ChangePiso() {

        cleanGroup();
        console.log(selectedPiso);
        selectedPiso.find('option').each(function() {

            var clase = $(this).attr('class');
            if (clase == 'vendido') {
                var id = $(this).attr('data-apartamento')
                $('#apartment-' + id).attr('data-maphilight', '{"fillColor":"000000","shadow":true,"strokeColor": "000000","alwaysOn":true}');
            }
            if (clase == 'disponible') {
                var id = $(this).attr('data-apartamento')
                $('#apartment-' + id).attr('data-maphilight', '{"fillColor":"4422B1","shadow":true,"strokeColor": "000552","alwaysOn":true}');
            }
        });
    }



    ChangePiso();


    //funcion de carrito de banners
    $('#slideshow .slick').slick({
        autoplay: false,
        arrows: true,
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
        $('.footer-sm-menu').show();
        $('.closeMenu').show();
        $('header').addClass('sm-navigation');
    });
    $('.closeMenu').on('click', function() {
        $(this).hide();
        $('.navigation').hide();
        $('.footer-sm-menu').hide();
        $('.menu').show();
        $('header').removeClass('sm-navigation');
        $('header').removeClass('container');
    });

    //hiden apartamentos acabados o gris
    $('#acabados').on('click', function() {
        $(this).addClass('activeBtn');
        $(this).removeClass('inactiveBtn');
        $('#gris').addClass('inactiveBtn');
        $('#gris').removeClass('activeBtn');
        $('.gris').hide();
        $('.acabados').show();
        $('.InfoDesgloce').hide();
        $('.InfoAcabados').show();

    });
    $('#gris').on('click', function() {
        $(this).addClass('activeBtn');
        $(this).removeClass('inactiveBtn');
        $('#acabados').addClass('inactiveBtn');
        $('#acabados').removeClass('activeBtn');
        $('.gris').show();
        $('.acabados').hide();
        $('.InfoDesgloce').show();
        $('.InfoAcabados').hide();
    });
    $('.menuApto').on('mouseenter', function() {
        $('.desplegable').show();
    });
    $('.modulo').on('mouseleave', function() {
        $('.desplegable').hide();
    });

    //llamado de librerias de sombreado y responsive
    $(function() {
        $('.first-image-map').maphilight();
    });
    $('.first-image-map').rwdImageMaps();


    //selector de apartamentos o todos
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

    function addData(indexApto) {
        $('area').each(function(index, element) {
            index = index + 1;
            if (indexApto != index) {
                var data = $(this).data('maphilight');
                data.alwaysOn = true;
                $(this).attr('data-maphilight');
                $(this).data('maphilight', data).trigger('alwaysOn.maphilight');
            }
        })
    }
    // $('#piso').on('change', function(e) {
    //     var selectedpiso = $(this).children("option:selected").data('piso');
    //     var piso = $('#piso-' + selectedpiso);
    // });
    // $('#apto').on('change', function(e) {
    //     var selectedapto = $(this).children("option:selected").data('apartamento');
    //     var hola = $('#apartment-' + selectedapto);
    //     var data = hola.data('maphilight') || {};
    //     data.alwaysOn = true;
    //     hola.data('maphilight', data).trigger('alwaysOn.maphilight');
    //     if ($('#apto').children("option:selected").text() != "Ver todos") {
    //         reseatData(selectedapto);
    //     } else {
    //         addData(selectedapto);
    //     }
    // });

    // //sombreado todos los apartamentos
    // $("#apto option").each(function() {
    //     var clase = $(this).attr('class');
    //     if (clase == 'vendido') {
    //         var id = $(this).attr('data-apartamento')
    //         $('#apartment-' + id).attr('data-maphilight', '{"fillColor":"000000","shadow":true,"strokeColor": "000000","alwaysOn":true}');
    //     }
    //     if (clase == 'disponible') {
    //         var id = $(this).attr('data-apartamento')
    //         $('#apartment-' + id).attr('data-maphilight', '{"fillColor":"4422B1","shadow":true,"strokeColor": "000552","alwaysOn":true}');
    //     }
    // });
    // //contador apartamentos vendidos
    // const vendidos = $("#apto option").each(function(index, element) {});
    // var totalVendidos = 0;
    // for (let i = 0; i < vendidos.length; i++) {
    //     var clase = $(vendidos[i]).attr('class');
    //     if (clase == 'vendido') {
    //         totalVendidos++;
    //     }
    // };
    // var mostrarVendidos = document.getElementById('contadorVendidos');
    // mostrarVendidos.innerHTML = totalVendidos;

    //Input date con hora
    // $('#fechaContacto').datetimepicker({
    //     timepicker: true,
    //     datepicker: true,
    //     format: 'y/m/d H:i',
    //     value: '',
    //     week: true
    // });
    // $('#fechaApto').datetimepicker({
    //     timepicker: true,
    //     datepicker: true,
    //     format: 'y/m/d H:i',
    //     value: '',
    //     week: true
    // });

    $('#selectGroups').on('click', function(e) {
        var selected = $('#pisos').children("option:selected").data('piso');
        $('.SelectGroups optgroup').hide();
        selectedPiso = $('#piso-' + selected);
        selectedPiso.show();
        console.log(selectedPiso);
    });


    $('#pisos').on('change', function(e) {
        var selected = $(this).children("option:selected").data('piso');
        selectedPiso = $('#piso-' + selected);
        ChangePiso();
    });


    // selectedPiso.find('option').on('change', function(e) {
    //     var selectedapto = $(this).children("option:selected").data('apartamento');
    //     var hola = $('#apartment-' + selectedapto);
    //     var data = hola.data('maphilight') || {};
    //     data.alwaysOn = true;
    //     hola.data('maphilight', data).trigger('alwaysOn.maphilight');
    //     if ($(this).children("option:selected").text() != "Ver todos") {
    //         reseatData(selectedapto);
    //     } else {
    //         addData(selectedapto);
    //     }
    // });
    //sombreado todos los apartamentos
















    // contador apartamentos vendidos
    // const vendidos = $(selectedPiso + " option").each(function(index, element) {});
    // var totalVendidos = 0;
    // for (let i = 0; i < vendidos.length; i++) {
    //     var clase = $(vendidos[i]).attr('class');
    //     if (clase == 'vendido') {
    //         totalVendidos++;
    //     }
    // };
    // var mostrarVendidos = document.getElementById('contadorVendidos');
    // mostrarVendidos.innerHTML = totalVendidos;

});