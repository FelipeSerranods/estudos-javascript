import calcular from "./calcular.js"

const input = document.getElementById("input")

export function clickPressionado(ev) {
    const valor = ev.currentTarget.dataset.valor
    input.value += valor
}

export function limpar() {
    input.value = ""
    input.focus()
}

export function voltar() {
    input.value = input.value.slice(0, -1);
}

export function teclaPressionada(ev) {
    ev.preventDefault();
    const teclasPermetidas = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]
    if (teclasPermetidas.includes(ev.key)) {
        input.value += ev.key;
        return;
    }
    if (ev.key === "Backspace") {
        input.value = input.value.slice(0, -1);
    }
    if (ev.key === "Enter") {
        calcular();
    }
}