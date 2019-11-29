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

random.forEach(elem => {
  paleta.push(elem);
});

clearBtn.addEventListener('click', () => {
  template.querySelectorAll('div').forEach(elem => {
    elem.style.backgroundColor = 'rgb(255,255,255)';
  });
});


function criarTemplate(N) {
  template.style.gridTemplateRows = `repeat(${N}, 40px)`;
  template.style.gridTemplateColumns = `repeat(${N}, 40px)`;

  for (var i = 0; i < N * N; i++) {
    var div = document.createElement('div');
    div.setAttribute('class', 'white');
    template.appendChild(div);

    div.addEventListener('click', e => {
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
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';
    elem.style.backgroundColor = bgColor;
  })

  white.style.backgroundColor = 'rgb(255, 255, 255)';
  black.style.backgroundColor = 'rgb(0, 0, 0)';
}

function gerarIdentions() {
  identicons.forEach((item) => {
    item.addEventListener('click', (e) => {
      if (e.target.classList[0] == 'identicon1') {
        gerarIdenticon([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0]);
      }
      if (e.target.classList[0] == 'identicon2') {
        gerarIdenticon([0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1]);
      }
      if (e.target.classList[0] == 'identicon3') {
        gerarIdenticon([1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1]);
      }
    });
  });
}

function gerarIdenticon(array) {
  let index = 0;
  deleteTemplate();
  criarTemplate(5);


  template.querySelectorAll('div')
    .forEach(item => {
      array[index] ?
        item.style.backgroundColor = escolhido.style.backgroundColor :
        item.style.backgroundColor = '#f0f0f0';
      index++;
    });
}
paleta.forEach(elem => {
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
