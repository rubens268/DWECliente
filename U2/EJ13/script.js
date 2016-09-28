function calculaEdad(anoDeNacimiento) {
	var fecha = new Date();
	return fecha.getFullYear() - anoDeNacimiento;
}