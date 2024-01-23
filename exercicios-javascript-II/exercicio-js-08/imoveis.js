let imoveis = []
do{
    escolha = prompt( 
        'Quantidade de Imóveis: ' + imoveis.length +'\n\n' +
        '- - - - - Menu de opções - - - - -\n'+
        'Adicionar novo imóvel- 1\n'+
        'Consultar imóveis - 2\n'+
        'Sair - 3\n' +
        'Qual opção o/a senhor(a) deseja?'
        )
    switch(parseInt(escolha)){
        case(1):
                let imovel = {}
                
                imovel.proprietario = prompt('Qual o nome do proprietário?')
                imovel.quartos = parseInt(prompt('Informe a quantidade de quartos'))
                imovel.banheiros = parseInt(prompt('Informe a quantidade de banheiros'))
                imovel.garagem = prompt('A propriedade possui garagem? [Sim/Não]')

                let confirmarImovel = confirm('Salvar este imóvel?\n' +
                'Nome do proprietário: '+ imovel.proprietario + 
                '\nQuantidade de quartos: '+ imovel.quartos +
                '\nQuantidade de banheiros: '+ imovel.banheiros +
                '\nPossui garagem?: '+ imovel.garagem)

                if(confirmarImovel){
                    imoveis.push(imovel)
                    alert('Imóvel salvo com sucesso')
                }
            break 
        case(2):
                for(i = 0; i < imoveis.length;i++){
                    alert(
                        'Imovel: ' + i + 'º'+
                        '\nProprietario: ' + imoveis[i].proprietario +
                        '\nQuartos: ' + imoveis[i].quartos +
                        '\nBanheiros: ' + imoveis[i].banheiros +
                        '\nPossui garagem?: ' + imoveis[i].garagem +
                        '\n------------------------------------------'
                    )
                }
        break
        case(3):
            alert('Encerrando programa....')
        break
        default:
            alert('Opção Invalida!')
    } 
}while(escolha != 3)
