$(document).ready(function() {
  $('#title-restaurant').text(localStorage.restaurant);
  var arrayNamePlate = [];
  var arrayCodPlate = [];
  for (var i = 0; i <= 2; i++) {
    var codigoPlate = data[localStorage.distrito.toUpperCase()][localStorage.restaurant]['platos'][i]['codigo'];
    arrayNamePlate[i] = data[localStorage.distrito.toUpperCase()][localStorage.restaurant]['platos'][i]['nombre'];
    arrayCodPlate[i] = codigoPlate;
    var appendPlate1 = '<div id="_cod_" class="_nombre_ images-plates"></div>';
    var appendReplace = appendPlate1.replace('_nombre_', codigoPlate).replace('_cod_', codigoPlate);
    $('#container-plates').append(appendReplace);
  }
  // utilice mouseenter ya que solo quiero que solo quiero que se ejecute una vez para que no se repita el nombre del plato
  function mouseenterImage(num) {
    var cod = '#' + arrayCodPlate[num];
    $(cod).addClass('red');
    $(cod).append('<p class="name-plate">' + arrayNamePlate[num] + '</p>');
  }

  function mouseleaveImage(num) {
    var cod = '#' + arrayCodPlate[num];
    $(cod).removeClass('red');
    $('.name-plate').remove();
  }

  $('#container-plates > div:nth-child(2)').mouseenter(function(event) {
    mouseenterImage(1);
  });

  $('#container-plates > div:nth-child(2)'). mouseleave(function() {
    mouseleaveImage(1);
  });

  $('#container-plates > div:nth-child(3)').mouseenter(function(event) {
    mouseenterImage(2);
  });
  
  $('#container-plates > div:nth-child(3)'). mouseleave(function() {
    mouseleaveImage(2);
  });
  
  $('#container-plates > div:first').mouseenter(function() {
    mouseenterImage(0);
  });

  $('#container-plates > div:first'). mouseleave(function() {
    mouseleaveImage(0);
  });
});