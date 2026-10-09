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

if(cartas[0].poder === cartas[2].poder) {
    console.log("Empate")
}else {
    if(cartas[0].poder > cartas[2].poder) {
        console.log("Vencedor:", cartas[0].nome)
    }else {
        console.log("Vencedor:", cartas[2].nome)
    }
}

function duelar(carta1, carta2) {

    if(carta1.poder === carta2.poder) {
        return "Empate"
    }else {
        if(carta1.poder > carta2.poder) {
            return carta1.nome
        }else {
            return carta2.nome
        }
    }
}

console.log(duelar(cartas[0], cartas[2]))

function escolherCartaAleatoria() {

    const escolher = Math.floor(Math.random() * cartas.length)
     return escolher
}

console.log(escolherCartaAleatoria())
