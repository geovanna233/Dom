var number1 = document.querySelector('#inp')
var number2 = document.querySelector('#put')
var butto = document.querySelector('button')
var tgp = document.querySelector('p')

butto.addEventListener('click' , adicionar)

 function adicionar () {

    var n1 = Number(number1.value)
    var n2 = Number(number2.value)
    var num1e2 = n1 + n2 
    
    tgp.innerText = num1e2
 }
