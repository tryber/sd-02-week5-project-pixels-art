const containerPaleta = document.querySelector(".grid-paleta");
const selecionado = document.querySelector('.selecionado');
const containerCaixa = document.querySelector('.conjunto-pixels');
let corAtual = 'black';
const limpaTudo = document.querySelector('.borracha');
/* Escolhendo a cor */

function selecionaCor(event) {
  selecionado.className = 'paleta ' + event.target.classList[1];
  corAtual = event.target.classList[1];
}

function paletaLoop(itemPaleta) {
  itemPaleta.addEventListener("click", selecionaCor)
}

containerPaleta.querySelectorAll("div").forEach(paletaLoop);

/* Pintando as caixas */

function pintarCaixa(itemPixels) {
  itemPixels.addEventListener('click', function () {
    itemPixels.className = 'pixels ' + corAtual;
  })
}

containerCaixa.querySelectorAll('div').forEach(pintarCaixa);

/* Botão apaga tudo */

function limparCaixa(itemPixels) {
  itemPixels.className = 'pixels white';
  selecionado.className = 'paleta selecionado black'
  corAtual = 'black';
}
limpaTudo.addEventListener('click', function () {
  containerCaixa.querySelectorAll('div').forEach(limparCaixa);
})
