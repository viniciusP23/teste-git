class Personagem {

    constructor(nome, poder) {
        this.nome = nome,
        this.poder = poder
    }

    getInfo() {
        return `Nome: ${this.nome} Poder: ${this.poder}`
    }
}

class Heroi extends Personagem {
    constructor(nome, poder, pontos) {
        super(nome, poder)
        this.pontos = []
    }

    calcularMediaPontos() {
        const pontosOrdenados = this.pontos.sort()
        const pontosParaMedia = pontosOrdenados.slice(1, -1)
        console.log(pontosOrdenados)
        console.log(pontosParaMedia)
    }
}

const romeu = new Heroi("romeu", "berber água")
romeu.pontos = [45, 13, 85, 12, 95, 42]
console.log(romeu.getInfo())
romeu.calcularMediaPontos()

