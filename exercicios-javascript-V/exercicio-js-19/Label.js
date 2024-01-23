import { Componente } from "./Componentes.js";

export class Label extends Componente{
    constructor(texto, parent, options){
        super('label', parent, Object.assign({}, options, {textContent: texto}))
    }
}