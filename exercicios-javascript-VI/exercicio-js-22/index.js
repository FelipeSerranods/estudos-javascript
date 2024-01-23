    //s remove os espaços
    // [a-z] e [A-Z] irá pegar as letras de A a Z
    // /g captura todas as aparições

function Telefone(numeroTelefone){
    const ajusteTelefone = numeroTelefone.replace(/ [\sa-zA-Z] /g , "") // remove espaços e letras
    this.codigoPais = ajusteTelefone.match(/(?<=\+)\d{1,3}/)[0]
    this.ddd = ajusteTelefone.match(/(?<=\()\d+(?=\))/)[0]
    this.numero = ajusteTelefone.match(/(?<=\)).+/)[0]
}

console.log(new Telefone('+55 (47) 9999-9999'))