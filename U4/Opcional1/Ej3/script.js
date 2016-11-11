function recorreTag () {
    var color = document.querySelector("input").value;
    var pes = document.querySelectorAll("p");
    for (var i = 0; i < pes.length; i++)
    {
        pes[i].style.color = color;
        pes[i].innerText = "Elemento número " + (i+1);
    }
}