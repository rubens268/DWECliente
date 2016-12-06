/** Cosas para hacer:
 * 
 * Arreglar compmrobación de victoria
 */

// ######################### CONSTRUCTORES #####################################
function ficha (num1, num2, bg) {
    this.num1 = num1;
    this.num2 = num2;
    this.valor = num1 + num2;
    this.width = 88;
    this.height = 46;
    this.bg = bg;
} 

function bot () {
    this.mano = generateHand();
    this.turno = function () {
        if (winned)
            return;
        for (var i = 0; i< this.mano.length; i++)
        {
            if ((this.mano[i].num1 == num1Mesa)||(this.mano[i].num2 == num2Mesa)||(this.mano[i].num2 == num1Mesa)||(this.mano[i].num1 == num2Mesa))
            {
                for (var x = 0; x < fichasEnMano.length; x++)
                {
                    if ((fichasEnMano[x].num1 == this.mano[i].num1)&&(fichasEnMano[x].num2 == this.mano[i].num2))
                        fichasEnMano.splice(x, 1);
                }
                var fichaHTML = document.createElement('div');
                fichaHTML.style.height = this.mano[i].height + "px";
                fichaHTML.style.width = this.mano[i].width + "px";
                fichaHTML.style.background = this.mano[i].bg;
                fichaHTML.style.display = "inline-block";
                fichaHTML.id = this.mano[i].num1 + "" + this.mano[i].num2;
                fichaHTML.setAttribute('class', 'ficha bot');
                fichaHTML.setAttribute('data-n', this.mano[i].num);
                
                if (num1Mesa == this.mano[i].num1)
                {
                    //num1Mesa = this.mano[i].num2;
                    document.getElementById('tablero').insertBefore(fichaHTML, document.getElementById('tablero').firstChild);
                    if ((contadorFichas.numeroFichas0 == 20)||(contadorFichas.numeroFichas0 == 10)){
                        fichaHTML.style.display = "block";
                        insertarFicha(fichaHTML, "izquierda", "rotate(270deg)", true);
                    }
                    else
                    {
                        insertarFicha(fichaHTML, "izquierda", "rotate(180deg)", true);
                    }
                }
                else if (num1Mesa == this.mano[i].num2)
                {
                    //num1Mesa = this.mano[i].num1;
                    if ((contadorFichas.numeroFichas0 == 20)||(contadorFichas.numeroFichas0 == 10)){
                        fichaHTML.style.display = "block";
                        insertarFicha(fichaHTML, "izquierda", "rotate(90deg)", true);
                    }
                    else
                    {
                        insertarFicha(fichaHTML, "izquierda", "", true);
                    }
                }
                    
                else if (num2Mesa == this.mano[i].num1)
                {
                    //num2Mesa = this.mano[i].num2;
                    if ((contadorFichas.numeroFichas1 == 30)||(contadorFichas.numeroFichas1 == 40)){
                        fichaHTML.style.display = "block";
                        insertarFicha(fichaHTML, "derecha", "rotate(270deg)", true);
                    }
                    else
                    {
                        insertarFicha(fichaHTML, "derecha", "", true);
                    }
                }
                else if (num2Mesa == this.mano[i].num2)
                {
                    //num2Mesa = this.mano[i].num1;
                    if ((contadorFichas.numeroFichas1 == 30)||(contadorFichas.numeroFichas1 == 40)){
                        fichaHTML.style.display = "block";
                        insertarFicha(fichaHTML, "derecha", "rotate(90deg)", true);
                    }
                    else
                    {
                        insertarFicha(fichaHTML, "derecha", "rotate(180deg)", true);
                    }
                }
                
                this.mano.splice(i, 1);
                return;
            }
        }

        if (fichas.length > 0)
        {
            this.mano.push(obtenerNuevaFicha());
            return;
        }
    }
}

function contador () {
    this.numeroFichas0 = 24;
    this.numeroFichas1 = 26;
    this.fichas = [ 0, 0, 0, 0, 0, 0, 0];

    this.sumar = function (i) {
        if (i == 1)
            this.numeroFichas1++;
        else if (i == 0)
            this.numeroFichas0--;
    }
    this.sumarFicha = function (i) {
        this.fichas[i]++;
    }
};
// ######################### FIN CONSTRUCTORES #####################################

