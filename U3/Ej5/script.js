function Producto (codigo, nombre, ingredientes) {
	this.codigo = codigo;
	this.nombre = nombre;
	this.precio = Math.floor((Math.random() * 200) + 100) / 100;
	this.ingredientes = ingredientes.sort();

	this.imprimeDatos = function () {
		document.write("<p>Código:" + this.codigo + "</p>");
		document.write("<p>Nombre:" + this.nombre + "</p>");
		document.write("<p>Precio:" + this.precio + "</p>");
	}

	this.borraIngredientes = function () {
		if (this.ingredientes.length > 1)
		{
			this.ingredientes.pop();
		}
		else
		{
			alert("Solo queda un ingrediente!");
		}
	}

	this.buscaInfo = function () {
		var name = this.nombre.replace(' ', '+');
		window.open('https://www.google.es/#safe=off&q=' + name);
	}

	this.verIngredeintes = function () {
		var wind = window.open("","Ingredientes", "width=600,height=250");
		wind.document.write("<h2>Ingredientes de " + this.nombre + ":</h2>");
		wind.document.write("<ul>")
		for (var ingrediente in this.ingredientes) {
			wind.document.write("<li>" + this.ingredientes[ingrediente] + "</li>")
		} 
		wind.document.write("</ul>");
		wind.document.write("<button onclick='window.close()'>Cerrar</button>");
	}
}

var productos = [new Producto(001, "rosquilletas", ["sal", "agua", "harina"]), new Producto(002, "ensalada", ["sal", "aceite", "lechuga", "tomate"]), new Producto(003, "CocaCola", ["agua", "azucar", "colorante alimenticio"])];

for (var producto = 0; producto < productos.length; producto++) {
	productos[producto].imprimeDatos();
	document.write("<button onclick='productos[" + producto + "].verIngredeintes()'>Ver ingredientes</button>");
	document.write("<button onclick='productos[" + producto + "].borraIngredientes()'>Eliminar ingrediente</button>");
	document.write("<button onclick='productos[" + producto + "].buscaInfo()'>Mas información</button>");
}

