let valorConvertido = 0
let valorMetros = parseFloat(prompt('Informe o valor em metros para converte-lo a outras medidas...'))
let escolha = parseInt(prompt("1 - milímetro (mm) \n2 - centímetro (cm)\n3 - decímetro (dm) \n4 - decâmetro (dam)\n5 - hectômetro (hm)\n6 - quilômetro (km) "))

switch(escolha){
    case(1):
    valorConvertido = valorMetros * 1000
    alert("O valor " + valorMetros + "m em milímetro é " + valorConvertido + "mm")
    break
    case(2):
    valorConvertido = valorMetros * 100
    alert("O valor " + valorMetros + "m em centímetro é " + valorConvertido + "cm")
    break
    case(3):
    valorConvertido = valorMetros * 10
    alert("O valor " + valorMetros + "m em decímetro é " + valorConvertido + "dm")
    break
    case(4):
    valorConvertido = valorMetros / 10
    alert("O valor " + valorMetros + "m em decâmetro é " + valorConvertido+ "dam")
    break
    case(5):
    valorConvertido = valorMetros / 100
    alert("O valor " + valorMetros + "m em hectômetro é " + valorConvertido+ "hm")
    break
    case(6):
    valorConvertido = valorMetros / 1000
    alert("O valor " + valorMetros + "m em quilômetro é " + valorConvertido+ "km")
    break
    default:
        alert("Opção inválida!")
        break
}


