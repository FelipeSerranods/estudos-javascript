let nome = prompt('Qual o seu primeiro nome?: ')
let sobrenome = prompt('Qual o seu sobrenome?: ')
let campoDeEstudo = prompt('Qual o seu campo de estudo?: ')
let anoDeNascimento = prompt('Qual o seu ano de nascimento?: ')
const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear()
let idadeAtual = anoAtual - anoDeNascimento 

console.log('Bom dia recruta, suas informações estão abaixo: ')
console.log('Nome completo: '+ nome + " " +  sobrenome)
console.log('Campo de Estudo: '+ campoDeEstudo)
console.log('Idade: '+ idadeAtual)
console.log('-' * 30)


