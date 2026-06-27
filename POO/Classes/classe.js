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

class ProdutosLoja {
    constructor(nome, preco, quantidade) {
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }

    vender(qtd) {

        if(qtd === 0) {
            return console.log("produto indisponivel no estoque")
        }

        this.quantidade -= qtd
    }

    repor(qtd) {
        this.quantidade += qtd
    }

    mostrarInfo() {
        return this.quantidade
    }
}

const produto1 = new ProdutosLoja("banana", 5.99, 5)

produto1.vender(4)
produto1.repor(8)

console.log(produto1.mostrarInfo())

//////////

class NotaAlunos {
    constructor(nome, notas= []) {
        this.nome = nome
        this.notas = notas
    }

    adicionarNotas(nota) {
        this.notas.push(nota)
    }

    media() {
        let soma = 0

        for(let nota of this.notas) {
            soma += nota
        }

        return soma / this.notas.length
    }

    situacao() {

        if(this.media() >= 7) {
            return "Aprovado"
        }else {
            return "Reprovado"
        }
    }
}

const aluno1 = new NotaAlunos("vinicius")

aluno1.adicionarNotas(7)
aluno1.adicionarNotas(9)
aluno1.adicionarNotas(5)
aluno1.adicionarNotas(3)

console.log(aluno1.media())
console.log(aluno1.situacao())

/////////

class Livro {
    constructor(titulo, autor, disponivel = true) {
        this.titulo = titulo
        this.autor = autor
        this.disponivel = disponivel
    }

    emprestar() {
        this.disponivel = false
    }

    devolver() {
        this.disponivel = true
    }
}


class Biblioteca {
    constructor() {
        this.livros = []
    }

    adicionarLivro(livro) {
        this.livros.push(livro)
    }


    emprestarLivro(titulo) {

        const livro = this.livros.find(livro => livro.titulo === titulo)

        if (!livro) {
            console.log("Livro não encontrado")
            return
        }

        if (!livro.disponivel) {
            console.log("Livro já está emprestado")
            return
        }

        livro.emprestar()
        console.log(`Livro "${titulo}" emprestado`)
    }


    devolverLivro(titulo) {

        const livro = this.livros.find(livro => livro.titulo === titulo)

        if (!livro) {
            console.log("Livro não encontrado")
            return
        }

        livro.devolver()
        console.log(`Livro "${titulo}" devolvido`)
    }


    listarDisponiveis() {

        const disponiveis = this.livros.filter(livro => livro.disponivel)

        if (disponiveis.length === 0) {
            console.log("Nenhum livro disponível")
            return
        }

        disponiveis.forEach(livro => {
            console.log(`${livro.titulo} - ${livro.autor}`)
        })
    }
}


const biblioteca = new Biblioteca()

biblioteca.adicionarLivro(
    new Livro("O Hobbit", "Tolkien")
)

biblioteca.adicionarLivro(
    new Livro("1984", "George Orwell")
)


biblioteca.listarDisponiveis()

biblioteca.emprestarLivro("O Hobbit")

biblioteca.listarDisponiveis()

biblioteca.devolverLivro("O Hobbit")

biblioteca.emprestarLivro("1984")

