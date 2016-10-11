// Guarda la id del temporizador
var interval;

/* Esta function es llamada al cargar la web y sirve para 
 * rellenar la web nada mas cargarse
 */ 
function webCargada () {
	comprobarFecha();
}

/*
 * Esta function es llamada por el boton y sirve para
 * Iniciar o parar el temporizador
 */
function toggleRefreshButton () {

	var boton = document.getElementById('refreshButton');
	if (boton.innerHTML == "Parar Refresco")
	{
		if (confirm("Seguro que quieres parar el reloj?"))
		{
			clearInterval(interval);
			boton.innerHTML = "Iniciar Refresco";
		}
	}
	else
	{
		interval = setInterval(comprobarFecha, 100);
		boton.innerHTML = "Parar Refresco";
	}
}

//Esta function actualiza el elemento con id hora 
function comprobarFecha() {
	var d = new Date();
	document.getElementById('hora').innerHTML = d;
}

/* Esta function es llamada por el boton de enviar y sirve para 
 * parar el contador y lo inicia al pasar "x" segundos
 */
function timeout() {
	var tiempoCampo = parseInt(document.getElementById('stopTime').value);
	if (!isNaN(tiempoCampo) && isFinite(tiempoCampo))
	{
		clearInterval(interval);
		setTimeout(function() {
			interval = setInterval(comprobarFecha, 100)
		}, tiempoCampo * 1000);
	}
	else 
	{
		alert("Has de introducir un número");
	}
}