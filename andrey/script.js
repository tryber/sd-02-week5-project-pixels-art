var template = document.querySelector(".grid1");
var random = document.querySelectorAll(".random");
var black = document.querySelector(".black");
var white = document.querySelector(".white");
var escolhido = document.querySelector(".escolhido");
var clearBtn = document.querySelector(".clear");
var input = document.querySelector('input[type=text]');
var inputBtn = document.querySelector('.inputBtn');
var identicons = document.querySelectorAll(".identicons img");

var paleta = [];

criarCores();

criarTemplate(5);

gerarIdentions();

paleta.push(white); paleta.push(black);

random.forEach(elem => {
  paleta.push(elem);
});

clearBtn.addEventListener("click", e => {
  template.querySelectorAll("div").forEach(elem => {
    elem.style.backgroundColor = "rgb(255,255,255)";
  })
});

paleta.forEach(elem => {
  elem.addEventListener("click", e => {
    escolhido.style.backgroundColor = e.target.style.backgroundColor;
  })
})


inputBtn.addEventListener("click", e => {
  if (input.value != NaN && input.value > 0) {
    deleteTemplate();
    criarTemplate(parseInt(input.value));
  }
})


function criarTemplate(N) {
  template.style.gridTemplateRows = `repeat(${N}, 40px)`;
  template.style.gridTemplateColumns = `repeat(${N}, 40px)`;

  for (var i = 0; i < N * N; i++) {
    var div = document.createElement("div");
    div.setAttribute("class", "white");
    template.appendChild(div);

    div.addEventListener("click", e => {
      e.target.style.backgroundColor = escolhido.style.backgroundColor;
    })
  }
}

function deleteTemplate() {
  template.querySelectorAll("div").forEach(elem => {
    elem.parentNode.removeChild(elem);
  });
}

function criarCores() {
  random.forEach(elem => {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor)
    elem.style.backgroundColor = bgColor;
  })

  white.style.backgroundColor = "rgb(255, 255, 255)";
  black.style.backgroundColor = "rgb(0, 0, 0)";
}


function gerarIdentions() {
  identicons.forEach(item => {
    item.addEventListener("click", e => {
      if (e.target.classList[0] == "identicon1") { gerarIdenticon([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0]); }
      if (e.target.classList[0] == "identicon2") { gerarIdenticon([0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1]); }
      if (e.target.classList[0] == "identicon3") { gerarIdenticon([1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1]); }
    })
  })
}

// console.log(0 ? "true" : "false")

function gerarIdenticon(array) {
  let index = 0;
  deleteTemplate();
  criarTemplate(5);

  template.querySelectorAll("div")
    .forEach(item => {
      array[index] ?
        item.style.backgroundColor = escolhido.style.backgroundColor :
        item.style.backgroundColor = "#f0f0f0";
      index++;
    })
}


// Nao funciona!
function clear() {
  console.log("coisa");
}


    // Crie um botão que para cada clique gera aleatoriamente um perfil no estilo do GitHub. 
    // A cor usada pra preencher os pixels deve ser a mesma já selecionada pelo usuário na paleta.

