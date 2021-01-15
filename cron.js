// Funções do cronometro

"use strict"

var mm = 0;
var ss = 0;

var tempo = 15; // Quantos milésimos valem 1 segundo?
var cron;

//
function start() {
    cron = setInterval(() => { timer(); }, tempo);
}

//
function pause() {
    clearInterval(cron);
}

//
function stop() {
    clearInterval(cron);
    mm = 0;
    ss = 0;

    document.getElementById('counter').innerText ='00:00';
}


function timer() {
    ss++;

    if (ss == 60){
        ss = 0;
        mm++;

        if (mm == 28) {
            mm = 0;
            document.getElementById('counter').innerText ='00:00';
        }
    }

    var format =(mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    document.getElementById('counter').innerText = format;

    if (mm < 10){
        document.getElementById("semaf").src="verde.png";
    }
    if (mm == 10 && mm < 13){
        document.getElementById("semaf").src="amarelo.png";
    }
    if (mm == 13 && mm < 28){
        document.getElementById("semaf").src="vermelho.png";
    }
}