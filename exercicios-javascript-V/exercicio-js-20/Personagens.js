class Personagem {
    constructor(nome, pontoVida, qntAtaque, qntDefesa) {
        this.nome = nome
        this.pontoVida = pontoVida
        this.qntAtaque = qntAtaque
        this.qntDefesa = qntDefesa
    }

    ataque(alvo) {
        let dano = this.qntAtaque - alvo.qntDefesa
        alvo.pontoVida -= dano
        console.log(`O personagem ${this.nome} causou um dano de ${dano} pontos de vida ao personagem ${alvo.nome}.`)
    }
}

class Ladrao extends Personagem{
    ataque(alvo){
        let dano = 2 * (this.qntAtaque - alvo.qntDefesa)
        alvo.pontoVida -= dano
        console.log(`O personagem ${this.nome} causou um dano de ${dano} pontos de vida ao personagem ${alvo.nome}.`)
    }
}

class Mago extends Personagem{
    constructor(nome, pontoVida, qntAtaque, qntDefesa, pontosMagia) {
        super(nome, pontoVida, qntAtaque, qntDefesa);
        this.pontosMagia = pontosMagia;
    }

   ataque(alvo){
    let dano = (this.pontosMagia + this.qntAtaque) - alvo.qntDefesa
    alvo.pontoVida -= dano
    console.log(`O personagem ${this.nome} causou um dano de ${dano} pontos de vida ao personagem ${alvo.nome}.`)
   }

   cura(alvo){
    let cura = 2 * this.pontosMagia
    alvo.pontoVida += cura
    console.log(`O personagem ${this.nome} curou ${cura} pontos de vida ao personagem ${alvo.nome}.`)
   }
}

class Guerreiro extends Personagem{
    constructor(nome, pontoVida, qntAtaque, qntDefesa, pontosEscudo){
        super(nome, pontoVida, qntAtaque, qntDefesa)
        this.pontosEscudo = pontosEscudo
        this.postura = 'ataque'
    }
    
    ataque(alvo) {
        if(this.postura === 'ataque'){
          super.ataque(alvo)
        }
    }

    trocaPostura(){
        if (this.postura === 'defesa') {
            this.postura = 'ataque'
            this.qntDefesa -= this.pontosEscudo
            console.log(`O personagem ${this.nome} trocou sua postura para ataque`)
        } else {
            this.postura ='defesa'
            this.qntDefesa += this.pontosEscudo
            console.log(`O personagem ${this.nome} trocou sua postura para defesa`)
            
        }
    }
}


const mago = new Mago('Brain', 200, 15, 5, 60)
const guerreiro = new Guerreiro('Hogro', 1000, 15, 15, 10, 'defesa')

guerreiro.trocaPostura()
console.log('-----------------')
guerreiro.trocaPostura()
