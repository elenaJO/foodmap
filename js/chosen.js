$(document).ready(function() {
  $('#title-distrito').text(localStorage.distrito.toUpperCase());
  var selectRestaurant = localStorage.distrito.toUpperCase();
  var restaurant1;
  var restaurant2;
  function restaurantDist(distrito) {
    // obtiene los restaurantes del distrito seleccionado a partir de la data
    restaurant1 = Object.keys(data[distrito])[0];
    restaurant2 = Object.keys(data[distrito])[1];
    $('#restaurant1-dist').prepend(restaurant1);
    $('#restaurant2-dist').prepend(restaurant2);
  }

  if (selectRestaurant === 'MIRAFLORES') {
    restaurantDist('MIRAFLORES');
  }
  
  if (selectRestaurant === 'COMAS') {
    restaurantDist('COMAS');
  } 

  if (selectRestaurant === 'LINCE') {
    restaurantDist('LINCE');
  }
  
  $('#select-one').click(function() {
    // Guarda el valor del restaurante seleccionado y redirecciona a la vista plate
    localStorage.restaurant = $('#restaurant1-dist').text();
    window.location.href = 'plate.html';
  });

  $('#select-two').click(function() {
    localStorage.restaurant = $('#restaurant2-dist').text();
    window.location.href = 'plate.html';
  });
});