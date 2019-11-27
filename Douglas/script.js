/*global document:true*/
/*global someFunction event:true*/
const escolha = document.getElementById('cor');
const localClicado = document.querySelector ('.colorir');
const array = document.querySelectorAll ('.quadrado');
const clear= document.getElementById ('clear');
let cor = 'black';
const criaDiv = document.createElement ('div');
const criaTd = document.createElement ('td');
const criaTr = document.createElement ('tr');
const up = document.getElementById ('up');
const down = document.getElementById ('down');
const contador = document.getElementById ('contador');
let valor = 5;
contador.innerText = valor;
up.addEventListener ('click' , function(){
  contador.innerText = (valor +1) ;
  valor += 1;
  adicionaQuadrado ();
})

function adicionaQuadrado(){
  console.log(contador.innerText)
  if ( contador.innerText > 50 ){
    alert ('Valor Invalido');
    contador.innerText = (valor-1);
    return valor -= 1;
  }
}

clear.addEventListener('click',function(){
  limpar();
})
localClicado.addEventListener ('mouseup', function () {
  event.target.style.backgroundColor=cor;
});
const selecionaCor = document.querySelector ('.escolhas');


selecionaCor.addEventListener ('mouseup', function () {
  cor = qualACor();
  escolha.style.backgroundColor=cor;
});

function qualACor () {
  switch (event.target.id){
    case 'preto':
      event.target.style.borderColor= 'green';
      return 'black';
    case 'azul':
      return 'blue'
    case 'amarelo':
      return 'yellow';
    case 'rosa':
      return 'pink';
    default:
      return 'black';
  }
}
function limpar(){
  for( let i = 0; array[i] != undefined; i++) {
    array[i].style.backgroundColor = 'white'
  }
}
