var specialChar = false;
var text = "";
onkeypress = function (e) {
    document.body.innerHTML = '';
    var key = document.createElement('p');
    if (text != "")
        key.innerHTML = text + " + " + String.fromCharCode(e.charCode);
    else
        key.innerHTML = String.fromCharCode(e.charCode);
    key.style.fontSize = "150px";
    document.body.appendChild(key);
}

onkeydown = function (e) {
    text = "";
    if (e.shiftKey)
        text+= "Shift";
    if (e.altKey)
        text+= "Alt"; 
    if (e.ctrlKey) 
        text+= "Control";
    if (e.metaKey)
        text+= "Win";
    if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey)
    {
        document.body.innerHTML = '';
        var key = document.createElement('p');
        key.innerHTML = text;
        key.style.fontSize = "150px";
        document.body.appendChild(key);
        specialChar = true;
    }
    else 
    {
        specialChar = false;
    }
    
}