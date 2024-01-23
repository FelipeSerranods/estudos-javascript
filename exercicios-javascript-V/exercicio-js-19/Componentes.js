export class Componente{
    #elemento = null

    constructor(tag, parent, options){
        this.tag = tag
        this.parent = parent
        this.options = options
        this.build()
    }

    getElemento(){
        return this.#elemento
    }

    build(){
        this.#elemento = document.createElement(this.tag)
        Object.assign(this.#elemento, this.options)
        return this
    }

    render(){
        if (this.parent instanceof Componente){
            this.parent.getElemento().append(this.#elemento)
        }else{
            document.querySelector(this.parent).append(this.#elemento)
        }
    }
}