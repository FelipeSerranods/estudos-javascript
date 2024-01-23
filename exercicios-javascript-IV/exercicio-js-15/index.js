const dayjs = require("dayjs");

function aniversario(data){
    const aniversario = dayjs(data)
    const dataAtual = dayjs()

    const idade = dataAtual.diff(aniversario, 'year')
    const proximoAniversario = aniversario.add(idade + 1, 'year')
    
    // Pega a diferença até o proximo aniversario em dias, +1 para ajustar a contagem de dias e o programa não a redondar para caso falte menos de 1 dia para o aniversario
    const proximoAniversarioDias = proximoAniversario.diff(dataAtual, 'day') + 1

    console.log(`Idade: ${idade}`)
    console.log(`Seu proximo aniversario será em ${proximoAniversario.format('DD/MM/YYYY')}`)
    console.log(`Dias até completar seu aniversário: ${proximoAniversarioDias}`)
}

aniversario('2003-07-24')