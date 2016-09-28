function calculaEdad(anoDeNacimiento) {
	var fecha = new Date();
	return fecha.getFullYear() - anoDeNacimiento;
}
var edad = calculaEdad(prompt("Dime el año de nacimiento"));

if (edad < 7)
{
	alert("Da igual porque no sabes leer");
}
else if (edad >=7 && edad < 18)
{
	alert("HEYY! Que dices?");
}
else
{
	alert("Buenos días señor");
}