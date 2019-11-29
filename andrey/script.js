const template = document.querySelector('.grid1');
const random = document.querySelectorAll('.random');
const black = document.querySelector('.black');
const white = document.querySelector('.white');
const escolhido = document.querySelector('.escolhido');
const clearBtn = document.querySelector('.clear');
const input = document.querySelector('input[type=text]');
const inputBtn = document.querySelector('.inputBtn');
const identicons = document.querySelectorAll('.identicons img');

const paleta = [];

paleta.push(white);
paleta.push(black);

random.forEach((elem) => {
  paleta.push(elem);
});

clearBtn.addEventListener('click', () => {
  template.querySelectorAll('div').forEach((elem) => {
    elem.style.backgroundColor = 'rgb(255,255,255)';
  });
});


function criarTemplate(N) {
  template.style.gridTemplateRows = `repeat(${N}, 40px)`;
  template.style.gridTemplateColumns = `repeat(${N}, 40px)`;

  for (i=0; i<N*N ;i += 1) {
    var div = document.createElement('div');
    div.setAttribute('class', 'white');
    template.appendChild(div);

    div.addEventListener('click', (e) => {
      e.target.style.backgroundColor = escolhido.style.backgroundColor;
    });
  }
}

function deleteTemplate() {
  template.querySelectorAll('div').forEach((elem) => {
    elem.parentNode.removeChild(elem);
  });
}

function criarCores() {
  random.forEach((elem) => {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';
    elem.style.backgroundColor = bgColor;
  })

  white.style.backgroundColor = 'rgb(255, 255, 255)';
  black.style.backgroundColor = 'rgb(0, 0, 0)';
}

function gerarIdenticon(array) {
  let index = 0;
  deleteTemplate();
  criarTemplate(5);
}

function gerarIdentions() {
  let identicon1 = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0];
  let identicon2 = [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1];
  let identicon3 = [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1];

  identicons.forEach((item) => {
    item.addEventListener('click', (e) => {
      switch(e.target.classList[0]) {
        case 'identicon1':
          gerarIdenticon(identicon1);
          break;
        case 'identicon2':
          gerarIdenticon(identicon2);
          break;
        case 'identicon3':
          gerarIdenticon(identicon3);
          break;
        default:
          console.log("errou")
      }
    });
  });
}
function a(){
  item.style.backgroundColor = escolhido.style.backgroundColor
}

function b(){
  item.style.backgroundColor = '#f0f0f0'
}

template.querySelectorAll('div')
  .forEach((item) => {
    array[index] ? a() : b();
    index++;
  });

paleta.forEach((elem) => {
  elem.addEventListener('click', (e) => {
    escolhido.style.backgroundColor = e.target.style.backgroundColor;
  });
});


inputBtn.addEventListener('click', (e) => {
  if (input.value != NaN && input.value > 0) {
    deleteTemplate();
    criarTemplate(parseInt(input.value));
  }
});

criarCores();

criarTemplate(5);

gerarIdentions();
