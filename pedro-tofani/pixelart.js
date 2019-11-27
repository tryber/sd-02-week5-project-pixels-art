
let color = 'black'
for (let i = 0window.onload = function () {
    ; i < 4; i++) {
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

}