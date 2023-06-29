var div = document.querySelector('#area')
div.style.height = '100px'

function clicar() {
    div.innerHTML = 'Clicou'
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