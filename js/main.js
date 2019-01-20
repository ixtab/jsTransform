window.onload = inicio;

var tamano = 346;

function inicio() {
    var myitem = document.querySelector("#cuervo");
    myitem.style.width = tamano + "px";
    myitem.style.height = tamano+ "px";
    var desenfoque = 0;
    if (myitem.addEventListener) {
        // IE9, Chrome, Safari, Opera
        myitem.addEventListener("mousewheel", MouseWheelHandler, false);
        // Firefox
        myitem.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
    }
    // IE 6/7/8
    
    function MouseWheelHandler(e) {

        var e = window.event || e; 
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
       
        tamano = tamano + delta * 10;
        desenfoque = desenfoque + delta * .1;

        myitem.style.webkitFilter = "invert(" + desenfoque * 20 + "%) blur(" + desenfoque + "px)";
        myitem.style.width = tamano + "px";
        myitem.style.height = tamano + "px";

        myitem.style.marginLeft = (posicionX  - tamano/2 - 8) + "px";
        myitem.style.marginTop = (posicionY - tamano/2 - 8)  + "px";
    

        return false;
    }
}

function position(event) {
    var myitem = document.querySelector("#cuervo");
    posicionX = event.clientX;
    posicionY = event.clientY;

    myitem.style.marginLeft = (posicionX  - tamano/2 - 8) + "px";
    myitem.style.marginTop = (posicionY - tamano/2 - 8)  + "px"; 
}

function pulsar() {
    var myitem = document.querySelector("#cuervo");
    myitem.classList.toggle("tiembla");
    myitem.classList.toggle("gira");
}
function noMeSigas() {
    var myitem = document.querySelector("#cuervo");
    myitem.style.marginLeft = "0px";
    myitem.style.marginTop = "0px"; 
}