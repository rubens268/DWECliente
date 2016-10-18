var wind;
function readData () {
	var datos = formulario.palabras.value;
	var datos = datos.trim().split(" ");
	wind = window.open("","Manipular arrays", "width=600,height=250");
	wind.document.write('<meta charset="utf-8">');
	firstWord(datos);
	lastWord(datos);
	countWords(datos);
	biggestWord(datos);
	shortestWord(datos);
	alphabeticalWords(datos)
}

function firstWord (words) {
	wind.document.write("<p><b>Primera palabra: </b>" + words[0] + "</p>");
}

function lastWord (words) {
	wind.document.write("<p><b>Última palabra: </b>" + words[words.length -1] + "</p>");
}

function countWords (words) {
	wind.document.write("<p><b>Número palabras: </b>" + words.length + "</p>");
}

function biggestWord (words) {
	var word;
	var total = "";
	for (var w in words)
	{
		if (word == undefined) 
			word = words[w];
		if (words[w].length == word.length)
			if (total != "")
				total += ", " + words[w];
			else
				total += words[w];
		if (words[w].length > word.length){
			word = words[w];
			total = words[w];
		}
	}
	wind.document.write("<p><b>Mayor palabra: </b>" + total + "</p>");	
}

function shortestWord (words) {
	var word;
	var total = "";
	for (var w in words)
	{
		if (word == undefined) 
			word = words[w];
		if (words[w].length == word.length)
			total += ", " + words[w];
		if (words[w].length < word.length){
			word = words[w];
			total = words[w];
		}
	}
	wind.document.write("<p><b>Menor palabra: </b>" + total + "</p>");	
}

function alphabeticalWords(words) {
	words.sort();
	var word = "";
	for (var w in words)
		if (w == 0)
			word = words[w];
		else
			word += " - " + words[w];
	wind.document.write("<p><b>Ordenadas alfabéticamente: </b>" + word + "</p>");	
}	