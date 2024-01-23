import calcular from "./calcular.js"
import copiarResultado from "./copiarResultado.js"
import trocarTema from "./trocarTema.js"
import { limpar, teclaPressionada, clickPressionado, voltar } from "./teclas.js"

document.querySelectorAll(".charTeclas").forEach(function (charTeclas) {
    charTeclas.addEventListener("click", clickPressionado)
})

document.getElementById("limpar").addEventListener("click", limpar)
document.getElementById("voltar").addEventListener("click", voltar)
document.getElementById("input").addEventListener("keydown", teclaPressionada)
document.getElementById("igual").addEventListener("click", calcular)
document.getElementById("copiar").addEventListener("click", copiarResultado)
document.getElementById("trocaTema").addEventListener("click", trocarTema)