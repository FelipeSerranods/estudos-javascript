const App = require("./App")

App.criaUsuario('fulano@email.com','Fulano Fla')
App.criaUsuario('ciclano@email.com','Ciclano Clano')
App.criaUsuario('beltrano@email.com','Beltrano Bet')

App.deposito('fulano@email.com', 100)

App.transferencia('fulano@email.com','ciclano@email.com' , 20)

App.modificarTaxa(10)
App.emprestimo('beltrano@email.com', 2000, 24)

console.log(App.buscaUsuario('fulano@email.com'))
console.log(App.buscaUsuario('fulano@email.com').conta)
console.log(App.buscaUsuario('ciclano@email.com'))
console.log(App.buscaUsuario('ciclano@email.com').conta)
console.log(App.buscaUsuario('beltrano@email.com'))
console.log(App.buscaUsuario('beltrano@email.com').conta)
console.log(App.buscaUsuario('beltrano@email.com').conta.emprestimos[0].qntParcelas)