// ######################### INICIALIZACIÓN DE VARIABLES #####################################
var fichas = [
    new ficha(0, 0, "url('img/fichasDomino.png') no-repeat -6px -7px"),
    new ficha(0, 1, "url('img/fichasDomino.png') no-repeat -6px -57px"),
    new ficha(0, 2, "url('img/fichasDomino.png') no-repeat -6px -107px"),
    new ficha(0, 3, "url('img/fichasDomino.png') no-repeat -6px -157px"), 
    new ficha(0, 4, "url('img/fichasDomino.png') no-repeat -6px -207px"),
    new ficha(0, 5, "url('img/fichasDomino.png') no-repeat -6px -257px"),
    new ficha(0, 6, "url('img/fichasDomino.png') no-repeat -6px -307px"),
    new ficha(1, 1, "url('img/fichasDomino.png') no-repeat -99px -7px"),
    new ficha(1, 2, "url('img/fichasDomino.png') no-repeat -99px -57px"),
    new ficha(1, 3, "url('img/fichasDomino.png') no-repeat -99px -107px"),
    new ficha(1, 4, "url('img/fichasDomino.png') no-repeat -99px -157px"),
    new ficha(1, 5, "url('img/fichasDomino.png') no-repeat -99px -207px"),
    new ficha(1, 6, "url('img/fichasDomino.png') no-repeat -99px -257px"),
    new ficha(2, 2, "url('img/fichasDomino.png') no-repeat -99px -307px"),
    new ficha(2, 3, "url('img/fichasDomino.png') no-repeat -191px -7px"),
    new ficha(2, 4, "url('img/fichasDomino.png') no-repeat -191px -57px"),
    new ficha(2, 5, "url('img/fichasDomino.png') no-repeat -191px -107px"),
    new ficha(2, 6, "url('img/fichasDomino.png') no-repeat -191px -157px"),
    new ficha(3, 3, "url('img/fichasDomino.png') no-repeat -191px -207px"),
    new ficha(3, 4, "url('img/fichasDomino.png') no-repeat -191px -257px"),
    new ficha(3, 5, "url('img/fichasDomino.png') no-repeat -191px -307px"),
    new ficha(3, 6, "url('img/fichasDomino.png') no-repeat -284px -7px"),
    new ficha(4, 4, "url('img/fichasDomino.png') no-repeat -284px -57px"),
    new ficha(4, 5, "url('img/fichasDomino.png') no-repeat -284px -107px"),
    new ficha(4, 6, "url('img/fichasDomino.png') no-repeat -284px -157px"),
    new ficha(5, 5, "url('img/fichasDomino.png') no-repeat -284px -207px"),
    new ficha(5, 6, "url('img/fichasDomino.png') no-repeat -284px -257px"),
    new ficha(6, 6, "url('img/fichasDomino.png') no-repeat -284px -307px")
];

var fichasOriginal = [
    new ficha(0, 0, "url('img/fichasDomino.png') no-repeat -6px -7px"),
    new ficha(0, 1, "url('img/fichasDomino.png') no-repeat -6px -57px"),
    new ficha(0, 2, "url('img/fichasDomino.png') no-repeat -6px -107px"),
    new ficha(0, 3, "url('img/fichasDomino.png') no-repeat -6px -157px"), 
    new ficha(0, 4, "url('img/fichasDomino.png') no-repeat -6px -207px"),
    new ficha(0, 5, "url('img/fichasDomino.png') no-repeat -6px -257px"),
    new ficha(0, 6, "url('img/fichasDomino.png') no-repeat -6px -307px"),
    new ficha(1, 1, "url('img/fichasDomino.png') no-repeat -99px -7px"),
    new ficha(1, 2, "url('img/fichasDomino.png') no-repeat -99px -57px"),
    new ficha(1, 3, "url('img/fichasDomino.png') no-repeat -99px -107px"),
    new ficha(1, 4, "url('img/fichasDomino.png') no-repeat -99px -157px"),
    new ficha(1, 5, "url('img/fichasDomino.png') no-repeat -99px -207px"),
    new ficha(1, 6, "url('img/fichasDomino.png') no-repeat -99px -257px"),
    new ficha(2, 2, "url('img/fichasDomino.png') no-repeat -99px -307px"),
    new ficha(2, 3, "url('img/fichasDomino.png') no-repeat -191px -7px"),
    new ficha(2, 4, "url('img/fichasDomino.png') no-repeat -191px -57px"),
    new ficha(2, 5, "url('img/fichasDomino.png') no-repeat -191px -107px"),
    new ficha(2, 6, "url('img/fichasDomino.png') no-repeat -191px -157px"),
    new ficha(3, 3, "url('img/fichasDomino.png') no-repeat -191px -207px"),
    new ficha(3, 4, "url('img/fichasDomino.png') no-repeat -191px -257px"),
    new ficha(3, 5, "url('img/fichasDomino.png') no-repeat -191px -307px"),
    new ficha(3, 6, "url('img/fichasDomino.png') no-repeat -284px -7px"),
    new ficha(4, 4, "url('img/fichasDomino.png') no-repeat -284px -57px"),
    new ficha(4, 5, "url('img/fichasDomino.png') no-repeat -284px -107px"),
    new ficha(4, 6, "url('img/fichasDomino.png') no-repeat -284px -157px"),
    new ficha(5, 5, "url('img/fichasDomino.png') no-repeat -284px -207px"),
    new ficha(5, 6, "url('img/fichasDomino.png') no-repeat -284px -257px"),
    new ficha(6, 6, "url('img/fichasDomino.png') no-repeat -284px -307px")
];

