var Cron = new Object();
var wind = undefined;
var counted = undefined;
var date;


Cron.reiniciar = function () {
	clearInterval(Cron.timer);
	wind.document.body.innerHTML = "00:00:00";
	Cron.inicio = undefined;
	counted = undefined;
	Cron.empezar();
}

Cron.parar = function () {
	clearInterval(Cron.timer);
	counted = new Date(date.getTime());
}

Cron.empezar = function () {
	if (wind == undefined)
		wind = window.open("","Cronómetro", "width=600,height=250");
	else if (wind.document == undefined)
		wind = window.open("","Cronómetro", "width=600,height=250");
	Cron.inicio = new Date();
		
	Cron.timer = setInterval (Cron.contar, 1000);
}

Cron.contar = function () {
	if (wind.document == undefined){
		wind = undefined;
		return;
	}
	var now = new Date();
	if (counted == undefined)
	{
		date = new Date();
		date.setTime(now.getTime() - Cron.inicio.getTime());
	}
	else {
		date = new Date();
		date.setTime((now.getTime() - Cron.inicio.getTime()) + counted.getTime());
	}
	
	var hours = Cron.formatear(date.getHours() -1);
	var minutes = Cron.formatear(date.getMinutes());
	var seconds = Cron.formatear(date.getSeconds());
	wind.document.body.innerHTML = "<h1>" + hours + ":" + minutes + ":" + seconds + "</h1>";
}

Cron.formatear = function (numero) {
	if (numero < 10)
		return "0" + numero;
	else
		return numero;
}