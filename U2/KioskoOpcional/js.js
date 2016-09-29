/* Pongo el css en linea porque de otra forma no funciona con los document.write */

// Obtiene una array con todos los elementos
function generaSurtido () {
	return ["Chupachups", "Picota", "Caramelo Solan", "Sugus", "Sandía", "Mora", "Nubes"];
}

// Borra el contenido de <body> y vuelve a generar la pagina de inicio
function reiniciarPaginaDefault() {
	document.body.innerHTML = '';
	generarPaginaDefault();
}

// Genera la pagina de inicio
function generarPaginaDefault () {
	var html = "<center><p>¿Quieres conocer nuestro surtido? Pulsa sobre la imagen.</p><img style='cursor: pointer;' src='img/kiosko.jpg' onClick='mostrarSurtido()'> </img></center>";
	document.write(html);
}

// Obtiene el precio de un elemento de la array de precios
function consultaPrecio (indice) {
	var precios = [0.5, 0.05, 0.07, 0.02, 0.75, 0.01, 0.06];
	return precios[indice];
}

// Obtiene la url de la imagen de un elemento de la array de imagenes
function consultaImagen (indice) {
	var imgs = ["chupachups.jpg", "pikota.gif", "solan.gif", "sugus.jpg", "sandia.jpg", "mora.jpg", "nube.jpg"];
	return "img/" + imgs[indice];
}	

// Muestra una tabla con el objeto y la imagen al lado
function mostrarSurtido () {
	document.body.innerHTML = '';
	document.write("<p style='float: right;margin-top: -2px;cursor: pointer;' onClick='reiniciarPaginaDefault()'>Volver Al Inicio</p> <table><tr><th>Producto</th><th>Imagen</th></tr>");
	var surtido = generaSurtido();
	for (var i = surtido.length - 1; i >= 0; i--) {
		document.write("<tr><td>" + surtido[i] + "</td><td><img style='cursor: pointer;' src='" + consultaImagen(i) + "' onClick='obtenerPrecio(" + i + ")' width='100px'></img></td></tr>");
	}
	document.write("</table>")
}

// Muestra una tabla con el objeto, la imagen y el precio del objeto seleccionado
function obtenerPrecio (indice) {
	document.body.innerHTML = '';
	document.write("<p style='float: right;margin-top: -2px;cursor: pointer;' onClick='reiniciarPaginaDefault()'>Volver Al Inicio</p> <table><tr><th>Producto</th><th>Imagen</th><th>Precio</th></tr>");
	var surtido = generaSurtido();
	for (var i = surtido.length - 1; i >= 0; i--) {
		var htmlExtra = "<td></td>";
		if (i == indice)
			htmlExtra = "<td>" + consultaPrecio(i).toFixed(2) + "</td>"

		document.write("<tr><td>" + surtido[i] + "</td><td><img style='cursor: pointer;' src='" + consultaImagen(i) + "' onClick='obtenerPrecio(" + i + ")' width='100px'></img>" + htmlExtra + "</td></tr>");
	}
	document.write("</table>")
}

// Llamas a la generación de la pagina inicial
generarPaginaDefault();