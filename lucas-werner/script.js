let color = 'black';

//laço para interar a paleta
for (let i = 0; i < 4; i++) {
let corSelecionada = document.getElementsByClassName('tinta')[i];
    corSelecionada.addEventListener('click', function () {
        for (let j=0; j < 4; j++) { // laço interno para limpar todas as bordas
            let limparBordas = document.getElementsByClassName('tinta')[j];
            limparBordas.style.border = 'white solid';
        }
        corSelecionada.style.border = 'yellow solid 3px'; // colorir a que foi selecionada, após ter limpado
        color = corSelecionada.id;
    })
}

document.getElementById('grid').addEventListener('click', colorir);

function colorir(event) {
    event.target.style.backgroundColor = color };

//limpar

let clear = document.getElementById('clear');
    clear.addEventListener('click', function() {
        let nPixel = document.getElementsByClassName('pixel').length;
        for (let i = 0; i < nPixel; i++){
            let limpar = document.getElementsByClassName('pixel')[i];
            limpar.style.backgroundColor = 'white'}
        })

let resize = document.getElementById('resize');
resize.addEventListener('change', function() {
    if (resize.value < 5 || resize.value > 50) {
        alert('Insira um valor entre 5 e 50!');
        resize.value = " ";
    } else {    
        let tamanho = document.getElementById('resize').value
        let grid = document.getElementById('grid');
        grid.innerHTML = '';
        grid.style.gridTemplateColumns = '';
        grid.style.gridTemplateRows = '';
        grid.style.width = tamanho * 40 + 'px';
        grid.style.length = tamanho * 40 + 'px';
            for (let i = 0; i < tamanho; i++){ //number of rows and columns
                grid.style.gridTemplateColumns += ' 40px';
            grid.style.gridTemplateRows += ' 40px';
                for (let j = 0; j < tamanho; j++) {
                let pixel = document.createElement('div'); 
                pixel.className = 'pixel';
                document.getElementById('grid').appendChild(pixel)
                }    
            }
        }
    }
)
    
        
    