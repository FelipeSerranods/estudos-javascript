export default function calcular() {
    const resultado = document.getElementById("resultado")
    resultado.value = "ERROR"
    resultado.classList.add("error")
    const result = eval(input.value)
    resultado.value = result
    input.value = ""
    input.focus()
    resultado.classList.remove("error")
}