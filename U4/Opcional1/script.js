var estado = "impar";
function recorreTag () {
    var pes;
    if (estado == "par") {
        pes = document.querySelectorAll("p:nth-child(even)");
        estado = "impar";
    }
    else
    {
        pes = document.querySelectorAll("p:nth-child(odd)");
        estado = "par";
    }
    var color = document.querySelector("input").value;
    document.querySelector("button").innerText = "Modificar los párrafos "+estado+"es!";
    for (var i = 0; i < pes.length; i++)
    {
        pes[i].style.color = color;
        pes[i].innerText = "Elemento " + estado + " número " + (i+1);
    }
}