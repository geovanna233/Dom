var btn = document.querySelector('button')
var h2 = document.querySelector('h2')
btn.addEventListener('click' , alterar)

function alterar(){
    h2.classList.replace('rosa' , 'roxo')
}