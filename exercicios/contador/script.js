// EX: 1
const semafaro = document.getElementById("semafaro")
const text = document.getElementById("text")
let estado = "verde"

semafaro.addEventListener("click", () => {

    if (estado === "verde") {
        semafaro.style.background = "yellow"
        text.innerHTML = "o semáforo esta AMARELO"
        estado = "amarelo"
    } else if (estado === "amarelo") {
        semafaro.style.background = "red"
        text.innerHTML = "o semáforo esta VERMELHO"
        estado = "vermelho"
    } else {
        semafaro.style.background = "green"
        text.innerHTML = "o semáforo esta VERDE"
        estado = "verde"
    }
})


//////

// EX: 2
const input = document.getElementById("senha")
const botao = document.getElementById("toggle")
let visivel = false

botao.addEventListener("click", () => {

    if (visivel === false) {
        input.type = "text"
        botao.innerHTML = "Mostrar"
        visivel = true
    } else {
        input.type = "password"
        botao.innerHTML = "Esconder"
        visivel = false
    }
})

//

// EX: 3
const result = document.getElementById("result")
let contador = 0

function somar() {
    if (contador < 10) {
        contador++
        result.innerHTML = contador
    } else {
        alert("passou de 10")
    }

}

function subtrair() {
    if (contador > 0) {
        contador--
        result.innerHTML = contador
    }
}

//

// EX: 4
const desLig = document.getElementById("ligDes")
let interruptor = false

desLig.addEventListener("click", () => {

    if (interruptor === false) {
        desLig.style.background = "#0c49b9"
        desLig.innerHTML = "OFF"
        interruptor = true
    } else {
        desLig.style.background = "#e0dd06"
        desLig.innerHTML = "ON"
        interruptor = false
    }

})

//

// EX: 5
const botaoEscMos = document.getElementById("mosEsc")
const paragrafo = document.getElementById("esconde")
let display = false

botaoEscMos.addEventListener("click", () => {

    if (display === true) {
        paragrafo.style.display = "none"
        botaoEscMos.innerHTML = "mostrar"
        display = false
    } else {
        paragrafo.style.display = "block"
        botaoEscMos.innerHTML = "esconder"
        display = true
    }

})

//

// EX: 6
const inputIdade = document.getElementById("idadeInput")
const resultado = document.getElementById("verIdade")
const verificarBotao = document.getElementById("verificar")

verificarBotao.addEventListener("click", () => {

    const idade = Number(inputIdade.value)

    if (idade >= 18) {
        resultado.innerHTML = "Maior de 18 ✅"
    } else if (idade < 18) {
        resultado.innerHTML = "Menor de 18 ❌"
    }

})

//

// EX: 7
const inputUser = document.getElementById("user")
const inputSenha = document.getElementById("userSenha")
const botaoLogin = document.getElementById("entrar")

botaoLogin.addEventListener("click", () => {

    let user = inputUser.value
    let senha = Number(inputSenha.value)

    if (user === "" || senha === "") {
        alert("preencha todos os campos")
        return
    }

    if (user === "admin" && senha === 123) {
        alert("Login OK")
    } else {
        alert("Dados inválidos")
    }

})

//

// EX: 8
const inputTarefas = document.getElementById("tarefas")
const botaoTarefas = document.getElementById("addTarefas")
const resultTarefas = document.getElementById("resultTarefas")
let tarefas = []

botaoTarefas.addEventListener("click", () => {

    let addTarefas = inputTarefas.value.trim()

    if (addTarefas === "") {
        alert("adiciona uma tarefa")
        return
    }

    tarefas.push(addTarefas)
    inputTarefas.value = ""

    redenrizarTarefas()

})

function redenrizarTarefas() {
    resultTarefas.innerHTML = ""

    tarefas.forEach(fazer => {

        resultTarefas.innerHTML += `
            <li>
                ${fazer}
            </li>
        `
    })
}

//

// EX: 8
const inputCaracter = document.getElementById("caracter")
const limitesCaracter = document.getElementById("mostrarCaracter")
const btnCaracter = document.getElementById("btnCaracter")

btnCaracter.addEventListener("click", () => {

    let limite = inputCaracter.value.trim()

    if(limite.length > 50) {
        alert("limite de caracters")
    }else {
        limitesCaracter.innerHTML = `caractere: ${limite.length}/50`
    }

})