var fichasEnMano = new Array();

var contadorFichas = new contador(); 
// DATOS MESA
var num1Mesa;
var num2Mesa;
var centro;
var newBot = new bot();
var winned = false;
// ######################### FIN DE INICIALIZACIÓN DE VARIABLES #####################################

// ######################### DOM #####################################
function waitDOM (){
    
    for (var ficha of generateHand()) {
        var fichaHTML = document.createElement('div');
        fichaHTML.style.height = ficha.height + "px";
        fichaHTML.style.width = ficha.width + "px";
        fichaHTML.style.background = ficha.bg;
        fichaHTML.style.display = "inline-block";
        fichaHTML.style.transform = "rotate(90deg)";
        fichaHTML.id = ficha.num1 + "" + ficha.num2;
        fichaHTML.setAttribute('class', 'ficha');
        fichaHTML.setAttribute('data-n', ficha.num);
        fichaHTML.draggable = true;
        fichaHTML.ondragstart =  drag;
        document.getElementById('mano').appendChild(fichaHTML);
    }
}
// ######################### FIN DOM #####################################

// ######################### FUNCIONES #####################################
function pedirFicha () {
    if (winned)
        return;
    var ficha = obtenerNuevaFicha();
    var fichaHTML = document.createElement('div');
    if (ficha != undefined)
    {
        fichaHTML.style.height = ficha.height + "px";
        fichaHTML.style.width = ficha.width + "px";
        fichaHTML.style.background = ficha.bg;
        fichaHTML.style.display = "inline-block";
        fichaHTML.style.transform = "rotate(90deg)";
        fichaHTML.id = ficha.num1 + "" + ficha.num2;
        fichaHTML.setAttribute('class', 'ficha');
        fichaHTML.setAttribute('data-n', ficha.num);
        fichaHTML.draggable = true;
        fichaHTML.ondragstart =  drag;
        document.getElementById('mano').appendChild(fichaHTML);
    }
    newBot.turno();
}

function obtenerNuevaFicha () {
    if (fichas.length > 0)
    {
        var nFicha = Math.floor(Math.random()*fichas.length);
        fichas[nFicha].nFicha = nFicha;
        for (var x = 0; x<fichasOriginal.length; x++)
        {
            if ((fichasOriginal[x].num1 == fichas[nFicha].num1)&&(fichasOriginal[x].num2 == fichas[nFicha].num2))
                fichas[nFicha].num = x;
        }
        var ficha = fichas[nFicha];
        fichas.splice(nFicha, 1);
        ficha.fmID = fichasEnMano.push(ficha); 
        return ficha;
    }
}

