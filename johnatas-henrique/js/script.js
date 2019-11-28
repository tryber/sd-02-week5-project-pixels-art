const containerPaleta = document.querySelector(".grid-paleta");
const selecionado = document.querySelector('.selecionado');
const containerCaixa = document.querySelector('.conjunto-pixels');
let corAtual = 'black';

/* Escolhendo a cor */

function selecionaCor(event){
    selecionado.className = 'paleta ' + event.target.classList[1];
    corAtual = event.target.classList[1]; 
} 

function paletaLoop(item) {
    item.addEventListener("click", selecionaCor)
}

containerPaleta.querySelectorAll("div").forEach(paletaLoop);

/* Pintando as caixas */

function pintarCaixa(itempintar){
    itempintar.addEventListener('click', function(){
        itempintar.className = 'pixels '+corAtual;
    })
}

containerCaixa.querySelectorAll('div').forEach(pintarCaixa);
