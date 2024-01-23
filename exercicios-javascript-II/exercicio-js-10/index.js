escolha = ''
let vagas = []
while(escolha !== '6'){
    escolha = menu()
    switch(escolha){
        case '1':
           alert(listarVagas())
        break
        case '2':
            criarVaga()
        break
        case '3':
            procurarVaga()
        break
        case '4':
            adicionarCandidato()
        break
        case '5':
            excluirVaga()
        break
        case '6':
            alert('Encerrando Programa...')
        break
        default:
            alert('Opção Invalida!')
        break
    }
}

function menu(){
    escolha = prompt('- - - - - Menu - - - - -\n' +
    '1 - Lista de vagas disponíveis\n' + 
    '2 - Criar uma nova vaga\n' + 
    '3 - Visualizar uma vaga especifica\n' +
    '4 - Inscrever um candidato em uma vaga\n' + 
    '5 - Excluir uma vaga\n' +
    '6 - Sair')
    return escolha
}

function criarVaga(){
    let vaga = {
        nome: prompt('Informe o nome da vaga:'),
        descricao: prompt('Informe a descrição da vaga:'),
        dataLimete: prompt('Informe a data limite para inscrição (formato: DD/MM/AAAA):'),
        candidatos: []
    }

    let confirmarVaga = confirm('Deseja incluir esta vaga?\n' +
    'Nome da vaga: '+ vaga.nome + 
    '\nDescrição: '+ vaga.descricao +
    '\nData limite: '+ vaga.dataLimete)

    
    if(confirmarVaga){
        vagas.push(vaga)
        alert('Vaga incluida com sucesso!')
    }
}

function listarVagas(){
    let listaVagas = ''
    if(vagas.length > 0){
        for(let i = 0; i < vagas.length; i++){
            let vagaAtual = vagas[i];
            listaVagas += 
                'Vaga: ' + (i+1) + 'º'+
                '\nNome da vaga: ' + vagaAtual.nome +
                '\nDescrição da vaga: ' + vagaAtual.descricao +
                '\nData limiete de inscrição: ' + vagaAtual.dataLimete +
                '\nQuantidade de candidatos: ' + vagaAtual.candidatos.length + '\n'
        }
    }else{
        listaVagas = 'No momento não temos vagas cadastradas'
    }
    return listaVagas
}

function procurarVaga(){
    let vagaProcurada = parseInt(prompt('Informe o número da vaga desejada')) - 1
    if(vagaProcurada >= 0 && vagaProcurada < vagas.length){
        let vaga = vagas[vagaProcurada]
        let candidatos = vaga.candidatos.join(', ');
        alert('Vaga: ' + (vagaProcurada + 1) + 'º'+
        '\nNome da vaga: ' + vaga.nome +
        '\nDescrição da vaga: ' + vaga.descricao +
        '\nData limiete de inscrição: ' + vaga.dataLimete +
        '\nQuantidade de candidatos: ' + vaga.candidatos.length + 
        '\nNomes dos candidatos: ' + candidatos)
    }else{
        alert('Vaga não encontrada!');
    }
}

function adicionarCandidato(){
    let nomeCandidato = prompt('Informe o seu nome completo');
    let indiceVaga = parseInt(prompt('Informe o número da vaga desejada')) -1 

    if(indiceVaga >= 0 && indiceVaga < vagas.length){
        let vaga = vagas[indiceVaga]
        let confirmarCandidato = confirm(
            'Deseja concluir sua incrição para a vaga?\n' +
            'Seu nome: ' + nomeCandidato + 
            '\nNúmero da vaga: ' + (indiceVaga + 1) +
            '\nNome da vaga: '+ vaga.nome + 
            '\nDescrição: '+ vaga.descricao +
            '\nData limite: '+ vaga.dataLimete
        );
        if(confirmarCandidato){
            vaga.candidatos.push(nomeCandidato);
            alert('Candidato adicionado com sucesso à vaga!');
        }
    } else {
        alert('Vaga não encontrada!');
    }
}

function excluirVaga(){
    let vagaExluir = parseInt(prompt('Informe o número da vaga que deseja deletar')) - 1
    if (vagaExluir >= 0 && vagaExluir < vagas.length){
        let vaga = vagas[vagaExluir]
        let confirmarDeletarVaga = confirm('Deseja excluir a vaga abaixo? \n' +
            'Vaga: ' + (vagaExluir + 1) + 'º'+
            '\nNome da vaga: ' + vaga.nome +
            '\nDescrição da vaga: ' + vaga.descricao +
            '\nData limiete de inscrição: ' + vaga.dataLimete +
            '\nQuantidade de candidatos: ' + vaga.candidatos.length + '\n')
        if(confirmarDeletarVaga){
            vagas.splice(vagaExluir, 1)
            alert('Vaga excluida com sucesso!')
        }
    }else{
        alert('Vaga não encontrada!')
    }
}



