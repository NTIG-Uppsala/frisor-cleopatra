/* var map = L.map('mymap', { center: [67.86605519070237, 20.234020511130602],zoom: 15 });
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

L.map('mymap', {
    dragging: !L.Browser.mobile,
    tap: !L.Browser.mobile
}) */

let map;

function initMap() {
  const myLatLng = { lat: 67.86605519070237, lng: 20.234020511130602};
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 67.86605519070237, lng: 20.234020511130602 },
    zoom: 15,
  });
  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Frisör Cleoptara</h1>' +
    '<div id="bodyContent">' +
    "<p>placeholder</p>" +
    "</div>" +
    "</div>";
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
  const marker = new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Frisör Cleopatra",
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: true,
    });
  });
}