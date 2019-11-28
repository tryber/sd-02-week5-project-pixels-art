let color = 'black'

//laço para interar a paleta
for (let i = 0; i < 4; i++) {
let corSelecionada = document.getElementsByClassName('tinta')[i];
    corSelecionada.addEventListener('click', function () {
        for (let j=0; j < 4; j++) { // laço interno para limpar todas as bordas
            let limparBordas = document.getElementsByClassName('tinta')[j];
            limparBordas.style.border = 'white solid';
        }
        corSelecionada.style.border = 'red solid 3px'; // colorir a que foi selecionada
        color = corSelecionada.id;
    })
}

document.getElementById('grid').addEventListener('click', colorir);

function colorir(event) {
    event.target.style.backgroundColor = color }
