document.querySelector('h1').style.fontSize = "24px"; 
document.querySelector('img').style.width = "200px";

document.querySelector('h1').onmousewheel = function (e) {
    if (e.wheelDelta > 0)
    {
        e.target.style.fontSize = parseInt(e.target.style.fontSize.slice(0, -2)) * 2 + "px";
    }
    else {
        e.target.style.fontSize = parseInt(e.target.style.fontSize.slice(0, -2)) / 2 + "px";
    }
}

document.querySelector('img').onmousewheel = function (e) {
    if (e.wheelDelta > 0)
    {
        e.target.style.width = parseInt(e.target.style.width.slice(0, -2)) * 2 + "px";
    }
    else {
        e.target.style.width = parseInt(e.target.style.width.slice(0, -2)) / 2 + "px";
    }
}