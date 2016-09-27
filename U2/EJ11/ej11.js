var num = prompt("Que tabla de multiplicar quieres ver hoy?");

for (var i = 0; i <= 10; i++) {
	document.write("<p>" + num + " x " + i + " = " + (num*i) + "</p>");
}