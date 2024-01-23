let nomePersonagem1 = prompt('Qual o nome do 1º personagem?')
let poderAtaque = parseInt(prompt('Qual o dano do poder de ataque do 1º personagem?'))

let nomePersonagem2 = prompt('Qual o nome do 2º personagem?')
let pontosDeVida = parseInt(prompt('Qual a quantidade de vida do 2º personagem?'))
let poderDeDefesa = parseInt(prompt('Qual a quantidade de defesa do 2º personagem?'))
let possuiEscudo = prompt("Ele possui um escudo? (Sim/Não)")

let danoCausado = 0

if (poderAtaque > poderDeDefesa && possuiEscudo == 'N'){
    danoCausado = poderAtaque - poderDeDefesa
}else if(poderAtaque > poderDeDefesa && possuiEscudo == 'S'){
    danoCausado = (poderAtaque - poderDeDefesa) / 2
}

let pontosDeVidaTotal = pontosDeVida - danoCausado

alert(nomePersonagem1 + " causou " + danoCausado + " pontos de dano em " + nomePersonagem2)

alert(
    "Personagem: "+ nomePersonagem1 + "\nDano: "+ poderAtaque + 
    "\nPersonagem: " + nomePersonagem2 + "\nDefesa: " + poderDeDefesa + "\nVida: "+ pontosDeVida + 
    "\n Resultado: " + 
    "\nPersonagem: " + nomePersonagem2 + "\nVida: "+ pontosDeVidaTotal
)