function CardPaises(pais) {
    const card = document.createElement('div')
    card.classList.add('bandeiras')

    const nomePais = pais.name.common
    const nome = document.createElement('h2')
    nome.textContent = nomePais

    const bandeira = document.createElement('img')
    bandeira.src = pais.flags.svg
    bandeira.alt = nomePais

    card.append(nome, bandeira)
    document.querySelector('#paises').append(card)
}

async function getPaises() {
    const resposta = await fetch('https://restcountries.com/v3.1/all')
    const paises = await resposta.json()

    console.log(paises)
    paises.forEach(CardPaises)
}

getPaises()