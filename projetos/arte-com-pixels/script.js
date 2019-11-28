let caixaPreta = document.getElementById('black');
let caixaVermelha = document.getElementById('red');
let caixaAzul = document.getElementById('blue');
let caixaVerde = document.getElementById('green');
let color;

caixaPreta.addEventListener('click', function(){
    color = caixaPreta.id;
})

caixaVermelha.addEventListener('click', function(){
    color = caixaVermelha.id;
})

caixaAzul.addEventListener('click', function(){
    color = caixaAzul.id;
})

caixaVerde.addEventListener('click', function(){
    color = caixaVerde.id;
})

let quadradoPrincipal = document.getElementById('quadrado-principal');

quadradoPrincipal.addEventListener('click',function(event){
    if(color == undefined){
        event.target.style.backgroundColor = 'black'
    }else{
        event.target.style.backgroundColor = color 
    }
})