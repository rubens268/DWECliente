var num = prompt("Introduce el año de nacimiento:");
var date = new Date();
if (date.getFullYear() - num >= 18 )
	alert("Adelante");
else
	alert("No puedes pasar!");