const semafaro = document.getElementById("semafaro")
const text = document.getElementById("text")
let estado = "verde"

semafaro.addEventListener("click", () => {
    
    if(estado === "verde") {
        semafaro.style.background = "yellow"
        text.innerHTML = "o semáforo esta AMARELO"
        estado = "amarelo"
    } else if(estado === "amarelo") {
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


const input = document.getElementById("senha")
const botao = document.getElementById("toggle")
let visivel = false

botao.addEventListener("click", () => {

    if(visivel === false) {
        input.type = "text"
        botao.innerHTML = "Mostrar"
        visivel = true
    }else {
        input.type = "password"
        botao.innerHTML = "Esconder"
        visivel = false
    }
})

//

const result = document.getElementById("result")
let contador = 0

function somar() {
    if(contador < 10) {
        contador ++
        result.innerHTML = contador
    } else{
        alert("passou de 10")
    }

}

function subtrair() {
    if(contador > 0 ) {
        contador --
        result.innerHTML = contador
    }
}