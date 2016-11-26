function interact (e) { e.target.innerHTML = "Has interactuado conmigo"; }

document.querySelector('p').onclick = interact;
document.querySelector('div').ondblclick = interact;
document.querySelector('h1').onmouseenter = interact;
document.querySelector('h2').onmousewheel = interact;
document.querySelector('h3').oncopy = interact;