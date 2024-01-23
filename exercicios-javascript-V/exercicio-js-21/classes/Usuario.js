const Conta = require("./Conta.js")


module.exports = class Usuario{
    constructor(email, nomeCompleto){
        this.email = email
        this.nomeCompleto = nomeCompleto
        this.conta = new Conta(this)
    }
}