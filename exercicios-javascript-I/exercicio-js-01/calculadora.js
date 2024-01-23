let n1 = prompt('Digite o primeiro valor: ')
let n2 = prompt('Digite o segundo valor: ')

let valor1 = parseFloat(n1)
let valor2 = parseFloat(n2)

let soma = valor1 + valor2
let subtrair = valor1 - valor2
let multiplicar =  valor1 * valor2
let dividir = valor1 / valor2

alert(
    'A soma entre '+ n1 + ' e ' + n2 + ' foi ' + soma +
    '\n A subtração entre '+ n1 + ' e ' + n2 + ' foi ' + subtrair +
    '\n A multiplicação entre '+ n1 + ' e ' + n2 + ' foi ' + multiplicar + 
    '\n A divisão entre '+ n1 + ' e ' + n2 + ' foi ' + dividir
)

console.log('A soma entre '+ n1 + ' e ' + n2 + ' foi ' + soma )
console.log('A subtração entre '+ n1 + ' e ' + n2 + ' foi ' + subtrair )
console.log('A multiplicação entre '+ n1 + ' e ' + n2 + ' foi ' + multiplicar )
console.log('A divisão entre '+ n1 + ' e ' + n2 + ' foi ' + dividir )