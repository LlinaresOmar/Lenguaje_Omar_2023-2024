
var numDadosJ1 = parseInt(document.getElementById("selecionJugador1").value);
var numDadosJ2 = parseInt(document.getElementById("selecionJugador2").value);
let Dados1 = {};
let Dados2 = {};
let ronda = 3;
let sumaPuntos1;
let sumaPuntos2;
let contadorV1 = document.getElementById("PuntosVictoriaNumJ1");
let contadorV2 = document.getElementById("PuntosVictoriaNumJ2");
let DadosDisponiblesJ1 = parseInt(document.getElementById("DadosDisponiblesJ1"));
let DadosDisponiblesJ2 = parseInt(document.getElementById("DadosDisponiblesJ2"));


function elegirDado1(){

    numDadosJ1 = parseInt(document.getElementById("selecionJugador1").value);
    if(numDadosJ1-ronda < DadosDisponiblesJ1){
        alert("Numero de dados de J1 demasiado alto para la tirada");
    }
}

function elegirDado2(){
    
    numDadosJ2 = parseInt(document.getElementById("selecionJugador2").value);
    if(numDadosJ2-ronda < parseInt(document.getElementById("DadosDisponiblesJ2").value)){
        alert("Numero de dados de J2 demasiado alto para la tirada");
    }
}

console.log(numDadosJ1);
console.log(numDadosJ2);


function lanzarDados(){

    for (let index = 0; index < numDadosJ1; index++) {
        Dados1[index] = parseInt(Math.random()*6);
        sumaPuntos1 += numDadosJ1[index];
    }

    for (let index = 0; index < numDadosJ1; index++) {
        Dados2[index] = parseInt(Math.random()*6);
        sumaPuntos2 += numDadosJ2[index];
    }

    if(sumaPuntos1 > sumaPuntos2){
        contadorV1.textContent = (parseInt(contadorV1.value) +1)
    } else if (sumaPuntos2 > sumaPuntos1){
        contadorV2.textContent = (parseInt(contadorV2.value) +1)
    }

    DadosDisponiblesJ1.textContent = DadosDisponiblesJ1.value-numDadosJ1;
    DadosDisponiblesJ2.textContent = DadosDisponiblesJ2.value-numDadosJ2;

    ronda--;

}

