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
  const tamanhoGridFuturo = event.target.value;
  let linhas = document.getElementById('div_container').style.gridTemplateRows;
  const tamanhoGridPresente = (linhas.length + 1)/5;
  let colunas = document.getElementById('div_container').style.gridTemplateColumns;
  const PixelsNumberPresente = Math.pow(tamanhoGridPresente, 2);
  const PixelsNumberFuturo = Math.pow(tamanhoGridFuturo, 2);
  const PixelsQueSeraoAdd = PixelsNumberFuturo - PixelsNumberPresente;
  const PixelsQueSeraoRemovidos = PixelsNumberPresente - PixelsNumberFuturo;
  if (tamanhoGridFuturo > tamanhoGridPresente) {    
    for (let i = 0; i < tamanhoGridFuturo - tamanhoGridPresente; i += 1 ) {
      document.getElementById('div_container').style.gridTemplateColumns = document.getElementById('div_container').style.gridTemplateColumns + ' 40px';
      document.getElementById('div_container').style.gridTemplateRows = document.getElementById('div_container').style.gridTemplateRows + ' 40px';
    }
    for (let i = 0; i < PixelsQueSeraoAdd; i += 1) {
      const div = document.createElement('div');
      div.className = 'pixels';
      document.getElementById('div_container').appendChild(div);
    }
  } else if (tamanhoGridFuturo < tamanhoGridPresente) {
    const list = document.getElementById('div_container');
    for (let i = 1; i <= tamanhoGridPresente - tamanhoGridFuturo; i += 1) {
      linhas = linhas.slice(0, linhas.length - 5);
      colunas = colunas.slice(0, colunas.length - 5);          
      document.getElementById('div_container').style.gridTemplateRows = linhas;
      document.getElementById('div_container').style.gridTemplateColumns = colunas;
    }
    for (let i = PixelsQueSeraoRemovidos; i > 0; i -= 1) {
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