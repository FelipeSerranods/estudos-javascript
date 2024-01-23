let numero = parseInt(prompt('Digite um número:'))
let tabuada = ''
for(i = 1; i <= 20 ; i++ ){
    tabuada += numero + ' x ' + i + ' = ' + (numero * i) + '\n'
}

alert('Tabuada de: ' + numero + '\n' + tabuada)