function generateHand () {
    var mano = new Array();
    for (var i = 0; i<7; i++)
    { 
        var ficha = obtenerNuevaFicha();
        mano.push(ficha);
    }
    return mano;
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    var item = document.getElementById(ev.target.id);
    var id = item.getAttribute('data-n');
    var drops = document.getElementById('tablero').querySelectorAll('[ondrop]');
    for (var drop of drops)
    {
        drop.setAttribute("ondrop", "");
        drop.setAttribute("ondragover", "");
    }
        
        


    if ((num1Mesa == fichasOriginal[id].num1)||(num1Mesa == fichasOriginal[id].num2))
    {
        document.getElementById('tablero').getElementsByClassName(contadorFichas.numeroFichas0)[0].setAttribute("ondrop", "drop(event)");
        document.getElementById('tablero').getElementsByClassName(contadorFichas.numeroFichas0)[0].setAttribute("ondragover", "allowDrop(event)");
        document.getElementById('tablero').getElementsByClassName(contadorFichas.numeroFichas0)[0].style.backgroundColor = "lightgrey";
    }
    if ((num2Mesa == fichasOriginal[id].num1)||(num2Mesa == fichasOriginal[id].num2))    
    {
        document.getElementById('tablero').getElementsByClassName(contadorFichas.numeroFichas1)[0].setAttribute("ondrop", "drop(event)");
        document.getElementById('tablero').getElementsByClassName(contadorFichas.numeroFichas1)[0].setAttribute("ondragover", "allowDrop(event)");
        document.getElementById('tablero').getElementsByClassName(contadorFichas.numeroFichas1)[0].style.backgroundColor = "lightgrey";
    }
    
}

function drop(ev) {
    if (winned)
        return;
    var data = ev.dataTransfer.getData("text");
    
    var n = document.getElementById(data).getAttribute('data-n');
    for (var x = 0; x < fichasEnMano.length; x++)
    {
        if ((fichasEnMano[x].num1 == fichasOriginal[n].num1)&&(fichasEnMano[x].num2 == fichasOriginal[n].num2))
            fichasEnMano.splice(x, 1);
    }
    /* Se genera la copia */
    var copiaFicha = document.getElementById(data);
    var id = copiaFicha.getAttribute('data-n');

    if (document.getElementById('tablero').getElementsByClassName('ficha').length < 1)
    {
        document.getElementById('tablero').innerHTML = "";
        document.getElementById('tablero').ondrop = "";
        document.getElementById('tablero').ondragover = "";


        // Generar tablero
        generarTablero();
        num1Mesa = fichasOriginal[id].num1; 
        num2Mesa = fichasOriginal[id].num2;
        insertarFicha(copiaFicha, "primera", '');
    }
    else if (document.getElementById('tablero').getElementsByClassName('ficha').length >= 1) {
        document.getElementById('tablero').getElementsByClassName(contadorFichas.numeroFichas1)[0].style.backgroundColor = "white";
        document.getElementById('tablero').getElementsByClassName(contadorFichas.numeroFichas0)[0].style.backgroundColor = "white";
        // Comparar numeros mesa con ficha y actualizar el otro y poner en un lado o otro en función de eso.
        var rotation = "";
        if (num1Mesa == fichasOriginal[id].num1)
        {
            if ((contadorFichas.numeroFichas0 == 20)||(contadorFichas.numeroFichas0 == 10))
                rotation = "rotate(270deg)";
            else
                rotation = "rotate(180deg)";
        }
        else if (num1Mesa == fichasOriginal[id].num2)
        {
            if ((contadorFichas.numeroFichas0 == 20)||(contadorFichas.numeroFichas0 == 10))
                rotation = "rotate(90deg)";
        }
        else if (num2Mesa == fichasOriginal[id].num2)
        {
            if ((contadorFichas.numeroFichas1 == 30)||(contadorFichas.numeroFichas1 == 40))
                rotation = "rotate(90deg)";
            else
                rotation = "rotate(180deg)";
        }
        else if (num2Mesa == fichasOriginal[id].num1)
        {
            if ((contadorFichas.numeroFichas1 == 30)||(contadorFichas.numeroFichas1 == 40))
                    rotation = "rotate(270deg)";
        }
        
        insertarFicha(copiaFicha, ev.target.getAttribute("class"), rotation, undefined);
    }
    
    ev.preventDefault();
}

