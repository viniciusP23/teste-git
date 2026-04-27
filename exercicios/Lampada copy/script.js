const turnOnOff = document.getElementById("turnOnOff")
const lamp = document.getElementById("lamp")


turnOnOff.addEventListener("click", () => {
    
    if(turnOnOff.innerHTML === "Ligar") {
        lamp.src = "./img/ligada.jpg"
        turnOnOff.innerHTML = "Desligar"
    }else if(turnOnOff.innerHTML === "Desligar") {
        lamp.src = "./img/desligada.jpg"
        turnOnOff.innerHTML = "Ligar"
    }
})

const mais = document.getElementById("mais")
const menos = document.getElementById("menos")
const reset = document.getElementById("reset")
const numero = document.getElementById("numero")

let atual = Number(numero.innerHTML)

mais.addEventListener("click", () => {

    atual += 1

    numero.innerHTML = atual

})

menos.addEventListener("click", () => {

    atual -= 1

    if(atual > 0) {
        return 0
    }

    numero.innerHTML = atual

})