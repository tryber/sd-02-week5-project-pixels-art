/*global document:true*/
/*global someFunction event:true*/

const localClicado = document.querySelector ('.colorir');
localClicado.addEventListener ('mousedown', function () {
  console.log(event.target);
});
const selecionaCor = document.querySelector ('.escolhas');
let cor = 'black';
selecionaCor.addEventListener ('mousedown', function () {
  cor = qualACor();
});

function qualACor () {
  switch (event.target.id){
    case 'preto':
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
