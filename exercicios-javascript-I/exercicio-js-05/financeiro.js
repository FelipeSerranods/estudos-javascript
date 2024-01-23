let dinheiro = parseFloat(prompt('Qual a quantidade de dinheiro que você tem disponivel?'))
let escolha = ''

do{
    alert(
        '- - - - -Menu de opções - - - - -\n'+
        '1º Opçao - adicionar\n'+
        '2º Opçao - remover\n'+
        '3º Opçao - sair\n'
    )
    escolha = parseInt(prompt('Qual Opção você deseja escolher?'))
    switch(escolha){
        case(1):
            let adicionar = parseFloat(prompt('Qual a quantidade de dinheiro que você deseja adicionar ?'))
            dinheiro += adicionar
            alert('Dinheiro disponivel: R$' + dinheiro)
            break
        case(2):
            let remover = parseFloat(prompt('Qual a quantidade de dinheiro que você deseja retirar ?'))
            if (dinheiro >= remover){
                dinheiro = dinheiro - remover
            }else{
                alert('Você ira ficar negativo caso retire R$' + remover + 'da sua conta')
            }
            alert('Dinheiro disponivel: R$' + dinheiro)
            break
        case(3):
            alert('Operação encerrada...')
    }
}while(escolha !== 3)