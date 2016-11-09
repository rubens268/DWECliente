var enlaces = document.getElementsByTagName('a');
console.log("El documento tiene " + enlaces.length + " enlaces.");
console.log("El penultimo enlace es: " + enlaces[document.getElementsByTagName('a').length - 2].href);

var cuenta = 0;
for (var element of enlaces)
{
    if(element.href.includes("http://prueba"))
        cuenta++;
}

console.log(cuenta + " enlaces enlazan a http://prueba");

var parrafos = document.getElementsByTagName('p');
var enlacesEnTercerParrafo = parrafos[2].getElementsByTagName('a');
console.log("El tercer parrafo tiene " + enlacesEnTercerParrafo.length + " enlaces.");