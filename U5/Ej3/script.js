function interact (e) { e.target.style.color = "red"; }

document.querySelector('p').ondblclick = interact;
document.querySelector('a').ondblclick = interact;
document.querySelector('h1').ondblclick = interact;
document.querySelector('h2').ondblclick = interact;
document.querySelector('h3').ondblclick = interact;