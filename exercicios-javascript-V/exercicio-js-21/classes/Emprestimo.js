const Parcelas = require("./Parcelas.js")

module.exports = class Emprestimo{
    static #taxa = 1.05 //taxa de 5%

    constructor(valor, qntParcelas){
        this.valor = valor
        this.qntParcelas = []
        for(let i = 1; i <= qntParcelas; i++){
            this.qntParcelas.push(new Parcelas((valor * Emprestimo.#taxa) / qntParcelas, i))
        }
        this.criadoEm = new Date()
    }

    static get taxa(){
        return Emprestimo.#taxa
    }
    static set taxa(novaTaxa){
        Emprestimo.#taxa = 1 + (novaTaxa / 100)
    }
}