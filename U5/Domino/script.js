function ficha (num1, num2, bg)
{
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

// DATOS MESA
var num1Mesa;
var num2Mesa;

function waitDOM (){
    for (var ficha of generateHand())
    {
        var fichaHTML = document.createElement('div');
        fichaHTML.style.height = ficha.height + "px";
        fichaHTML.style.width = ficha.width + "px";
        fichaHTML.style.background = ficha.bg;
        fichaHTML.style.display = "inline-block";
        fichaHTML.style.transform = "rotate(90deg)";
        fichaHTML.id = ficha.num1 + "" + ficha.num2;
        fichaHTML.setAttribute('class', 'ficha');
        fichaHTML.setAttribute('data-n', ficha.nFicha);
        fichaHTML.draggable = true;
        fichaHTML.ondragstart =  drag;
        document.getElementById('mano').appendChild(fichaHTML);
    }
    
}

function generateHand ()
{
    var mano = new Array();
    for (var i = 0; i<7; i++)
    {
        var nFicha = Math.floor(Math.random()*fichas.length);
        fichas[nFicha].nFicha = nFicha;
        mano.push(fichas[nFicha]);
        fichas.splice(nFicha, 1);
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
    var copiaFicha = document.getElementById(data);
    copiaFicha.style.transform = "";
    copiaFicha.draggable = false;
    copiaFicha.ondragstart = "";
    ev.target.appendChild(copiaFicha);
    ev.preventDefault();
    if (document.getElementById('tablero').getElementsByClassName('ficha').length == 1)
    {
        var n = document.getElementById('tablero').getElementsByClassName('ficha')[0].getAttribute('data-n');
        num1Mesa = fichas[n].num1; 
        num2Mesa = fichas[n].num2;
    }
    else if (document.getElementById('tablero').getElementsByClassName('ficha').length > 1) {
        var fichasEnTablero = document.getElementById('tablero').getElementsByClassName('ficha');
        // Comparar numeros mesa con ficha y actualizar el otro y poner en un lado o otro en función de eso.
    }
}