//Função para os Botoes de testes do semaforo

function verde() {
    document.getElementById("semaf").src="verde.png";
}

function amarelo() {
    document.getElementById("semaf").src="amarelo2.png";
}

function vermelho() {
    document.getElementById("semaf").src="vermelho.png";
}

function apag() {
    document.getElementById("semaf").src="apagado.png";
}

function pisca() {
    var intervalo = 0;
    var contador = 0;
    while (contador < 10) {
        intervalo += 500;
        setTimeout("document.getElementById('semaf').src='amarelo2.png';",intervalo);
        intervalo += 500;
        setTimeout("document.getElementById('semaf').src='apagado.png';",intervalo);
        contador++;
    }
}
