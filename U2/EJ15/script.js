var diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
alert("Estos son los días de la semana:");
for (var i = 0; i < diasSemana.length; i++) {
	alert(diasSemana[i]);
}
var dia = prompt("Dime un dia de la semana del 1 (lunes) al 7 (domingo)");
if (!isNaN(dia) && isFinite(dia))
	if (dia > 0 && dia < 8)
		alert("El dia que has elegido es un " + diasSemana[dia-1]);
	else
		alert("Te he pedido un número entre el 1 y el 7");
else
	alert("Lo que has introducido no es un número");