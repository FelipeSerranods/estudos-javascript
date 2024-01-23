const mediaSimples = (...numeros) => {
    const soma = numeros.reduce((acumalador, numero) => acumalador + numero , 0)
    return soma / numeros.length
}

console.log(`Média Aritmética Simples: ${mediaSimples(3, 6, 10, 9)}`)


const mediaPonderada = (...valores) => {
    //Caso o valor do peso não for informado, será considerarado o valor do peso igual a 1 
    const soma = valores.reduce((acumalador, {numero , peso}) => acumalador + (numero * (peso ?? 1)), 0)
    const somaPeso = valores.reduce((acumalador, valor) => acumalador + (valor.peso ?? 1), 0) 
    return soma / somaPeso
}

console.log(`Média Ponderada: ${mediaPonderada(
    {numero: 9, peso: 3},
    {numero: 7},
    {numero: 10, peso: 1}
)}`)


const mediana = (...numeros) => {
    const numerosOrdenados = [...numeros].sort((a, b) => a - b)
    const meio = Math.floor(numerosOrdenados.length / 2)
    if (numerosOrdenados.length % 2 !== 0){
        return numerosOrdenados[meio]
    }
    const primeiroValor = numerosOrdenados[meio - 1]
    const segundoValor = numerosOrdenados[meio]
    return mediaSimples(primeiroValor, segundoValor)
}

console.log(`Mediana: ${mediana(2, 5 , 99, 4, 42, 7)}`)
console.log(`Mediana: ${mediana(15, 14 , 8, 7, 3)}`)

const moda = (...numeros) => {
    // [ [0 ,  1] ]
    // [ [n, qnt] ,[n,qnt] ]
    const quantidade = numeros.map(numero => [numero, numeros.filter(n => numero === n).length])
    quantidade.sort( (a, b) => b[1] - a[1])
    return quantidade[0][0]
}

console.log(`Moda: ${moda(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)