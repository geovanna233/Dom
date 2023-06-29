var div = document.querySelector('#area')

div.addEventListener('click' , clicar)
div.addEventListener('mousemover' , entrar)
div.addEventListener('mouseout' , sair)


function clicar() {
    div.innerHTML = 'Cliquei'
    div.style.background = 'blue'
}

function entrar(){
    div.innerHTML = 'Entrou'
    div.style.background = 'Green'
}

function sair(){
    div.innerHTML = 'Saiu'
    div.style.background = 'Pink'
}