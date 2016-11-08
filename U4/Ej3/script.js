function recorreTag () {
    var color = document.getElementsByTagName("input")[0].value;
    var pes = document.getElementsByTagName("p");
    for (var i = 0; i < pes.length; i++)
    {
        pes[i].style.color = color;
        pes[i].innerText = "Elemento número " + (i+1);
    }
}