let redB = document.getElementById("stopButton");
let redL = document.getElementById("stopLight");
let yellowB = document.getElementById("readyButton");
let yellowL = document.getElementById("readyLight");
let greenB = document.getElementById("goButton");
let greenL = document.getElementById("goLight");

function stop() {
    redB.style.backgroundColor = "#cf1124";
    redL.style.backgroundColor = "#cf1124";
    yellowB.style.backgroundColor = "#1f1d41";
    yellowL.style.backgroundColor = "#4b5069";
    greenB.style.backgroundColor = "#1f1d41";
    greenL.style.backgroundColor = "#4b5069";
}



function ready() {
    redB.style.backgroundColor = "#1f1d41";
    redL.style.backgroundColor = "#4b5069";
    yellowB.style.backgroundColor = "#f7c948";
    yellowL.style.backgroundColor = "#f7c948";
    greenB.style.backgroundColor = "#1f1d41";
    greenL.style.backgroundColor = "#4b5069";
}



function go() {
    redB.style.backgroundColor = "#1f1d41";
    redL.style.backgroundColor = "#4b5069";
    yellowB.style.backgroundColor = "#1f1d41";
    yellowL.style.backgroundColor = "#4b5069";
    greenB.style.backgroundColor = "#199473";
    greenL.style.backgroundColor = "#199473";
}