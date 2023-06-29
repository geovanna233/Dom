var inputiNome = document.querySelector('#nome')
var inputiEmail = document.querySelector('#email')

var resultado = document.querySelector('#resultado')

var botao = document.querySelector("#button")

botao.addEventListener('click' , enviar)

function enviar() {
    //Resgatamos os valores que foi digitado no formulário
    var nome = inputiNome.value 
    var email = inputiEmail.value 
    resultado.innerHTML = `Seu nome é ${nome} <br> Seu email é ${email}`
}