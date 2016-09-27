var X = 3/0;
var Y = 0/0;
var Z = null;
var A = undefined;
var suma1 = X++;
var suma2 = Y++;
var suma3 = Z++;
var suma4 = A++;


escribir("X", X);
escribir("Y", Y);
escribir("Z", Z);
escribir("A", A);
escribir("suma1", suma1);
escribir("suma2", suma2);
escribir("suma3", suma3);
escribir("suma4", suma4);



function escribir(nombre, variable) {
	document.write("La variable " + nombre + " tiene el valor " + variable + " y es de tipo " + typeof(variable) + "<br>");
}