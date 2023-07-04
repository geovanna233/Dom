var posicaoAtualDoElemento = 0; //Guarda a posição atual do elemento da página

document.addEventListener('keydown', carro) //Ultilizamos o document para ultilizar toda a parte do nosso site 

function carro (eventos){ //Esse evento significa que estamos acessando uma propriedade do DOM e estamos chamando o evento de pressionar a tecla

    var elementoDiv = document.querySelector('#Elemento')
    //Chama DIV do HTML

    if(eventos.code === 'ArrowUp'){ //Se clicarmos a setinha direita do teclado então -->

        posicaoAtualDoElemento = posicaoAtualDoElemento + 10 
        //Nossa posição atual vai receber 10px toda vez que precionar a tecla para a direita

        elementoDiv.style.left = posicaoAtualDoElemento + "px"
        //Aqui adicionamos os px no css quando interagimos

    }

}