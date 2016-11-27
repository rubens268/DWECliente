var ultimoClick = undefined;
var loadTime = new Date();
var timer;

function onload () {
    document.getElementById('movimientos').innerHTML = 0;
    document.getElementById('aciertos').innerHTML = 0;
    timer = setInterval(function () {
        var diference = new Date() - loadTime;
        var segundos = Math.round(diference / 1000);
        var minutos = 0;
        while (segundos > 59)
        {
            minutos++;
            segundos -= 60;
        }
        if (segundos >= 0){
            if (segundos < 10)
                segundos = "0" + segundos;
            document.querySelector('#segundos').innerHTML = segundos;
        }
        document.querySelector('#minutos').innerHTML = minutos;
    }, 500);

    var tabla = document.createElement('table');
    var tr = document.createElement('tr');

    var cartas = new Array();
    for (var i = 0; i<=11; i++)
    {
        var img = document.createElement('img');
        img.setAttribute('data-src', "img/" + i + ".png");
        img.setAttribute('id', i);
        img.src = "img/cruz.png";
        img.onclick = function () {
            if (ultimoClick == this.getAttribute('id'))
                return;
            if (this.src.indexOf("img/cruz.png") < 0)
                return;
            this.src = this.getAttribute('data-src');
            if (ultimoClick === undefined)
            {
                ultimoClick = this.getAttribute('id');
            }
            else {
                if (ultimoClick % 2 == 0)
                {   
                    if (parseInt(this.getAttribute('id')) -1 == ultimoClick)
                        document.getElementById('aciertos').innerHTML = parseInt(document.getElementById('aciertos').innerHTML)+1;
                    else{
                        setTimeout(function (img, img2) {
                            img2.src = "img/cruz.png";
                            img.src = "img/cruz.png";
                        }, 2000, this, document.getElementById(ultimoClick));
                    }
                }
                else 
                {
                    if (parseInt(this.getAttribute('id')) +1 == ultimoClick)
                        document.getElementById('aciertos').innerHTML = parseInt(document.getElementById('aciertos').innerHTML)+1;
                    else{
                        setTimeout(function (img, img2) {
                            img2.src = "img/cruz.png";
                            img.src = "img/cruz.png";
                        }, 2000, this, document.getElementById(ultimoClick));
                    }
                }
                if (parseInt(document.getElementById('aciertos').innerHTML) == 6)
                {
                    clearInterval(timer);
                }
                document.getElementById('movimientos').innerHTML = parseInt(document.getElementById('movimientos').innerHTML)+1;
                ultimoClick = undefined;
            }
        }
        cartas.push(img);
    }

    while (cartas.length > 0) 
    {
        if (cartas.length == 4){
            tabla.appendChild(tr);
            tr = document.createElement('tr');
        }
            
        else if (cartas.length == 8) {
            tabla.appendChild(tr);
            tr = document.createElement('tr');
        }

        var nCarta = Math.floor(Math.random()*cartas.length);
        var carta = cartas[nCarta];
        cartas.splice(nCarta, 1);
        
        var td = document.createElement('td');
        td.appendChild(carta);
        tr.appendChild(td);
    }
    
    
    tabla.appendChild(tr);
    document.querySelector('#tablero').innerHTML = "";
    document.querySelector('#tablero').appendChild(tabla);
}
