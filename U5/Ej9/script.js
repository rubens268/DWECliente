document.getElementById('cuadrado').style.top = "80px"; 
document.getElementById('cuadrado').style.left = "20px";

onkeyup = function (e) {
    var cuadrado = document.getElementById('cuadrado'); 
    // Arriba
    if (e.keyCode == 38)
    {
        if (cuadrado.offsetTop > 0)
        {
            var currentPosition = parseInt(cuadrado.style.top.substring(0, cuadrado.style.top.length - 2));
            cuadrado.style.top = currentPosition - 20 + "px";
        }
    }
    //Abajo
    else if (e.keyCode == 40)
    {
        if (cuadrado.offsetTop < document.body.offsetHeight - 220)
        {
            var currentPosition = parseInt(cuadrado.style.top.substring(0, cuadrado.style.top.length - 2));
            cuadrado.style.top = currentPosition + 20 + "px";
        }
    }
    // Izquierda
    else if (e.keyCode == 37)
    {
        if (cuadrado.offsetLeft > 0)
        {
            var currentPosition = parseInt(cuadrado.style.left.substring(0, cuadrado.style.left.length - 2));
            cuadrado.style.left = currentPosition - 20 + "px";
        }
    }
    // Derecha
    else if (e.keyCode == 39)
    {
        if (cuadrado.offsetLeft < document.body.offsetWidth - 220)
        {
            var currentPosition = parseInt(cuadrado.style.left.substring(0, cuadrado.style.left.length - 2));
            cuadrado.style.left = currentPosition + 20 + "px";
        }
    }    
}