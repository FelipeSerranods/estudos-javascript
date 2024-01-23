function validarEmail(email){
    if(!email.match(/\w{2,}@[a-zA-z]{2,}\.[a-zA-z]{2,}/)){
        const erro = new Error('Email inválido.')
        erro.input = 'email'
        throw erro
    }
}

function validarSenha(senha){
    if(
        senha.length < 8 ||
        !senha.match(/[a-z]/) ||
        !senha.match(/[A-Z]/) ||
        !senha.match(/\d/) ||
        !senha.match(/[^a-zA-Z0-9\s]/)
    ){
        const erro = new Error('Senha inválida')
        erro.input = 'senha'
        throw erro
    }
}

function resetForm(inputs){
    Object.entries(inputs).forEach(([chave, valor])=> {
        valor.classList.remove('sucesso', 'error')
        document.querySelector(`#${chave}-error`).textContent = ''
    })
}

const userInputs = {
    nome: document.querySelector('#nome'),
    email: document.querySelector('#email'),
    senha: document.querySelector('#senha')
}

const form = document.querySelector('form')

form.addEventListener('submit', (ev) =>{
    ev.preventDefault()
    resetForm(userInputs)
    try{
        userInputs.nome.classList.add('sucesso')
        validarEmail(userInputs.email.value)
        userInputs.email.classList.add('sucesso')
        validarSenha(userInputs.senha.value)
        userInputs.senha.classList.add('sucesso')
        alert('Registro realizado com sucesso!')
    }catch(erro){
        userInputs[erro.input].classList.add('error')
        document.querySelector(`#${erro.input}-error`).textContent = erro.message
    }

})