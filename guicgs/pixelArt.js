const paletaCor = document.getElementsByClassName('quadradoPaleta');
let corSelecionada = paletaCor[0].style.backgroundColor;
function cliquePaleta() {
  corSelecionada = this.style.backgroundColor;
}
function cliquePixel() {
  this.style.backgroundColor = corSelecionada;
}
for (const element of paletaCor) {
  element.addEventListener('click', cliquePaleta);
  const quadradosVazios = document.getElementsByClassName('quadradoLinha');
  for (const element2 of quadradosVazios) {
    element2.addEventListener('click', cliquePixel);
  }
}
