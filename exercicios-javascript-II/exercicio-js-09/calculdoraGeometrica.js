let escolha = ''
do{
    escolha = menu()
    switch(escolha){
        case(1):
            areaTriangulo()
            alert('A área de um triângulo com valor base de ' + base + ' e o valor da altura de ' + altura + ' é igual a ' + resultado)
        break
        case(2):
            areaRetangulo()
            alert('A área de um retângulo com valor de base de ' + base + ' e o valor da altura de ' + altura + ' é igual a ' + resultado)
        break        
        case(3):
            areaQuadrado()
            alert('A área de um quadrado com o valor dos lados de ' + lado + ' é igual a ' + resultado)
        break
        case(4):
            areaTrapezio()
            alert('A área de um trapézio com o valor da base maior de ' + baseMaior + ' e o valor da base menor de '+ baseMenor + ' e a sua altura de '+ altura + ' é igual a ' + resultado)
        break
        case(5):
            areaCirculo()
            alert('A área de um círculo com o valor do raio de ' + raio + ' é igual a ' + resultado)
        break
        case(6):
            alert('Encerrando...')
        break
        default:
            alert('Opção Invalida!')
    }
}while(escolha !== 6)

function menu(){
    escolha = parseInt(prompt( 
        '- - - - - Menu de opções - - - - -\n'+
        'área do triângulo - 1\n'+
        'área do retângulo - 2\n'+
        'área do quadrado - 3\n' +
        'área do trapézio - 4\n' +
        'área do círculo - 5\n' +
        'Sair - 6\n'+
        'Qual opção o/a senhor(a) deseja?'
    ))
    return escolha
}

function areaTriangulo(){
    base = parseFloat(prompt('Informe o valor da base do triângulo'))
    altura = parseFloat(prompt('Informe o valor da altura do triângulo'))
    resultado = (base * altura) / 2
    return resultado
}

function areaRetangulo(){
    base = parseFloat(prompt('Informe o valor da base do retângulo'))
    altura = parseFloat(prompt('Informe o valor da altura do retângulo'))
    resultado = base * altura
    return resultado
}

function areaQuadrado(){
    lado = parseFloat(prompt('Informe o valor dos lados do quadrado'))
    resultado = lado * lado
    return resultado
}

function areaTrapezio(){
    baseMaior = parseFloat(prompt('Informe o valor da base maior do trapézio'))
    baseMenor = parseFloat(prompt('Informe o valor da base menor do trapézio'))
    altura = parseFloat(prompt('Informe o valor da altura do trapézio'))
    resultado = (baseMaior + baseMenor) * altura / 2
    return resultado

}

function areaCirculo(){
    const pi = 3.14
    raio = parseFloat(prompt('Informe o valor do raio do círculo'))
    resultado = pi * (raio * raio)
    return resultado
}


