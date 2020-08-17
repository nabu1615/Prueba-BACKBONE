(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        console.log('ready');

        google.maps.event.addDomListener(window, 'load', initMainMap);

        function initMainMap() {
            if ($('#wheremap').length) {
                var markerList = [];
                var pinIcono = "media/pin-active.png";
                var html
                var disItem = {
                    latitude: 3.458899,
                    longitude: -76.519464,
                    content: ' <img src="img/log.JPG" alt="Icono" style="width: 100%; height: 100%;">',
                    thePin: new google.maps.MarkerImage(pinIcono, null, null, null, new google.maps.Size(2, 3)),
                    role: 'main'
                };
                markerList.push(disItem);

                var maincoors = [markerList[0].latitude, markerList[0].longitude] || [3.458899, -76.519464];

                var mapOptions = {
                    zoom: 15,
                    zoomControl: true,
                    scrollwheel: false,
                    streetViewControl: false,
                    mapTypeControl: false,
                    scaleControl: false,
                    draggable: true,
                    center: new google.maps.LatLng(maincoors[0], maincoors[1]),
                    styles: [{
                        "stylers": [{
                            "visibility": "simplified"
                        }, {
                            "saturation": -5
                        }, {
                            "lightness": 0
                        }]
                    }]
                };
                var mapElement = document.getElementById('wheremap'),
                    map = new google.maps.Map(mapElement, mapOptions);

                var def_point = [],
                    infowindow_content = [],
                    infowindow = new google.maps.InfoWindow();

                $.each(markerList, function(i) {
                    def_point[i] = new google.maps.Marker({
                        position: new google.maps.LatLng(markerList[i].latitude, markerList[i].longitude),
                        map: map,
                        icon: markerList[i].thePin
                    });
                    if (this.content !== false) {
                        console.log("entro acaa")
                        infowindow_content[i] = markerList[i].content;
                        infowindow.setContent(infowindow_content[i]);
                        infowindow.open(map, def_point[i]);
                    }
                });
            }
        }
    }); //DOM CONTENT LOADED
})();