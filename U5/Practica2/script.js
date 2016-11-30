var turno = "X";
var fichasX = 0;
var fichasO = 0;
var ganado;

function dom () {
    var botones = document.getElementsByTagName('button');
    for (var boton of botones)
    {
        boton.onclick = function () {
            if ((this.innerHTML == "")&&(!ganado)){
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
                
            if (!ganado){
                var winner = comprobarTresEnRaya();
                if (winner != false) {
                    alert("Tres en raya, gana " + winner);
                    var text = document.getElementById('turno').parentNode;
                    text.innerHTML = "Tres en raya, gana " + winner;
                    text.style.color = "red";
                    text.style.fontWeight = "bold";
                    ganado = true;
                }
            }
                
        }

        boton.ondblclick = function () {
            if (ganado) { return; }
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
            botonesX.push(boton.id);
        if (boton.innerHTML == "O")
            botonesY.push(boton.id);
    }

    
    if (botonesX.length == 3)
    {
        botonesX.sort();
        // horizontal
        if (botonesX[0][0] == botonesX[1][0] && botonesX[1][0] == botonesX[2][0])
            if (parseInt(botonesX[0][1])+1 == parseInt(botonesX[1][1]) && parseInt(botonesX[1][1]) == parseInt(botonesX[2][1])-1) 
                return "X";
        
        // vertical
        if (botonesX[0][1] == botonesX[1][1] && botonesX[1][1] == botonesX[2][1])
            if (parseInt(botonesX[0][0])+1 == parseInt(botonesX[1][0]) && parseInt(botonesX[1][0]) == parseInt(botonesX[2][0])-1)
                return "X";

        // diagonal
        if (((parseInt(botonesX[0][1])+1 == parseInt(botonesX[1][1]) && parseInt(botonesX[1][1]) == parseInt(botonesX[2][1])-1) || 
            (parseInt(botonesX[0][1])-1 == parseInt(botonesX[1][1]) && parseInt(botonesX[1][1]) == parseInt(botonesX[2][1])+1))
            &&
            (parseInt(botonesX[0][0])+1 == parseInt(botonesX[1][0]) && parseInt(botonesX[1][0]) == parseInt(botonesX[2][0])-1))
            return "X";
    }
    
    if (botonesY.length == 3)
    {
        botonesY.sort();
        // horizontal
        if (botonesY[0][0] == botonesY[1][0] && botonesY[1][0] == botonesY[2][0])
            if (parseInt(botonesY[0][1])+1 == parseInt(botonesY[1][1]) && parseInt(botonesY[1][1]) == parseInt(botonesY[2][1])-1) 
                return "O";
        
        // vertical
        if (botonesY[0][1] == botonesY[1][1] && botonesY[1][1] == botonesY[2][1])
            if (parseInt(botonesY[0][0])+1 == parseInt(botonesY[1][0]) && parseInt(botonesY[1][0]) == parseInt(botonesY[2][0])-1)
                return "O";
        
        // diagonal
        if (((parseInt(botonesY[0][1])+1 == parseInt(botonesY[1][1]) && parseInt(botonesY[1][1]) == parseInt(botonesY[2][1])-1) || 
            (parseInt(botonesY[0][1])-1 == parseInt(botonesY[1][1]) && parseInt(botonesY[1][1]) == parseInt(botonesY[2][1])+1))
            &&
            (parseInt(botonesY[0][0])+1 == parseInt(botonesY[1][0]) && parseInt(botonesY[1][0]) == parseInt(botonesY[2][0])-1))
            return "O";
    }
    return false;
}

