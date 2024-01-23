let nomeCarro1 = prompt('Qual o nome do primeiro veiculo?: ')
let nomeCarro2 = prompt('Qual o nome do segundo veiculo?: ')

let velocidade1 = prompt('Qual a velocidade do primeiro veiculo: ')
let velocidade2 = prompt('Qual a velocidade do segundo veiculo: ')

if (velocidade1 > velocidade2){ 
    alert("O carro " + nomeCarro1 + " é o mais rapido sua velocidade máxima é de "+ velocidade1 +"Km/h")
} else if(velocidade2 > velocidade1 ){
    alert("O carro " + nomeCarro2 + " é o mais rapido sua velocidade máxima é de "+ velocidade2 + "Km/h")
}else{
    alert("Os dois veiculos apresentam a mesma velocidade!")
}