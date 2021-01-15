"use strict"

function verde() {
    document.getElementById("semaf").src="verde.png";
}

function amarelo() {
    document.getElementById("semaf").src="amarelo.png";
}

function vermelho() {
    document.getElementById("semaf").src="vermelho.png";
}

function apag() {
    document.getElementById("semaf").src="apagado.png";
}

let mm = 0;
let ss = 0;

let tempo = 1000; // Quantos milésimos valem 1 segundo?
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
    clearInterval(cron)
    mm = 0;
    ss = 0;

    document.getElementById('counter').innerText ='00:00';
}


function timer() {
    ss++;

    if (ss == 60){
        ss = 0;
        mm++;
    }

    var format = mm + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss , 10 ? '0' + ss : ss);
    document.getElementById('counter').immerText = format;
}