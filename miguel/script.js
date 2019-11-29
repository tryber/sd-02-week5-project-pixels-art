
        //let arrayPixels = document.getElementsByTagName('td');
      //  let i = 0;
    //    if (i < arrayPixels.length) {
  //          arrayPixels[i].addEventListener()
//
        // //}
        // for (let i = 0; i < 4; i++) {
        //     arrayPixels[i].addEventListener('click', function() {
        //         let corSelecionada = arrayPixels[i].className;
        //         console.log(corSelecionada);
                
        //     })
        // }
        // for (let j = 4; j < arrayPixels.length; j++) {
        //     arrayPixels[j].addEventListener('click', function(corSelecionada) {
        //         arrayPixels[j].classList.add(corSelecionada);
        //         console.log(corSelecionada);
        //     })
        // }
        let paleta = document.getElementById("paleta");
        let quadro = document.getElementById("quadro");
        let corSelecionada = "black";
        paleta.addEventListener('click', function() {
            corSelecionada = event.target.className;
            console.log(corSelecionada);
        })
        console.log(corSelecionada);
        quadro.addEventListener('click', function() {
            event.target.className = corSelecionada;
            console.log(corSelecionada);
        });
        console.log(corSelecionada);

        //Vários quadrados, parâmetros da função, ordem de execução
        
