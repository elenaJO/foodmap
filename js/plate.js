$(document).ready(function() {
  $('#title-restaurant').text(localStorage.restaurant);
  for (var i = 0; i <= 2; i++) {
    var codigoPlate = data[localStorage.distrito.toUpperCase()][localStorage.restaurant]['platos'][i]['codigo'];
    var appendPlate1 = '<div id="_cod_" class="_nombre_ images-plates"></div>';
    var appendReplace = appendPlate1.replace('_nombre_', codigoPlate).replace('_cod_', codigoPlate);
    $('#container-plates').append(appendReplace);
  }
});