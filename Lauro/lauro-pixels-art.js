document.querySelector('body').onload = corInicial();
  document.querySelector('#current-color').onload = apontaCorInicial(); 
   
  function corInicial(){
    corPincel = 'black'
  };

  function guardaCor(cor){
    corPincel = cor;
    document.querySelector('#current-color').style.backgroundColor = cor;
  }

  function trocaCor(quadradinho){
    quadradinho.style.backgroundColor = corPincel;
  }

  function apontaCorInicial(){
    document.querySelector('#current-color').style.backgroundColor = 'black';
  }
 
  botaoReset = document.querySelector("#reset", [0])
  botaoReset.addEventListener ('click', function(){
    tabela = document.querySelectorAll('td');
    tabelaInteira = document.querySelectorAll('td').length;
    for (i=0; i < tabelaInteira;i++){
      tabela[i].style.backgroundColor = null;
    }
  })
  