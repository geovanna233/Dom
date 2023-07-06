var btt = document.querySelector('button')
var input1 = document.querySelector('#inp')
var input2 = document.querySelector('#put')
var tegp = document.querySelector('p')

btt.addEventListener('click' , adicionar)

function adicionar() {

    var n1 = input1.value
    var n2 = input2.value


if(n1 > n2){
    tegp.innerText = n1
}

else {
    tegp.innerText = n2
}

}