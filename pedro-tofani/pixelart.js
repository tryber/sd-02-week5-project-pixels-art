
window.onload = function () {
}
let color = 'black'
let grid = document.getElementById('bordaMatriz');
for (let i = 0; i < 4; i++) {
    let ponteiroCor = document.getElementsByClassName('corSelecionada')[i];
    ponteiroCor.addEventListener('click', function () {
        for (let j = 0; j < 4; j++) {
            let zerarBorda = document.getElementsByClassName('corSelecionada')[j];
            zerarBorda.style.border = 'white solid';
        }
        ponteiroCor.style.border = 'red solid 3px';
        color = ponteiroCor.id;
    })
}
document.querySelector('#bordaMatriz').addEventListener('click', colorir);
document.getElementById('clear').addEventListener('click', clear);
document.getElementById('tamanho').addEventListener('change', clear);
document.getElementById('tamanho').addEventListener('change', mudarTamanho);
document.getElementById('gitHub').addEventListener('click', gitHub);


function colorir(event) {
    event.target.style.backgroundColor = color;
}
function clear() {
    let total = document.querySelectorAll('.colorivel').length
    for (let i = 0; i < total; i++) {
        document.getElementsByClassName('colorivel')[i].style.backgroundColor = 'white'
    }
}
function mudarTamanho() {
    let valorComprimento = this.value;
    grid.innerHTML = '';
    grid.style.width = valorComprimento * 40;
    grid.style.height = valorComprimento * 40;
    grid.style.gridTemplateColumns = '';
    grid.style.gridTemplateRows = '';
    for (let i = 0; i < valorComprimento; i++) {
        grid.style.gridTemplateColumns += ' 40px';
        grid.style.gridTemplateRows += ' 40px';
        for (let j = 0; j < valorComprimento; j++) {
            let quadradinho = document.createElement("div");
            quadradinho.className = 'colorivel';
            document.getElementById("bordaMatriz").appendChild(quadradinho);
        }
    }
}

function gitHub() {
    let total = document.querySelectorAll('.colorivel').length;
    for (let i = 0; i < total; i++) {
        document.getElementsByClassName('colorivel')[i].value = Math.floor(Math.random() * 10) + 1;
        if (document.getElementsByClassName('colorivel')[i].value%2 == 0) {document.getElementsByClassName('colorivel')[i].style.backgroundColor = 'white'}
        else {document.getElementsByClassName('colorivel')[i].style.backgroundColor = color}
    }
}