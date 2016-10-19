var wind;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letra = "";
function getRandomLetter () {
	letra = alphabet[Math.floor((Math.random() * alphabet.length))];
	var html = 
		'<form name="formulario">' +
			'<h1>Manipular Arrays</h1>' +
			'<p>Introduce algunas palabras que empiezen por: ' + letra + '</p>' +
			'<textarea name="palabras"></textarea>' +
			'<button onclick="readData();">Aceptar</button>' +
		'</form>';
	document.write(html)
}

function readData () {
	var datos = formulario.palabras.value;
	var datos = datos.trim().split(" ");
	wind = window.open("","Manipular arrays", "width=600,height=250");
	wind.document.write('<meta charset="utf-8">');
	var winned = true;
	var puntos = sessionStorage.getItem("puntos");
	var fails = "";
	for (var data in datos) {
		if (datos[data].charAt(0) != letra) {
			winned = false;
			fails += " " + datos[data];
		}
		else
			puntos++;
	}
	
	if (winned)
	{
		sessionStorage.setItem("puntos", puntos);
		if (puntos == 1)
			wind.document.write("<b>Enhorabuena! Lo has conseguido! Tienes "+ puntos + " punto.</b>");
		else
			wind.document.write("<b>Enhorabuena! Lo has conseguido! Tienes "+ puntos + " puntos.</b>");
	}
	else{
		wind.document.write("<b>Has perdido! Tienes unos cuantos errores:</b>");
		wind.document.write("<p>" + fails + "</p>");
	}
}
