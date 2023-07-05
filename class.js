var botao = document.querySelector('button')
//Chamamos a tag button no HTML e guardamos na variavel
var h2 = document.querySelector('h2')
//Chamamos a tag h2 no HTML e guardamos a variavel

botao.addEventListener('click' , adicionar)
//Criamos um evento de click para esse botao

function adicionar() {
    if(h2.classList.contains('vermelho')){
    h2.classList.remove('vermelho')
    //Ao clicar no botão, vamos adicionaruma classe no h2 chamado "vermelho".
}

else{
    h2.classList.add('vermelho')
    //Se não existir vamos adicionar
}
}