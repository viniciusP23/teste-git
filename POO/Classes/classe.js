class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    apresentar() {
        return `Olá meu nome é ${this.nome} e tenho ${this.idade} de idade.`
    }
}

const p1 = new Pessoa("Vinicius", 25)

console.log(p1.apresentar())

////////

class Carro {
    constructor(marca, modelo, velocidade = 0) {
        this.marca = marca
        this.modelo = modelo
        this.velocidade = velocidade
    }

    acelerar() {
        this.velocidade += 10
    }

    freiar() {
        this.velocidade -= 10

        if(this.velocidade < 0) {
            this.velocidade = 0
        }
    }

    status() {
        return ` ${this.marca} ${this.modelo} está a ${this.velocidade} km/h`
    }
}

const carro1 = new Carro("Toyota", "Hilux")

carro1.acelerar()
carro1.acelerar()
carro1.acelerar()
carro1.freiar()

console.log(carro1.status())

///////

class ContaBancaria {
    constructor(titular, saldo = 0) {
        this.titular = titular
        this.saldo = saldo
    }

    depositar(valor) {

        this.saldo += valor
    }

    sacar(valor) {

        if(valor > this.saldo) {
            console.log("Saldo insuficiente")
            return
        }

        this.saldo -= valor
    }

    verSaldo() {
        return this.saldo
    }
}

const conta1 = new ContaBancaria("vinicius", 500)

conta1.depositar(200)
conta1.sacar(300)

console.log(conta1.verSaldo())

//////////