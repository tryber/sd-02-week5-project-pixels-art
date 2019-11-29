let paletaCor = document.getElementsByClassName("quadradoPaleta");
let corSelecionada = paletaCor[0].style.backgroundColor;
for (let element of paletaCor) {
  element.addEventListener('click', cliquePaleta);
  let quadradosVazios = document.getElementsByClassName("quadradoLinha");
  for (let element of quadradosVazios) { 
    element.addEventListener('click', cliquePixel);
  }
}
function cliquePaleta () {
  corSelecionada = this.style.backgroundColor;
}
function cliquePixel () {
  this.style.backgroundColor = corSelecionada;
}