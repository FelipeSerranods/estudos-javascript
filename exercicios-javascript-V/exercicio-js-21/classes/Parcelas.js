module.exports = class Parcelas{
    constructor(valor, qntParcelas){
        this.valor = valor
        this.qntParcelas = qntParcelas
        this.status = 'pendente'
    }
}