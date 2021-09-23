let map;

function initMap() {
  const myLatLng = { lat: 67.86605519070237, lng: 20.234020511130602};
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 67.86605519070237, lng: 20.234020511130602 },
    zoom: 15,
    gestureHandling: "cooperative",
  });
  const contentString =
    '<div id="content" class="text-dark">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h3 id="firstHeading" class="firstHeading text-dark">FRISÖR CLEOPATRA</h3>' +
    '<div id="bodyContent" class="text-dark">' +
    '<p class="text-dark">Fjällgatan 32H <br> 981 39 Kiruna</p>' +
    '</div>' +
    '</div>';
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

  const marker = new google.maps.Marker({
    position: myLatLng,
    map,
    title: "FRISÖR CLEOPATRA",
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: true,
    });
  });

  infowindow.open(map,marker);
}