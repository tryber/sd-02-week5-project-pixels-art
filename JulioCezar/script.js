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
}

function mouseUp (event) {
  let targetColor = event.target.id;
  document.querySelector('h1').style.color = targetColor;
  
}