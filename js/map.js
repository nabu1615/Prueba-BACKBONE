(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        console.log('ready');

        var mymap = L.map('mapa').setView([3.459164, -76.519432], 16);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mymap);

        L.marker([3.459164, -76.519432]).addTo(mymap)
            .bindPopup('<img src="img/log.JPG" alt="logo" class="logo-lg">')
            .openPopup('Paraiso Central');

    }); //DOM CONTENT LOADED
})();