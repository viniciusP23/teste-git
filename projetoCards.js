const cartas = [
    {
        id: 1,
        nome: "Mago de fogo",
        poder: 65
    },
    {
        id: 2,
        nome: "Dragão",
        poder: 90
    },
    {
        id: 3,
        nome: "Guerreiro",
        poder: 75
    },
]

cartas.forEach(cart => {
    console.log(cart.nome)
    console.log(cart.poder)
})


function escolherCartaAleatoria() {

    const escolher = Math.floor(Math.random() * cartas.length)

    const escolhaDaMaquina = cartas[escolher]
    
    return escolhaDaMaquina
}

const jogador = cartas[1]

let vitoriasJogador = 0
let vitoriasMaquina = 0

function duelar(carta1, carta2) {

    if(carta1.poder === carta2.poder) {
        return "Empate"
    }else {
        if(carta1.poder > carta2.poder) {
            vitoriasJogador += 1
            return "O jogador venceu!"
        }else {
            vitoriasMaquina += 1
            return "A máquina venceu!"
        }
    }
}

for(let i = 0; i < 3; i++) {
    const maquina = escolherCartaAleatoria()
    console.log(duelar(jogador, maquina))
}

console.log("jogador:",vitoriasJogador)
console.log("maquina:",vitoriasMaquina)

