window.onload = function () {
  let colorsDivs = document.getElementsByClassName('div_color_pallet');
  let div_color1 = document.querySelector('#black');
  div_color1.addEventListener("mouseup", mouseUp);
  let div_color2 = document.getElementById('green');
  div_color2.addEventListener("mouseup", mouseUp);
  let div_color3 = document.querySelector('#red');
  div_color3.addEventListener("mouseup", mouseUp);
  let div_color4 = document.getElementById('purple');
  div_color4.addEventListener("mouseup", mouseUp);
  document.querySelector('.grid_container').addEventListener("click", pixel);
}

function pixel (event) {  
  let targetColor = document.querySelector('h1').style.color;
  event.target.style.backgroundColor = targetColor;
}

function mouseUp (event) {
  let targetColor = event.target.id;
  document.querySelector('h1').style.color = targetColor;  
}