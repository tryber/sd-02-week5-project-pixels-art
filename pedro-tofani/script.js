
window.onload = function () {
    let arranjoCores1 = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
    let arranjoCores2 = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
    let arranjoCores3 = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
    let corRandom1 = 'rgb(' + arranjoCores1[0] + ', ' + arranjoCores1[1] + ', ' + arranjoCores1[2] + ')';
    let corRandom2 = 'rgb(' + arranjoCores2[0] + ', ' + arranjoCores2[1] + ', ' + arranjoCores2[2] + ')';
    let corRandom3 = 'rgb(' + arranjoCores3[0] + ', ' + arranjoCores3[1] + ', ' + arranjoCores3[2] + ')';
    document.getElementById('black').value = 'black';
    let ponteiroCorRandom1 = document.getElementById('cor1');
    ponteiroCorRandom1.value = corRandom1;
    ponteiroCorRandom1.style.backgroundColor = corRandom1;
    let ponteiroCorRandom2 = document.getElementById('cor2');
    ponteiroCorRandom2.value = corRandom2;
    ponteiroCorRandom2.style.backgroundColor = corRandom2;
    let ponteiroCorRandom3 = document.getElementById('cor3')
    ponteiroCorRandom3.value = corRandom3;
    ponteiroCorRandom3.style.backgroundColor = corRandom3;

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
        color = ponteiroCor.value;
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
    let totalQuadrados = document.querySelectorAll('.colorivel').length;
    let totalLinha = Math.sqrt(totalQuadrados);

    for (let j = 0; j < totalLinha; j++) {
        for (let i = 0; i < totalLinha / 2; i++) {
            document.getElementsByClassName('colorivel')[i + totalLinha * j].value = Math.floor(Math.random() * 10) + 1;
            if (document.getElementsByClassName('colorivel')[i + totalLinha * j].value % 2 == 0) {
                document.getElementsByClassName('colorivel')[i + totalLinha * j].style.backgroundColor = 'white'
                document.getElementsByClassName('colorivel')[(totalLinha * (j + 1) - 1) - i].style.backgroundColor = 'white'
            }
            else {
                document.getElementsByClassName('colorivel')[i + totalLinha * j].style.backgroundColor = color;
                document.getElementsByClassName('colorivel')[(totalLinha * (j + 1) - 1) - i].style.backgroundColor = color;
            }
        }
    }
}