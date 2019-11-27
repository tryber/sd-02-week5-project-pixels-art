let caixaVermelha = document.getElementById('red');

let color;

caixaVermelha.addEventListener('click', function(){
    color = caixaVermelha.id;
    console.log(color)
})



let principal = document.getElementById('quadrado-principal');

principal.addEventListener('click',function(event){
    event.target.style.backgroundColor = color 
})