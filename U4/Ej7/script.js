function ocultarParrafo () {
    document.getElementsByTagName("p")[0].setAttribute("class", "oculto");
    document.getElementsByTagName("p")[1].setAttribute("class", "visible");
}

function borrarParrafo () {
    document.getElementsByTagName("p")[1].innerHTML = "";
}