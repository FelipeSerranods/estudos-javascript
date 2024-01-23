export default function copiarResultado(ev) {
    const botao = ev.currentTarget
    if (botao.innerText === "Copiar") {
        botao.innerText = "Copiado!"
        botao.classList.add("sucesso")
        navigator.clipboard.writeText(document.getElementById(resultado).value)
    } else {
        botao.innerText = "Copiar"
        botao.classList.remove("sucesso")
    }
}