const btn = document.querySelector('button')
let result = document.getElementsByClassName('result')
let texto = "Paulão,\nTenha um feliz aniversário cheio de sorrisos e gargalhadas,\nrepleto de paz, amor e muita alegria.\nParabéns por mais um ano de vida!🎁🎈🎁🎈"

btn.onclick = function(){
    aparecer()
}

function aparecer(){
    result = texto
    document.getElementsByClassName("result")[0].innerHTML = result
}