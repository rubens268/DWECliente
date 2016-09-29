/* Pongo el css en linea porque de otra forma no funciona con los document.write */

function generaSurtido () {
	return ["Chupachups", "Picota", "Caramelo Solan", "Sugus", "Sandía", "Mora", "Nubes"];
}

function reiniciarPaginaDefault() {
	document.body.innerHTML = '';
	generarPaginaDefault();
}

function generarPaginaDefault () {
	var html = "<center><p>¿Quieres conocer nuestro surtido? Pulsa sobre la imagen.</p><img style='cursor: pointer;' src='img/kiosko.jpg' onClick='mostrarSurtido()'> </img></center>";
	document.write(html);
}

function consultaPrecio (indice) {
	var precios = [0.5, 0.05, 0.07, 0.02, 0.75, 0.01, 0.06];
	return precios[indice];
}

function consultaImagen (indice) {
	var imgs = ["chupachups.jpg", "pikota.gif", "solan.gif", "sugus.jpg", "sandia.jpg", "mora.jpg", "nube.jpg"];
	return "img/" + imgs[indice];
}	

function mostrarSurtido () {
	document.body.innerHTML = '';
	document.write("<p style='float: right;margin-top: -2px;cursor: pointer;' onClick='reiniciarPaginaDefault()'>Volver Al Inicio</p> <table><tr><th>Producto</th><th>Imagen</th></tr>");
	var surtido = generaSurtido();
	for (var i = surtido.length - 1; i >= 0; i--) {
		document.write("<tr><td>" + surtido[i] + "</td><td><img src='" + consultaImagen(i) + "' onClick='obtenerPrecio(" + i + ")' width='100px'></img></td></tr>");
	}
	document.write("</table>")
}

function obtenerPrecio (indice) {
	document.body.innerHTML = '';
	document.write("<p style='float: right;margin-top: -2px;cursor: pointer;' onClick='reiniciarPaginaDefault()'>Volver Al Inicio</p> <table><tr><th>Producto</th><th>Imagen</th><th>Precio</th></tr>");
	var surtido = generaSurtido();
	for (var i = surtido.length - 1; i >= 0; i--) {
		var htmlExtra = "<td></td>";
		if (i == indice)
			htmlExtra = "<td>" + consultaPrecio(i) + "</td>"

		document.write("<tr><td>" + surtido[i] + "</td><td><img src='" + consultaImagen(i) + "' onClick='obtenerPrecio(" + i + ")' width='100px'></img>" + htmlExtra + "</td></tr>");
	}
	document.write("</table>")
}

generarPaginaDefault();