const Post = require("./Post")

class Autor{
    constructor(nome){
        this.nome = nome
        this.posts = []
    }
    escreverPost(titulo, corpo){
        const post = new Post(titulo, corpo, this)
        this.posts.push(post)
        return post
    }
}

module.exports = Autor