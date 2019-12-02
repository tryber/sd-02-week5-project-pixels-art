let corSelecionada = "black";

let arrayPixels = document.getElementsByTagName('td');

for (let i = 0; i < 4; i++) {
  arrayPixels[i].addEventListener('click', function() {
    corSelecionada = this.className;
  })
}

for (let i = 4; i < arrayPixels.length; i++) {
  arrayPixels[i].addEventListener('click', function() {
    this.className = corSelecionada;
  })
}
