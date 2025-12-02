class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    apresentar() {
        return `Olá meu nome é ${this.nome} e tenho ${this.idade} de idade.`
    }
}

const p1 = new Pessoa("vinicius", 24)
console.log(p1)
console.log(p1.apresentar())

//////////////

class Animal {
    constructor(nome) {
        this.nome = nome
    }

    fazerSom() {
        console.log("fazendo algum som...")
    }
}

class Cachorro extends Animal {
    latir() {
        console.log("Au Au!")
    }
}

class Gato extends Animal {
    miar() {
        console.log(`o ${this.nome} esta Miando!`)
    }
}

const dog = new Cachorro("bob")
const gat = new Gato("bolinha")

dog.fazerSom()
dog.latir()

gat.fazerSom()
gat.miar()

//////////

class Cadastro {
    constructor(nome, idade, cpf) {
        this.nome = nome
        this.idade = idade
        this.cpf = cpf
    }

    informacoes() {
        return ` ${this.nome} - ${this.idade} - ${this.cpf}`
    }
}

class CadastroCompleto extends Cadastro {
    constructor(nome, idade, cpf, senha) {
        super(nome, idade, cpf)
        this.senha = senha
    }

    verificar() {
        return ` ${this.nome} - ${this.idade} - ${this.cpf} - ${this.senha}`
    }
}

const cadastro1 = new Cadastro("vinicius", 24, "000.000.000.00")
console.log(cadastro1.informacoes())

const cadastro2 = new CadastroCompleto("ana clara", 21, "999.999.999.99", 1234567898)
console.log(cadastro2.verificar())

////////////////////

class Pessoas {
    constructor(nome) {
        this._nome = nome
    }

    get nome() {
        return this._nome
    }

    set nome(novoNome) {
        this._nome = novoNome
    }
}

const Pessoa1 = new Pessoas("vinicius pereira")
console.log(Pessoa1.nome)
Pessoa1.nome = "ana clara"
console.log(Pessoa1.nome)

///////

class Produto {
    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
    }

    get precoFormatado() {
        return "R$" + this.preco.toFixed(2)
    }

    set valorAlterado(valor) {
        return this.valor -= valor
    }

}

const produto1 = new Produto("mouse", 100)
console.log(produto1.precoFormatado)
produto1.preco = 80
console.log(produto1.precoFormatado)

///////

class Personagem {
    constructor(nome, poder) {
        this.nome = nome
        this._poder = poder
    }

    getInfo() {
        return `${this.nome} tem o poder: ${this._poder}`
    }
}

class Vilao extends Personagem {
    constructor(nome, poder, nivelDeMaldade) {
        super(nome, poder)
        this.nivelDeMaldade = nivelDeMaldade
    }

    rirMalignamente() {
        return `HAHAHAHHA`
    }
}

class Heroi extends Personagem {
    constructor(nome, poder, pontos = []) {
        super(nome, poder)
        this.pontos = pontos
    }

    calcularMedia() {
        if (this.pontos.length === 0) return 0
        const soma = this.pontos.reduce((acc, n) => acc + n, 0)
        return soma / this.pontos.length
    }

    get poder() {
        return this._poder
    }

    set poder(poderMais) {
        return this._poder += poderMais
    }
}

class Batalha {
    constructor(personagem1, personagem2) {
        this.personagem1 = personagem1
        this.personagem2 = personagem2
    }

    duelar() {
        if (this.personagem1._poder > this.personagem2._poder) {
            console.log(`${this.personagem1.nome} venceu!`)
        } else if (this.personagem2._poder < this.personagem1._poder) {
            console.log(`${this.personagem2.nome} venceu!`)
        } else {
            console.log("Deu empate")
        }
    }
}

const goku = new Heroi("Goku", "ki", [10, 8, 9])
console.log(goku.getInfo())
console.log("Média", goku.calcularMedia())

const orochimaru = new Vilao("orochimaru", 85)
console.log(orochimaru)

const naruto = new Heroi("naruto", 90)
console.log(naruto.poder)

const batalha = new Batalha(naruto, orochimaru)
batalha.duelar()

//////

class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }

    informacoesDoCarro() {
        return `${this.marca} - ${this.modelo} - ${this.ano}`
    }
}

const car1 = new Carro("Toyota", "Corolla", 2020)
const car2 = new Carro("Volkswagen", "Amorok", 2025)

console.log(car1.informacoesDoCarro())
console.log(car2.informacoesDoCarro())
///

class Animais {
    constructor(nome) {
        this.nome = nome
    }

    emitirSom() {
        console.log("emetindo som...")
    }
}

class Cachorros extends Animais {
    constructor(nome, raca) {
        super(nome)
        this.raca = raca
    }

    latir() {
        return console.log("Au Au!")
    }
}

const cachorro1 = new Cachorros("bob", "labrador")
cachorro1.latir()
cachorro1.emitirSom()
//

class Mercado {
    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
    }

    get precoFormatados() {
        return this.preco.toFixed(2)
    }

    set desconto(valor) {
        return this.preco -= valor
    }
}

const product1 = new Mercado("arroz", 15)
console.log(product1.precoFormatados)
product1.desconto = 10
console.log(product1.precoFormatados)

/////////

class Bradesco {
    constructor(nome, saldo) {
        this.nome = nome
        this._saldo = saldo
    }

    depositar(valor) {
        if (valor === 0) {
            console.log("sem valor")
            return
        }

        this._saldo += valor
    }


    get saldo() {
        return this._saldo
    }

    set sacar(valor) {
        if (valor < 0) {
            console.log("saldo inválido.")
            return
        }

        if (valor > 3000) {
            console.log("limite por dia somente: 2500R$")
            return
        }

        this._saldo -= valor
    }
}

const user1 = new Bradesco("vinicius", 150)

console.log("valor do saldo em conta:", user1._saldo)

user1.sacar = 50

console.log("valor do saldo pós retirado:", user1._saldo)
user1.depositar(100)

console.log("saldo em conta:", user1._saldo)

///////
const user2 = new Bradesco("ana clara", 300)
console.log("valor do saldo em conta:", user2._saldo)

user2.depositar(300)
console.log("valor do saldo em conta:", user2._saldo)

user2.sacar = 200
console.log("valor do saldo pós saque:", user2._saldo)


//////////////////////

class Conceseionaria {
    constructor(marca, modelo, ano) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }

    idadeDoCarro() {
        const anoAtual = 2025
        return anoAtual - this.ano
    }
}

const carro1 = new Conceseionaria("Toyota", "Hilux", 2001)
console.log(carro1.idadeDoCarro())