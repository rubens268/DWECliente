var fecha = new Date();
var dia = fecha.getDay();

var dia;
var restantes;
switch(dia)
{
	case 0:
		dia = "domingo";
		restantes = "0";
	break;
	case 1:
		dia = "lunes";
		restantes = "6";
	break;
	case 2:
		dia = "martes";
		restantes = "5";
	break;
	case 3:
		dia = "miercoles";
		restantes = "4";
	break;
	case 4:
		dia = "jueves";
		restantes = "3";
	break;
	case 5:
		dia = "viernes";
		restantes = "2";
	break;
	case 6:
		dia = "sabado";
		restantes = "1";
	break;
}

document.write("Hoy es " + dia + ", quedan " + restantes + " días para el domingo.");