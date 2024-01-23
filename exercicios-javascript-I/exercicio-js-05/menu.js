let escolha = ''

do{
    alert(
        '- - - - -Menu de opções - - - - -\n'+
        'Opçao - 1\n'+
        'Opçao - 2\n'+
        'Opçao - 3\n' +
        'Opçao - 4\n' +
        'Opçao - 5'
    )
    escolha = parseInt(prompt('Qual Opção você deseja escolher?'))
    alert('A escolha foi a opção: ' + escolha)
}while(escolha !== 5)

alert('Encerrando....')
 