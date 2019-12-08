let arrayPixels = document.getElementsByTagName("td");
let paletaBlack = document.getElementById("black");
let corSelecionada = "black";

paletaBlack.style.border = "3px dashed yellow";

for (let i = 0; i < 4; i++) {
  arrayPixels[i].addEventListener('click', function() {
    corSelecionada = this.className;

    for (let j = 0; j < 4; j++) {
      arrayPixels[j].style.border = "3px solid black";
    }

    this.style.border = "3px dashed yellow";
  });
}

for (let i = 4; i < arrayPixels.length; i++) {
  arrayPixels[i].addEventListener('click', function() {
    this.className = corSelecionada;
  });
}

let botaoLimparQuadro = document.getElementById("limpar-quadro");
let arrayPixelsQuadro = document.querySelectorAll("#quadro td");

botaoLimparQuadro.addEventListener('click', function() {
  for (let pixel of arrayPixelsQuadro) {
    pixel.className = "white";
  }
});

let table = document.getElementsByTagName("table")[1];
let botaoAlterarNumero = document.getElementById("alterar-numero");

botaoAlterarNumero.addEventListener('click', function() {
  let valor = document.getElementsByTagName("input")[0].value;
  if (valor >= 5 && valor <= 50) {
    table.innerHTML = "";
    let novaLinha = document.createElement("tr");
    novaLinha.innerHTML = "<td></td>"
    table.appendChild(novaLinha);

    for (let i = 1; i < valor; i++) {
      let linhasQuadroAtual = document.getElementsByTagName("tr");
      let linhaASerClonada = linhasQuadroAtual[1];
      let novaLinha = document.createElement("tr");
      
      novaLinha.innerHTML = linhaASerClonada.innerHTML;
      table.appendChild(novaLinha);

      for (let j = 1; j < linhasQuadroAtual.length; j++) {
        let novoElementoColuna = document.createElement("td");
        let linhaAtual = document.getElementsByTagName("tr")[j];
        console.log(linhaAtual);
        linhaAtual.appendChild(novoElementoColuna);
      }
    }
    let novoArrayPixels = document.getElementsByTagName("td");

    for (let i = 4; i < novoArrayPixels.length; i++) {
      novoArrayPixels[i].addEventListener('click', function() {
        this.className = corSelecionada;
      });
      botaoLimparQuadro.addEventListener('click', function() {
        novoArrayPixels[i].className = "white";
      });
    }
  } else {
    alert("Insira um valor entre 5 e 50 !");
  }
});