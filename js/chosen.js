$(document).ready(function() {
  $('#title-restaurant').text(localStorage.distrito.toUpperCase());
  var selectRestaurant = localStorage.distrito.toUpperCase();
  var restaurant1;
  var restaurant2;
  function restaurantDist(distrito) {
    restaurant1 = Object.keys(data[distrito])[0];
    restaurant2 = Object.keys(data[distrito])[1];
    $('#restaurant1-dist').prepend(restaurant1);
    $('#restaurant2-dist').prepend(restaurant2);
  }

  if (selectRestaurant === 'MIRAFLORES') {
    restaurantDist('Miraflores');
  }
  
  if (selectRestaurant === 'COMAS') {
    restaurantDist('Comas');
  } 

  if (selectRestaurant === 'LINCE') {
    restaurantDist('Lince');
  }
  
  $('#select-one').click(function() {
    console.log($('#restaurant1-dist').text());
  });

  $('#select-two').click(function() {
    console.log($('#restaurant2-dist').text());
  });

});