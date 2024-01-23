function AddJogador(){
    const valorCamisa = document.getElementById('camisa').value
    const valorJogador = document.getElementById('jogador').value
    const valorPos = document.getElementById('pos').value

    const tabelaJogador = document.getElementById('tabelaJogadores')

    const linha = document.createElement('tr')
    const colunaCamisa = document.createElement('td')
    const colunaJogador = document.createElement('td')
    const colunaPos = document.createElement('td')
    
    const confirmaJogador = confirm(
        'Deseja adicionar o jogador?\n' +
        'Camisa:' + valorCamisa + '\n' +
        'Jogador:' + valorJogador + '\n' +
        'Posição:' + valorPos
    )
    
    if (confirmaJogador){
        colunaCamisa.textContent = valorCamisa
        colunaJogador.textContent = valorJogador
        colunaPos.textContent = valorPos
    
        linha.appendChild(colunaCamisa)
        linha.appendChild(colunaJogador)
        linha.appendChild(colunaPos)
    
        tabelaJogador.appendChild(linha)

        document.getElementById('camisa').value = ''
        document.getElementById('jogador').value = ''
        document.getElementById('pos').value = ''

    }
}

function RemoverJogador(){
    const tabelaJogador = document.getElementById('tabelaJogadores')
    const numCamisa = prompt('Informe a camisa do jogador para remove-lo do elenco')

    for(i = 0; i < tabelaJogador.rows.length; i++){
        const linha = tabelaJogador.rows[i]
        const camisaTabela = linha.cells[0].textContent
        const jogadorTabela = linha.cells[1].textContent
        const posTabela = linha.cells[2].textContent
        if (numCamisa === camisaTabela){
            const confirmaJogador = confirm(
                'Deseja remover o jogador?\n' +
                'Camisa:' + camisaTabela + '\n' +
                'Jogador:' + jogadorTabela + '\n' +
                'Posição:' + posTabela
            )
            if (confirmaJogador){
                tabelaJogador.removeChild(linha)
                alert('Jogador removido')
            }
        }else{
            alert('Jogador não encontrado no elenco')
        } 
    }  
}