function insertarFicha (objeto, lado, rotacion, bot)
{
    objeto.style.transform = "";
    objeto.draggable = false;
    objeto.ondragstart = "";
    objeto.style.transform = rotacion;
    var drops = document.getElementById('tablero').querySelectorAll('[ondrop]');
    for (var drop of drops)
    {
        drop.setAttribute("ondrop", "");
        drop.setAttribute("ondragover", "");
    }
    setTimeout(function () {
        document.getElementById('tablero').getElementsByClassName(contadorFichas.numeroFichas0)[0].setAttribute("ondrop", "drop(event)");
        document.getElementById('tablero').getElementsByClassName(contadorFichas.numeroFichas0)[0].setAttribute("ondragover", "allowDrop(event)");
        document.getElementById('tablero').getElementsByClassName(contadorFichas.numeroFichas1)[0].setAttribute("ondrop", "drop(event)");
        document.getElementById('tablero').getElementsByClassName(contadorFichas.numeroFichas1)[0].setAttribute("ondragover", "allowDrop(event)");    
    }, 300);

    var id = objeto.getAttribute('data-n');
    if (lado == contadorFichas.numeroFichas0)
        lado = "izquierda";
    else if (lado == contadorFichas.numeroFichas1)
        lado = "derecha";
    
    contadorFichas.sumarFicha(fichasOriginal[id].num1);
    contadorFichas.sumarFicha(fichasOriginal[id].num2);

    if (lado == "derecha")
    {
        if (num2Mesa == fichasOriginal[id].num1)
            num2Mesa = fichasOriginal[id].num2;
        else if (num2Mesa == fichasOriginal[id].num2)
            num2Mesa = fichasOriginal[id].num1;

        document.getElementById('tablero').getElementsByClassName(contadorFichas.numeroFichas1)[0].appendChild(objeto);
        contadorFichas.sumar(1);
    }
    else if (lado == "izquierda")
    {
        if (num1Mesa == fichasOriginal[id].num1)
        {
            num1Mesa = fichasOriginal[id].num2;
        }
        else if (num1Mesa == fichasOriginal[id].num2)
        {
            num1Mesa = fichasOriginal[id].num1;
        }
            
        document.getElementById('tablero').getElementsByClassName(contadorFichas.numeroFichas0)[0].appendChild(objeto);
        contadorFichas.sumar(0);
    }
    else if (lado == "primera")
    {
        var centro = document.getElementById('tablero').getElementsByTagName('table')[0].getElementsByTagName('tr')[4].getElementsByTagName('td')[4];
        centro.appendChild(objeto);
    }
    if(comprobarVictoria() !== false) {
        if(comprobarVictoria() === true)
            alert('Empate');
        else
            alert("Ha ganado el " + comprobarVictoria());
        winned = true;
    }
    else if (bot == undefined)
        newBot.turno();
    
}

function comprobarVictoria () {
    var fichasJ = 0;
    for (var i = 0; i < document.getElementById('mano').childNodes.length; i++)
        if (document.getElementById('mano').childNodes[i].tagName != undefined)
            if (document.getElementById('mano').childNodes[i].getAttribute('class') == "ficha")
                fichasJ++;
    if (fichasJ == 0)
        return "jugador";
    if (newBot.mano.length == 0)
        return "bot";
    
    for (var ficha of contadorFichas.fichas)
        if (ficha == 8) 
        {
            var puntosJugador = 0;
            var puntosBot = 0;
            var fichasJugador = document.getElementById('mano').childNodes;
            fichasJugador.splice(0,1);
            for (var fichaJ of fichasJugador)
                if (fichaJ.getAttribute('class') == "ficha")
                    puntosJugador += fichaJ.valor;
            for (var fichaB of newBot.mano)
                puntosJugador += fichaB.valor;
            if (puntosBot > puntosJugador)
                return "bot";
            else if (puntosJugador > puntosBot)
                return "jugador";
            else
                return true;
        }
    return false;
}

function generarTablero () {
    var count = 49;
    var table = document.createElement('table');
    for (var i = 0; i<9; i++)
    {
        var tr = document.createElement('tr');
        for (var x = 0; x<9; x++)
        {
            var td = document.createElement('td');
            td.width = 88;
            td.height = 46;
            td.setAttribute("class", count);
            if (
                ((i == 1)&&(x!=0)) ||
                ((i == 3)&&(x!=8)) ||
                ((i == 5)&&(x!=0)) ||
                ((i == 7)&&(x!=8))
            )
            {
                 td.setAttribute("class", "");
                 td.height = 88;
            }
            else
                count--;
            if ((i == 1)||(i == 2)||(i == 5)||(i == 6)||(i == 7))
                td.style.transform = "rotate(180deg)";
            
            if ((i == 0)||(i == 4)||(i == 8))
                tr.insertBefore(td, tr.firstChild);
            else
            {
                tr.appendChild(td);
            }
                
            
        }
        table.appendChild(tr);
    }
    document.getElementById('tablero').appendChild(table);
}
// ######################### FIN DE FUNCIONES #####################################

