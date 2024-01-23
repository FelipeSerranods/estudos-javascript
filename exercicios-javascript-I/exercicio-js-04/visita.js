let nome = prompt('Qual o seu nome?: ')
let cidades = ''
let cont = 0

while(true){
    let escolha = prompt('Visitou alguma cidade perto durante o seu passeio? [Sim/Não]')
    if(escolha == "Não"){
        alert('Entendo, as vezes não temos tempo.. mas quando tiver um tempinho tente visitar a cidade São Fransisco é aqui do lado.')
        break
    }
    let cidade = prompt('Qual cidade você visitou?')
    cidades += cidade + ", "
    cont += 1
}

if(cidades.endsWith(", ")){
    cidades = cidades.slice(0, -2);
}

alert(
    "O turista chamado " + nome + " visitou " + cont + " cidades" +
    "\nCidades Visitadas: " + cidades    
)
