function generaSurtido () {
	return ["Chupachups", "Picota", "Caramelo Solan", "Sugus", "Sandía", "Mora", "Nubes"];
}

function consultaPrecio (indice) {
	var precios = [0.5, 0.05, 0.07, 0.02, 0.75, 0.01, 0.06];
	return precios[indice];
}

function mostrarSurtido () {
	document.write("<table><tr><th>Producto</th><th>Precio</th></tr>");
	var surtido = generaSurtido();
	for (var i = surtido.length - 1; i >= 0; i--) {
		document.write("<tr><td>" + surtido[i] + "</td><td>" + consultaPrecio(i).toFixed(2) + " €</td></tr>");
	}
	document.write("</table>")
}