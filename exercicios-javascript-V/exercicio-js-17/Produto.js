class Produto {
    constructor(nomeProduto, descricao, valor) {
        this.nomeProduto = nomeProduto
        this.descricao = descricao
        this.valor = valor
        this.estoque = 0
    }
    adicionarEstoque(quantidade) {
        this.estoque += quantidade
    }
    calcularDesconto(desconto) {
        //this.valor = this.valor * (1 - (desconto / 100))
        return this.valor * (1 - (desconto / 100))
    }
}

const xbox = new Produto('Xbox', 'video-game', 4500)

xbox.adicionarEstoque(4000)
//xbox.calcularDesconto(10)
const valorDesconto = xbox.calcularDesconto(10)
console.log(xbox)
console.log(valorDesconto)