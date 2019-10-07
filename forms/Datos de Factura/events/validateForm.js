function validateForm(form){
var msg ="";
	if(form.getValue("fecha") ==""){
		msg+= "el campo fecha no fue completado correctamente.";
	}
	if(form.getValue("descripcion") ==""){
		msg+= "el campo descripcion no fue completado correctamente.";
	}
	
	if(form.getValue("permisionario") ==""){
		msg+= "el campo permisionario no fue completado correctamente.";
	}
	if(form.getValue("deposito") ==""){
		msg+= "el campo deposito no fue completado correctamente.";
	}
	if(form.getValue("retiro") ==""){
		msg+= "el campo retiro  no fue completado correctamente.";
	}
	if(form.getValue("saldo") ==""){
		msg+= "el campo saldo ficsal no fue completado correctamente.";
	}
	if(msg != ""){
		throw msg;
	}
}