function createDataset(fields, constraints, sortFields) {

	 var dts = DatasetBuilder.newDataset();
	 dts.addColumn("cp");
	 dts.addColumn("Estado");
	 dts.addColumn("Municipio");
	 dts.addColumn("Localidad");

	 dts.addRow(new Array("76336","Queretaro","Pinal de Amoles","Adjunta de Gatos"));
	 dts.addRow(new Array("76420","Queretaro","Arroyo Seco","Alpujarras"));
	 dts.addRow(new Array("76245","Queretaro","El Marquez","Agua Azul"));
	 dts.addRow(new Array("76750","Queretaro","Tequisquiapan","Adolfo Lopez Mateos"));
	 dts.addRow(new Array("76803","Queretaro","San Juan del Rio","Alejandrina"));
	 dts.addRow(new Array("42390","Hidalgo","Alfajayucan","Baxthe"));
	 dts.addRow(new Array("42602","Hidalgo","Actopan","Bothi Baji"));
	 dts.addRow(new Array("42980","Hidalgo","Atotonilco de Tula","Atotonilco de Tula Centro"));
	 dts.addRow(new Array("42970","Hidalgo","Atitalaquia","Cardonal"));
	 dts.addRow(new Array("29102","Hidalgo","Chapantongo","Zimapantongo"));
	 dts.addRow(new Array("38747","Guanajuato","Acámbaro","Adolfo Ruiz Cortínez"));
	 dts.addRow(new Array("38014","Guanajuato","Celaya","Américas del Bajío"));
	 dts.addRow(new Array("36568","Guanajuato","Irapuato","Álamos"));
	 dts.addRow(new Array("38260","Guanajuato","Villagran","Ampliación Guadalupe"));
	 dts.addRow(new Array("38798","Guanajuato","Tarandacuao","Buenavista"));
	 dts.addRow(new Array("68715","Oaxaca","Abejones","Abejones"));
	 dts.addRow(new Array("69457","Oaxaca","Calihualá","San José Sabinillo"));
	 dts.addRow(new Array("71107","Oaxaca","Chalcatongo de Hidalgo","Cañada de Morelos"));
	 dts.addRow(new Array("71273","Oaxaca","Animas Trujano","El Paredón"));
	 dts.addRow(new Array("	70195","Oaxaca","Chahuites","El Porvenir"));
	 
	 
	 
	 return dts;
	
}