async function CalculoImc(peso, altura) {
    console.log('Realizando calculo do IMC...')
    console.log(`Peso: ${peso}Kg`)
    console.log(`Altura: ${altura}m\n`)
    let res = ''

    if (typeof peso === 'number' && typeof altura === 'number') {
        imc = peso / (altura * altura)
        if (imc < 18.5) {
            res = 'Magreza'
        } else if (imc < 25) {
            res = 'Normal'
        } else if (imc < 30) {
            res = 'Sobrepeso'
        } else if (imc < 35) {
            res = 'Obesidade grau I'
        } else if (imc < 40) {
            res = 'Obesidade grau II'
        } else {
            res = 'Obesidade grau III'
        }
        return res
    } else {
        throw new Error('Os parametros da função devem ser númericos\n');
    }
}

async function exibirImc(peso, altura) {
    try{
        const resultado = await CalculoImc(peso, altura)
        console.log(`Após o calculo seu IMC é ${imc.toFixed(2)} e se encaixa na categoria ${resultado}\n`)
        console.log("Tabela IMC")
        console.log("Menor que 18,5\tMagreza");
        console.log("18,5 a 24,9\tNormal");
        console.log("25 a 29,9\tSobrepeso");
        console.log("30 a 34,9\tObesidade grau I");
        console.log("35 a 39,9\tObesidade grau II");
        console.log("Maior que 40\tObesidade grau III\n");
    }catch(error){
        console.log(`[ERRO] ${error.message}`)
    }
}

exibirImc(56, 1.65)
exibirImc('56', 1.65)
exibirImc(56, 1.65)