document.querySelector('img').style.width = "150px"; 
document.querySelector('img').style.height = "150px";

onkeypress = function (e) {
    var imagen = document.querySelector('img'); 
    var currentSize = parseInt(imagen.style.width.substring(0, imagen.style.width.length - 2));
    if ((e.keyCode == 45) ||(e.keyCode == 109))
    {
        if (currentSize > 150)
        {
            imagen.style.width = currentSize - 25 + "px";
            imagen.style.height = currentSize - 25 + "px";
        }
    }
    else if ((e.keyCode == 43) ||(e.keyCode == 107))
    {
        if (currentSize < 1024)
        {
            imagen.style.width = currentSize + 25 + "px";
            imagen.style.height = currentSize + 25 + "px";
        }
    }
}