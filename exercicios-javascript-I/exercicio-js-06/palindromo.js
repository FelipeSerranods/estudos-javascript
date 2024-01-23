const palavra = prompt('Informe uma palavra para verificar se ela é um palindromo')
let palavraInvertida = ''
for(i = palavra.length - 1; i >= 0 ; i--){
    palavraInvertida += palavra[i]
}

if(palavraInvertida === palavra){
    alert('A palavra: ' + palavra + 'é um palindromo')
}else{
    alert('A palavra: ' + palavra + 'não é um palindromo')
}