window.onload = function () {
  RandomColors ();
  document.getElementById('div_container').style.gridTemplateColumns = ' 40px 40px 40px 40px 40px';
  document.getElementById('div_container').style.gridTemplateRows = ' 40px 40px 40px 40px 40px';
  document.querySelector('h1').style.color = 'black';
  document.getElementsByClassName('div_color_pallet')[0].style.backgroundColor = 'black';  
  const div_color1 = document.querySelector('#black');
  div_color1.addEventListener("mouseup", mouseUp);
  const div_color2 = document.getElementById('green');
  div_color2.addEventListener("mouseup", mouseUp);
  const div_color3 = document.querySelector('#red');
  div_color3.addEventListener("mouseup", mouseUp);
  const div_color4 = document.getElementById('purple');
  div_color4.addEventListener("mouseup", mouseUp);
  document.querySelector('.grid_container').addEventListener("click", pixel);
  const button_reset =  document.getElementById('button_reset');
  button_reset.addEventListener('click', reset);
  const input_size_grid = document.getElementById('input_grid_size');
  input_size_grid.addEventListener('click', tamanhoGrid);
  const button_color =  document.getElementById('button_color');
  button_color.addEventListener('click', RandomColors);
  const button_random_pixels = document.getElementById('button_random_pixels');
  button_random_pixels.addEventListener('click', RandomColorPixels)
}

function tamanhoGrid() {
  const tamanhoGridFuturo = event.target.value; //tamanho do grid que o usuario quer
  let linhas = document.getElementById('div_container').style.gridTemplateRows; //linhas = gridTemplateRows do grid = string: ' 40px 40px...'
  const tamanhoGridPresente = (linhas.length + 1)/5; //Tamanho da string linhas(29) + 1 (para arredondar) /5 (pq o tamanho padrao é 5)
  let colunas = document.getElementById('div_container').style.gridTemplateColumns; //colunas = gridTemplateColums do grid = string: ' 40px 40px...'
  const PixelsNumberPresente = Math.pow(tamanhoGridPresente, 2); //tamanho do grid atual elevado a 2 para achar qtos pixels ele tem
  const PixelsNumberFuturo = Math.pow(tamanhoGridFuturo, 2); //tamanho do grid do usuario elevado a 2 para achar qtos pixels ele vai ter
  const PixelsQueSeraoAdd = PixelsNumberFuturo - PixelsNumberPresente; //subtracao do numero de pixels que o usuario quer pelos atuais para saber qtos serao adicionados
  const PixelsQueSeraoRemovidos = PixelsNumberPresente - PixelsNumberFuturo; //subtracao do numero de pixels atuais pelos que o usuario quer para saber qtos serao subtraidos
  if (tamanhoGridFuturo > tamanhoGridPresente) {   //if ira executar se tamanho do usuario for maior que tamanho atual 
    for (let i = 0; i < tamanhoGridFuturo - tamanhoGridPresente; i += 1 ) { //for executar de 0 até o tamanho do grid - 1 pq é  <
      //tamanho grid futuro - tamanho grid presente siginifica qtas linhas / colunas deverao ser acrescidas ao grid
      //as linhas 39 e 40 vao pegar o tamanho da coluna e da linha e adicionar 'i' templates de 40px de tamanho para cada um.
      document.getElementById('div_container').style.gridTemplateColumns = document.getElementById('div_container').style.gridTemplateColumns + ' 40px';
      document.getElementById('div_container').style.gridTemplateRows = document.getElementById('div_container').style.gridTemplateRows + ' 40px';
    }
    for (let i = 0; i < PixelsQueSeraoAdd; i += 1) { //for executar de 0 até numero de pixers que serão adicionados - 1 pq é  <
      //Cria o elemento div, atribui a classe pixels a ele e adiciona no elemento div_container(grid)
      const div = document.createElement('div');
      div.className = 'pixels';
      document.getElementById('div_container').appendChild(div);
    }
  } else if (tamanhoGridFuturo < tamanhoGridPresente) { //ira executar se o tamanho do usuario for menor que o tamanho atual
    const list = document.getElementById('div_container'); //atribui a list o valor de div_container(grid)
    for (let i = 1; i <= tamanhoGridPresente - tamanhoGridFuturo; i += 1) { //for executar de 1 até o tamanho do grid
      // tamanho grid presente - futuro siginifica qtas linhas/colunas serao subtraidas
      //a cada iteracao do for eu retiro do template de rows e columns 5 espacos ( 40px) e atribuo ao valor do grid
      linhas = linhas.slice(0, linhas.length - 5);
      colunas = colunas.slice(0, colunas.length - 5);          
      document.getElementById('div_container').style.gridTemplateRows = linhas;
      document.getElementById('div_container').style.gridTemplateColumns = colunas;
    }
    for (let i = PixelsQueSeraoRemovidos; i > 0; i -= 1) {
      //esse for sera feito para remover quantos pixels forem necessarios para adequar ao grid do usuario 
      list.removeChild(list.childNodes[list.childNodes.length - 1]);
    }
  }
}

function RandomColorPixels() {
  const targetColor = document.querySelector('h1').style.color;
  const tamanhoPixels = document.getElementsByClassName('pixels').length;
  for (i = 0; i < tamanhoPixels; i += 1) {
    const tamanhoRandom = Math.floor(Math.random() * tamanhoPixels);
    if ( tamanhoRandom < (tamanhoPixels / 3)) {
      document.getElementsByClassName('pixels')[i].style.backgroundColor = targetColor;
    }
  }
}

function RandomColors() {
  for (let i = 1; i < 4; i += 1) {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)]
    }    
    document.getElementsByClassName('div_color_pallet')[i].style.backgroundColor = color;
  }  
}

function pixel (event) {  
  let targetColor = document.querySelector('h1').style.color;
  event.target.style.backgroundColor = targetColor;
}

function mouseUp (event) {
  let targetColor = event.target.style.backgroundColor;
  document.querySelector('h1').style.color = targetColor;  
}

function reset () {
  const pixels = document.querySelectorAll('.pixels');
  const tamanho = pixels.length;
  for (let i = 0; i < tamanho; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}