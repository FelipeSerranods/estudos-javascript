module.exports = class Transferencias{
    constructor(usuarioDepositante, usuarioReceptor, valor){
        this.usuarioDepositante = usuarioDepositante
        this.usuarioReceptor = usuarioReceptor
        this.valor = valor
        this.criadoEm = new Date()
    }
}