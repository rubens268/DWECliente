onkeydown = function (e) {
    document.body.innerHTML = '';
    var key = document.createElement('p');
    key.innerHTML = e.keyCode;
    key.style.fontSize = "150px";
    document.body.appendChild(key);
}