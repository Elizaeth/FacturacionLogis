function validateForm(form){
	
	
	
	if(form.getValue("fecha")== ""){
		throw  "El campo Fecha no a sido completado ";	
	}
	if(form.getValue("permisionario")== ""){
		throw"El campo Permisionario no a sido completado ";	
	}
	if(form.getValue("operador")== ""){
		throw "El campo Operador no a sido completado ";	
	}
	if(form.getValue("origen")== ""){
		throw "El campo Origen no a sido completado ";	
	}
	if(form.getValue("destino")== ""){
		throw "El campo Destino no a sido completado ";		
	}
	if(form.getValue("cliente")== ""){
		throw "El campo Cliente no a sido completado ";	
	}
	if(form.getValue("peso")== ""){
		throw "El campo Peso no a sido completado ";	
    }
	if(form.getValue("cuota")== ""){
		throw "El campo Cuota no a sido completado ";	
    }
	if(form.getValue("talon")== ""){
		throw "El campo Talon no a sido completado ";	
    }
	if(form.getValue("flete")== ""){
		throw "El campo Flete no a sido completado ";	
    }
	if(form.getValue("orden")== ""){
		throw "El campo  Orden a sido completado ";	
    }
}