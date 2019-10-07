function validateForm(form){
	
	
	var msg ="";
	/*Reuisitos*/
	if(form.getValue("talon")== ""){
		msg +=  "El campo Talon no a sido completado ";	
	}
	if(form.getValue("orden")== ""){
		msg += "El campo Orden no a sido completado ";	
	}
	if(form.getValue("destino")== ""){
		msg += "El campo Destino no a sido completado ";	
	}
	if(form.getValue("peso")== ""){
		msg += "El campo Peso no a sido completado ";	
	}
	if(form.getValue("cuota")== ""){
		msg += "El campo Cuota no a sido completado ";	
	}
	if(form.getValue("operador")== ""){
		msg += "El campo Operador no a sido completado ";	
	}
	if(form.getValue("deposito")== ""){
		msg += "El campo Deposito no a sido completado ";	
	}
	
		if(msg != ""){
			throw msg;
		}
}
