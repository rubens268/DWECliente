for (var item of document.getElementsByTagName('h1'))
{
    item.innerHTML = "Te he cambiado!";
}

for (var item of document.getElementsByClassName('destacado'))
{
    item.style.fontWeight = "bold";
}

document.getElementById('resultado').style.display = "none";

document.getElementsByName('sugerencia')[0].setAttribute("required", "required");

function mostrar () {
    document.getElementById('resultado').style.display = "initial";
}