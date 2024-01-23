const Coment = require("./Coment")

class Post{
    constructor(titulo, corpo, autor){
        this.titulo = titulo
        this.corpo = corpo
        this.autor = autor
        this.coments = []
        this.criadoEm = new Date()
    }
    adicionarComentario(usuario, conteudo){
        this.coments.push(new Coment(usuario, conteudo))
    }
}

module.exports = Post