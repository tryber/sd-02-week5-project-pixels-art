const template = document.querySelector('.grid1');
const random = document.querySelectorAll('.random');
const black = document.querySelector('.black');
const escolhido = document.querySelector('.escolhido');
const clearBtn = document.querySelector('.clear');
const input = document.querySelector('input[type=text]');
const inputBtn = document.querySelector('.inputBtn');
const identicons = document.querySelectorAll('.identicons img');

const paleta = [];

paleta.push(black);

random.forEach((elem) => {
  paleta.push(elem);
});

clearBtn.addEventListener('click', () => {
  template.querySelectorAll('div').forEach((elem) => {
    let elemento = elem;
    elemento.style.backgroundColor = 'rgb(255,255,255)';
  });
});

escolhido.style.backgroundColor = 'black';


function criarTemplate(N) {
  template.style.gridTemplateRows = `repeat(${N}, 40px)`;
  template.style.gridTemplateColumns = `repeat(${N}, 40px)`;

  for (let i = 0; i < N * N; i += 1) {
    const div = document.createElement('div');
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
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const bgColor = `rgb(${x},${y},${z})`;
    elem.style.backgroundColor = bgColor;
  });

  black.style.backgroundColor = 'rgb(0, 0, 0)';
}

function a(item) {
  item.style.backgroundColor = escolhido.style.backgroundColor;
}

function b(item) {
  item.style.backgroundColor = '#f0f0f0';
}

function gerarIdenticon(array) {
  let index = 0;

  deleteTemplate();
  criarTemplate(5);

  template.querySelectorAll('div')
  .forEach((item) => {
    array[index] ? a(item) : b(item);
    index += 1;
  });
}


function gerarIdentions() {
  const identicon1 = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0];
  const identicon2 = [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1];
  const identicon3 = [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1];

  identicons.forEach((item) => {
    item.addEventListener('click', (e) => {
      switch (e.target.classList[0]) {
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
          console.log('errou');
      }
    });
  });
}

paleta.forEach((elem) => {
  elem.addEventListener('click', (e) => {
    escolhido.style.backgroundColor = e.target.style.backgroundColor;
  });
});


inputBtn.addEventListener('click', () => {
  if (!isNaN(input.value) && input.value > 0) {
    deleteTemplate();
    criarTemplate(parseInt(input.value, 10));
  }
});

criarCores();

criarTemplate(5);

gerarIdentions();
