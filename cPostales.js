$("#cPostal").blur(function() {
	$.getJSON("//api-codigos-postales.herokuapp.com/"+ $("#cPostal").val() + "/json/", function(datos){
	$("#estado").val(datos.estado);
	$("#municipio").val(datos.municipio);
	$("#colonia").val(datos.colonia);
	
	})
});