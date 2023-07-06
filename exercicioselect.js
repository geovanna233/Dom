var sel = document.querySelector('select')
var tg = document.querySelector('p')

sel.addEventListener('click' , adicionar)

function adicionar () {
    var cores = sel.value

    if(cores == "rosa") {
        tg.style.color = 'deeppink'
    }
else if(cores == "roxo"){
    tg.style.color = 'darkorchid'
}

else if(cores == "azul"){
    tg.style.color = 'blue'
}

}