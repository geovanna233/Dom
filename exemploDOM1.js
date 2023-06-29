// Chamamos as tags que estão no HTML e guardamos em uma varíavel
var h1 = document.querySelector('h1')
var p = document.querySelector('p')

// Pegamos o texto que tem dentro da tag do h1 e guardamos na varíavel
var textoDoH1 = h1.innerText

// Inserimos o texto do H1 na tag "P"
p.innerText = textoDoH1