const Autor = require("./Autor");

const user = new Autor("Felipe")

const post = user.escreverPost('Titulo do Post', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.')

post.adicionarComentario('Lucas', 'Top')
post.adicionarComentario('Pedro', 'Massa')

console.log(user)
console.log(post)