var nome = document.querySelector('#nome')

var p = document.querySelector('#resultado')

nome.addEventListener('change' , evento)

function evento(){
    p.innerHTML = nome.value 
    //pegamos o valor do formulario e colocamos no p

nome.value = "" 
//após isso, também podemos chamar o valor do formulário e deixar como vázio, para limpar o campo após anotar o resultado.
}
