window.onload = function () {
  document.querySelector('h1').style.color = 'black';
  const colorsDivs = document.getElementsByClassName('div_color_pallet');
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
}

function pixel (event) {  
  let targetColor = document.querySelector('h1').style.color;
  event.target.style.backgroundColor = targetColor;
}

function mouseUp (event) {
  let targetColor = event.target.id;
  document.querySelector('h1').style.color = targetColor;  
}

function reset () {
  const pixels = document.querySelectorAll('.pixels');
  const tamanho = pixels.length;
  for (let i = 0; i < tamanho; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}