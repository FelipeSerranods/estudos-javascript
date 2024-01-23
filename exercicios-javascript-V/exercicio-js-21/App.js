const Depositos = require("./classes/Depositos.js")
const Emprestimo = require("./classes/Emprestimo.js")
const Transferencias = require("./classes/Transferencias.js")
const Usuario = require("./classes/Usuario.js")

module.exports = class App{
    static #usuarios = []

    static buscaUsuario(email){
        const usuario = this.#usuarios.find(usuario => usuario.email === email)
        return usuario ?? null
    }

    static criaUsuario(email, nomeCompleto){
        const verificarUsuario = App.buscaUsuario(email)
        if(!verificarUsuario){
            this.#usuarios.push(new Usuario(email, nomeCompleto))
        }else{
            throw new Error('Este email já foi cadastrado em nosso sistema')
        }
    }

    static deposito(email, valor){
        const usuario = App.buscaUsuario(email)
        if (usuario){
            const novoDeposito = new Depositos(valor)
            usuario.conta.addDeposito(novoDeposito)
        }
    }

    static transferencia(EmailDepositante, EmailReceptor, valor){
        const usuarioDepositante = App.buscaUsuario(EmailDepositante)
        const usuarioReceptor = App.buscaUsuario(EmailReceptor)
        if (usuarioDepositante && usuarioReceptor){
            const novaTransferencia = new Transferencias(usuarioDepositante, usuarioReceptor, valor)
            usuarioDepositante.conta.addTransferencia(novaTransferencia)
            usuarioReceptor.conta.addTransferencia(novaTransferencia)
        }
    }

    static emprestimo(email, valor, qntParcelas){
        const usuario = App.buscaUsuario(email)
        if (usuario){
            const novoEmprestimo = new Emprestimo(valor, qntParcelas)
            usuario.conta.addEmprestimo(novoEmprestimo)
        }
    }

    static modificarTaxa(novaTaxa){
        Emprestimo.taxa = novaTaxa
    }
    
}