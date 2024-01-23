let pacientes = ['Matheus', 'Marcos', 'Isacc']
let escolha = 0
do{
    let consulta = ''
    escolha = prompt( 
        '- - - - -Menu de opções - - - - -\n'+
        'Novo paciente - 1\n'+
        'Consultar pacientes - 2\n'+
        'Atender paciente - 3\n' +
        'Sair - 4\n'+
        'Qual opção o/a senhor(a) deseja?'
        )
    switch(parseInt(escolha)){
        case(1):
            let novoPaciente = prompt('Bom dia, Qual o seu nome?')
            pacientes.push(novoPaciente)
            alert('Adicionado o paciente '+ novoPaciente + ' para a consulta médica')
            break
        case(2):
            for (i = 0 ; i < pacientes.length ; i++){
            consulta += (i + 1) +'º ' + pacientes[i] + '\n'               
            }
            alert('Consulta de Pacientes:\n'+ consulta)
        break
        case(3):
            if(pacientes.length > 0){
                let pacienteAtendido = pacientes.shift()
                alert('Confirmado o atendimento, em breve o paciente '+ pacienteAtendido + ' estará com você')
            }else{
                alert('Consultas médicas no momento finalizadas, aguarde novos pacientes.')
            }
        break
        case(4):
            alert('Encerrando programa....')
            break
        default:
            alert('Opção Invalida!')
    } 
}while(escolha != 4)
