var inp = document.querySelector('input')
var but = document.querySelector('button')
var tgp = document.querySelector('p')

but.addEventListener('click' , adicionar)

function adicionar (){

var skip = inp.value

if(skip % 2 == 0){
    tgp.innerText = `NUMERO PAR ${skip}`
}

else{
    tgp.innerText = `NUMERO IMPAR ${skip}`
}

}