import { Componente } from "./Componentes.js";

export class Form extends Componente{
    constructor(parent,options){
        super('form', parent, options)
    }
    adicionarFilho(...filhos){
        filhos.forEach(filho => {
            this.getElemento().appendChild(filho.getElemento())
        })
    }
}