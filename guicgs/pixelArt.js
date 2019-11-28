let paletaCor = document.getElementsByClassName("quadradoPaleta");
let corSelecionada = paletaCor[0].style.backgroundColor;
for (let element of paletaCor) {
  element.addEventListener('click', function () {
    corSelecionada = element.style.backgroundColor;
  });
  let quadradosVazios = document.getElementsByClassName("quadradoLinha");
  for (let element of quadradosVazios) { 
    element.addEventListener('click', function () {
    element.style.backgroundColor = corSelecionada;
    });
  };
};
