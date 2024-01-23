import { Componente } from "./Componentes.js";
import { Form } from "./Form.js";
import { Input } from "./Input.js";
import { Label } from "./Label.js";

const titulo = new Componente('h1', 'body',{textContent: 'Olá Mundo!'})
console.log(titulo)

titulo.render()

titulo.tag = 'h3'

titulo.build().render()

const form = new Form('body')

const label = new Label('Nome', form, {hmtlFor:'nameInput' })

const input = new Input(form, {id: 'nameInput', name: 'name'})

form.render()
label.render()

form.adicionarFilho(input)

form.adicionarFilho(
    new Componente('br'),
    new Componente('br'),
    new Label('Data de nascimento:', form, { htmlFor: 'birthdayInput' }),
    new Input(form, { id: 'birthdayInput', name: 'birthday', type: 'date' })
)