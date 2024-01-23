module.exports = class Conta{
    #saldo

    constructor(usuario){
        this.usuario = usuario
        this.#saldo = 0
        this.depositos = []
        this.emprestimos = []
        this.transferencias = []
    }

    get saldo(){
        return this.#saldo
    }

    addDeposito(deposito){
        this.#saldo += deposito.valor
        this.depositos.push(deposito)
    }

    addEmprestimo(emprestimo){
        this.#saldo += emprestimo.valor
        this.emprestimos.push(emprestimo)
    }

    addTransferencia(transferencia){
        if(transferencia.usuarioReceptor.email === this.usuario.email){
            this.#saldo += transferencia.valor
            this.transferencias.push(transferencia)
        }else if(transferencia.usuarioDepositante.email === this.usuario.email){
            this.#saldo -= transferencia.valor
            this.transferencias.push(transferencia)
        }
    }
}