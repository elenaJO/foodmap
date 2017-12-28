$(document).ready(function() {
  $('#search').click(function() {
    // Evalua el valor del input si cumple con la condicion
    if ($('#list-restaurant').val().toUpperCase() === 'MIRAFLORES' || $('#list-restaurant').val().toUpperCase() === 'LINCE' || $('#list-restaurant').val().toUpperCase() === 'COMAS') {
      // guarda el valor ingresado en localStorage.distrito
      localStorage.distrito = $('#list-restaurant').val();
      window.location.href = 'chosen.html';
    } else {
      $('#list-restaurant').val('');
      alert('Ingrese uno de los distritos: Miraflores, Lince o Comas');
    }
  });
});

function initMap() {
  const contenedorMapa = document.getElementById('map');
  const directionsService = new google.maps.DirectionsService();
  const directionsDisplay = new google.maps.DirectionsRenderer();
  const geocoder = new google.maps.Geocoder();
  const lima = {lat: -12.1191427,
    lng: -77.0349046};
  // Caracterisricas del mapa
  const mapOptions = {
   	zoom: 18, // 1, 5, 10,15,20
    center: lima,
    disableDefaultUI: true,
  };
  // Creamos el mapa
  const mapa = new google.maps.Map(contenedorMapa, mapOptions);
  // Adjuntamos al mapa las siguientes caracteriristicas
  directionsDisplay.setMap(mapa);
  // Aqui indicamos el efecto que tendra el marcador
  const marcador = new google.maps.Marker({
    position: {lat: lima.lat,
      lng: lima.lng},
    animation: google.maps.Animation.DROP,
    map: mapa
  });

    // LLamamos al evento del window para que el mapa nos pueda ubicar
  window.addEventListener('load', function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoords, errorFound)}
    else {
      alert('Tu navegador no soporta Geolocation');
    }
  });

  function errorFound(error) {
    alert('Un error ocurrió: ' + error.code);
  };

  function getCoords(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var miUbicacion = new google.maps.Marker({
      position: {lat: lat,
        lng: lon},
      animation: google.maps.Animation.DROP,
      map: mapa
    });
    // Al mapa creado le agrego mi ubicación
    mapa.setCenter({lat: lat,
      lng: lon});
  }

  // Autocompletamos las direcciones de Inicio y fin
  // var puntos = document.getElementById('list-restaurant');
  // new google.maps.places.Autocomplete(puntos);
}