let corAtual = 'black'

const paletaCor = document.querySelectorAll('.paletaCor') 
const paletaAtual = document.querySelector('.paletaCorAtual')
const telaCor = document.querySelectorAll('.telaCor')
const paletaApagaAtual = document.querySelector('.paletaApagaAtual')

const trocarCor = (elemento, cor) => {
  elemento.style.backgroundColor = cor
}

const trocarCorArray = (array, cor) => {
  array.forEach(elemento => {
    trocarCor(elemento, cor)
  })
} 

paletaCor.forEach(elemento => {
  elemento.onclick = () => {
    corAtual = getComputedStyle(elemento).getPropertyValue('background-color')
    trocarCor(paletaAtual, corAtual)
  } 
})

telaCor.forEach(elemento => {
  elemento.onclick = () => {
    trocarCor(elemento, corAtual)
  }
})

paletaApagaAtual.onclick = () => {
  trocarCor(paletaAtual, 'black')
  trocarCorArray(telaCor, 'white')
}
