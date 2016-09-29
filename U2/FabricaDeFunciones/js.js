function creaExponencial(exponente) {
	return function (x) {
		var num = x;
		for (var i = 1; i < exponente; i++) {
			num *=x;
		}
		return num;
	}
}

var cuartoExponente = creaExponencial(4);
console.log(cuartoExponente(5));

var cubo = creaExponencial(3);
console.log(cubo(5));

var cuadrado = creaExponencial(2);
console.log(cuadrado(5));

var exponenteUsuario = prompt("Introduce un exponente:");
var expUsu = creaExponencial(exponenteUsuario);
var numeroUsuario = prompt("Introduce un número");
var numUsu = expUsu(numeroUsuario);

alert(numeroUsuario + " ^ " + exponenteUsuario + " = " + numUsu);
