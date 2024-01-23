class User {
    constructor(nomeCompleto, email, senha) {
        this.nomeCompleto = nomeCompleto
        this.email = email
        this.senha = senha
    }
    login(loginEmail, loginSenha) {
        if (this.email === loginEmail && this.senha === loginSenha) {
            console.log('Login realizado com sucesso')
        } else {
            console.log('Email ou senha incorretos')
        }
    }
}

const pessoa = new User('Felipe Serrano Santos', 'felipe@email.com', 1234)
pessoa.login('felipe@email.com', 1234)
