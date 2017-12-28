$(document).ready(function() {
  $('#title-restaurant').text(localStorage.restaurant);
  var arrayNamePlate = [];
  for (var i = 0; i <= 2; i++) {
    var codigoPlate = data[localStorage.distrito.toUpperCase()][localStorage.restaurant]['platos'][i]['codigo'];
    arrayNamePlate[i] = data[localStorage.distrito.toUpperCase()][localStorage.restaurant]['platos'][i]['nombre'];
    var appendPlate1 = '<div id="_cod_" class="_nombre_ images-plates"></div>';
    var appendReplace = appendPlate1.replace('_nombre_', codigoPlate).replace('_cod_', codigoPlate);
    $('#container-plates').append(appendReplace);
  }

  $('#container-plates > div:first').click(function(event) {
    console.log(arrayNamePlate[0]);
  });

  $('#container-plates > div:nth-child(2)').click(function(event) {
    console.log(arrayNamePlate[1]);
  });

  $('#container-plates > div:nth-child(3)').click(function(event) {
    console.log(arrayNamePlate[2]);
  });

  $('#container-plates > div:first').mouseover(function() {
    console.log(arrayNamePlate[0]);
  });

  $('#container-plates > div:first').on('touchstart', function() {
    console.log(arrayNamePlate[0]);
  });
});