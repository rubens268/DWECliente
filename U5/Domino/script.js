/** Cosas para hacer:
 * 
 * Comprobar que empieza el que tenga doble 6
 * Reposicionar fichas en tablero
 * Comprobar victoria
 * Hacer BOT
 *  Para borrar la carta que pone el BOT
 * for (var x = 0; x < fichasEnMano.length; x++)
{
    if ((fichasEnMano[x].num1 == fichasOriginal[n].num1)&&(fichasEnMano[x].num2 == fichasOriginal[n].num2))
        fichasEnMano.splice(x, 1);
}
 */

function ficha (num1, num2, bg) {
    this.num1 = num1;
    this.num2 = num2;
    this.valor = num1 + num2;
    this.width = 88;
    this.height = 46;
    this.bg = bg;
} 

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

// DATOS MESA
var num1Mesa;
var num2Mesa;

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

function pedirFicha () {
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
    
}

function obtenerNuevaFicha () {
    console.log(fichas.length);
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
}

function drop(ev) {
    var data = ev.dataTransfer.getData("text");
    
    var n = document.getElementById(data).getAttribute('data-n');
    for (var x = 0; x < fichasEnMano.length; x++)
    {
        if ((fichasEnMano[x].num1 == fichasOriginal[n].num1)&&(fichasEnMano[x].num2 == fichasOriginal[n].num2))
            fichasEnMano.splice(x, 1);
    }

    if (document.getElementById('tablero').getElementsByClassName('ficha').length < 1)
    {
        console.log("Primera ficha");
        document.getElementById('tablero').innerHTML = "";
        /** Se genera la copia */
        var copiaFicha = document.getElementById(data);
        copiaFicha.style.transform = "";
        copiaFicha.draggable = false;
        copiaFicha.ondragstart = "";
        var n = copiaFicha.getAttribute('data-n');
        
        num1Mesa = fichasOriginal[n].num1; 
        num2Mesa = fichasOriginal[n].num2;
        document.getElementById('tablero').appendChild(copiaFicha);
    }
    else if (document.getElementById('tablero').getElementsByClassName('ficha').length >= 1) {
        /* Se genera la copia */
        var copiaFicha = document.getElementById(data);
        var id = copiaFicha.getAttribute('data-n');

        // Comparar numeros mesa con ficha y actualizar el otro y poner en un lado o otro en función de eso.
        if (num1Mesa == fichasOriginal[id].num1)
        {
            copiaFicha.style.transform = "";
            copiaFicha.draggable = false;
            copiaFicha.ondragstart = "";
            document.getElementById('tablero').insertBefore(copiaFicha, document.getElementById('tablero').firstChild);
            copiaFicha.style.transform = "rotate(180deg)";
            num1Mesa = fichasOriginal[id].num2;
            console.log("Mismo numero 1");
        }
        else if (num1Mesa == fichasOriginal[id].num2)
        {
            copiaFicha.style.transform = "";
            copiaFicha.draggable = false;
            copiaFicha.ondragstart = "";
            document.getElementById('tablero').insertBefore(copiaFicha, document.getElementById('tablero').firstChild);
            num1Mesa = fichasOriginal[id].num1;
            console.log("Mismo numero 1 - 2");
        }
            
        else if (num2Mesa == fichasOriginal[id].num1)
        {
            copiaFicha.style.transform = "";
            copiaFicha.draggable = false;
            copiaFicha.ondragstart = "";
            document.getElementById('tablero').appendChild(copiaFicha);
            num2Mesa = fichasOriginal[id].num2;
            console.log("Mismo numero 2 - 1");
        }
        else if (num2Mesa == fichasOriginal[id].num2)
        {
            copiaFicha.style.transform = "";
            copiaFicha.draggable = false;
            copiaFicha.ondragstart = "";
            document.getElementById('tablero').appendChild(copiaFicha);// fallo??
            copiaFicha.style.transform = "rotate(180deg)";
            num2Mesa = fichasOriginal[id].num1;
            console.log("Mismo numero 2");
        }
        if(comprobarVictoria())
            alert("Has ganado");
    }
    console.log ("Fichas Actuales: " + num1Mesa + ":" + num2Mesa);
    ev.preventDefault();
}

function comprobarVictoria () {
    if (fichasEnMano.length == 0)
            return true;
    if (fichas.length == 0)
    {
        var posibilidad = false;
        for (var ficha of  fichasEnMano)
            if ((ficha.num1 == num1Mesa)||(ficha.num2 == num2Mesa)||(ficha.num2 == num1Mesa)||(ficha.num1 == num2Mesa))
                if (ficha.num1 != ficha.num2) 
                    posibilidad = true;
        
        if (fichas.length > 0)
            for (var ficha of  fichas)
                if ((ficha.num1 == num1Mesa)||(ficha.num2 == num2Mesa)||(ficha.num2 == num1Mesa)||(ficha.num1 == num2Mesa))
                    if (ficha.num1 != ficha.num2) 
                        posibilidad = true;

        return !posibilidad;
        
    }
    else
        return false;
    
}