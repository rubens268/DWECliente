var interval;

function webCargada () {
	comprobarFecha();
}

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

function comprobarFecha() {
	var d = new Date();
	document.getElementById('hora').innerHTML = d;
}

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