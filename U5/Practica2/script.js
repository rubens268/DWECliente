var turno = "X";
var fichasX = 0;
var fichasO = 0;


function dom () {
    var botones = document.getElementsByTagName('button');
    for (var boton of botones)
    {
        boton.onclick = function () {
            if (this.innerHTML == "")
                if (turno == "X") 
                {
                    if (fichasX < 3)
                    {
                        this.innerHTML = turno;
                        fichasX++;
                        turno = "O";
                    }
                    else
                    {
                        alert("Hay demasiadas fichas X");
                    }
                    
                }
                else
                {
                    if (fichasO < 3)
                    {
                        this.innerHTML = turno;
                        turno = "X";
                        fichasO++;
                    }
                    else
                    {
                        alert("Hay demasiadas fichas O");
                    }
                } 
            document.getElementById('turno').innerHTML = turno;
        }

        boton.ondblclick = function () {
            if (this.innerHTML != turno)
            {
                alert("No es tu turno");
                return;
            }
            if (this.innerHTML == "X")
                fichasX--;
            else
                fichasO--;
            this.innerHTML = "";
        }
    }

    
}

function comprobarTresEnRaya () {
    var botones = document.getElementsByTagName('button');
    var botonesX = new Array();
    var botonesY = new Array();
    for (var boton of botones)
    {
        if (boton.innerHTML == "X")
            botonesX.push(boton);
        if (boton.innerHTML == "Y")
            botonesY.push(boton);
    }

    
    
}
