var map = L.map('mymap', { center: [67.86605519070237, 20.234020511130602],zoom: 15 });
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibGlsamVrdmlzdCIsImEiOiJja3RrMnBpdnMxaHIxMm5tdWhkeGEwOHNsIn0.qUoobB09KUsA24k07a_FfQ'
}).addTo(map);
var marker = L.marker([67.86605519070237, 20.234020511130602]).addTo(map);
marker.bindPopup("<b>Frisör Cleopatra</b><br>Fjällgatan 32H, 981 39 Kiruna").openPopup();

L.map('map', {
    dragging: !L.Browser.mobile,
    tap: !L.Browser.mobile
})
