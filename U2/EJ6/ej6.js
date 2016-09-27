var numero = 16;
var nombre = "Jose";
var logico = 5>4;
var a;
var b = "true";
var c = "undefined";
var d = true;
var e = undefined;

escribir("numero", numero);
escribir("nombre", nombre);
escribir("logico", logico);
escribir("a", a);
escribir("b", b);
escribir("c", c);
escribir("d", d);
escribir("e", e);



function escribir(nombre, variable) {
	document.write("La variable " + nombre + " tiene el valor " + variable + " y es de tipo " + typeof(variable) + "<br>");
}