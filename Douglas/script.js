/*global document:true*/
/*global someFunction event:true*/
const escolha = document.getElementById('cor');
const localClicado = document.querySelector ('.colorir');
localClicado.addEventListener ('mouseup', function () {
  event.target.style.backgroundColor=cor;
});
const selecionaCor = document.querySelector ('.escolhas');
let cor = 'black';

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
