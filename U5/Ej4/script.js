function interact (e) { 
    if(e.shiftKey) { 
        console.log("X: "+e.clientX); 
        console.log("Y: "+e.clientY) 
    } 
};

document.querySelector('body').onmousemove = interact; 