
window.onload = function () {
}
let color = 'black'
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

function colorir(event) {
    event.target.style.backgroundColor = color;
}
function clear() {
    for (let i = 0; i < 25; i++) {
        document.getElementsByClassName('colorivel')[i].style.backgroundColor = 'white'
    }
}