class Produto {
    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
    }
}

class Carrinho {
    constructor() {
        this.produtos = []
    }

    adicionar(produto) {
        this.produtos.push(produto)
    }

    total() {
        let soma = 0

        for(let produto of this.produtos) {
            soma += produto.preco
        }

        return soma
    }

    totalItens() {
        return this.produtos.length
    }

}

class Relatorio {
    constructor(produtos) {
        this.produtos = produtos
    }

    produtoMaisCaro() {
        let maisCaro = this.produtos[0]

        for(let produto of this.produtos) {
            if(produto.preco > maisCaro.preco) {
                maisCaro = produto
            }
        }

        return maisCaro.nome
    }

    produtoMaisBarato() {
        let maisBarato = this.produtos[0]

        for(let produto of this.produtos) {
            if(produto.preco < maisBarato.preco) {
                maisBarato = produto
            }
        }

        return maisBarato.nome
    }

    aplicarDesconto() {
        
    }

    filtrarProdutos() {
        let acimaDe100 = 0

        for(let produto of this.produtos) {
            if(produto.preco >= 100) {
                acimaDe100++
            }
        }

        return acimaDe100.nome
    }
}

const p1 = new  Produto("Calça", 130)
const p2 = new Produto("Tênis", 200)
const p3 = new Produto("Camisa", 100)
const p4 = new Produto("Meia", 30)
const p5 = new Produto("bone", 90)

const carrinho = new Carrinho()
carrinho.adicionar(p1)
carrinho.adicionar(p2)
carrinho.adicionar(p3)

const relatorio = new Relatorio(carrinho.produtos)

console.log(carrinho.totalItens())
console.log(relatorio.produtoMaisCaro())
console.log(relatorio.produtoMaisBarato())
console.log(relatorio.filtrarProdutos())

//

class Bradesco {
    constructor(titular) {
        this.titular = titular
        this.saldo = 0
    }

    depositar(valor) {
        return this.saldo += valor
    }

    sacar(valor) {
        if(this.saldo < valor) {
            console.log("valor insuficiente")
        }else {
            this.saldo -= valor
        }
    }

    verSaldo() {
        return this.saldo
    }
}

const user = new Bradesco()

user.depositar(100)
console.log(user.verSaldo())
user.sacar(70)
console.log(user.verSaldo())

//

class ProdutoDeposito {
    constructor(nome, preco, quantidade) {
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }

    vender(qtd) {
        if(qtd > this.quantidade) {
            return "estoque insuficiente"
        }

        this.quantidade -= qtd
    }

    repor(qtd) {
        this.quantidade += qtd
    }

    estoque() {
        return this.quantidade
    }
}

const produtosQtd = new ProdutoDeposito("arroz", 15, 10)
produtosQtd.vender(4)
console.log(produtosQtd.estoque())
produtosQtd.repor(10)
console.log(produtosQtd.estoque())

//

class Alunos {
    constructor(nome) {
        this.nome = nome
        this.notas = []
    }

    adicionarNota(nota) {
        this.notas.push(nota)
    }

    calcularMedia() {
        let soma = 0

        for(let aluno of this.notas) {
            soma += aluno
        }

        return (soma / this.notas.length).toFixed(2)
    }

    verificarSituacao() {
        return this.calcularMedia() >= 7 ? "Aprovado" : "Reprovado"
    }
}

const alunos = new Alunos("vinicius")
alunos.adicionarNota(8)
alunos.adicionarNota(7)
alunos.adicionarNota(5)

console.log(alunos.calcularMedia())
console.log(alunos.verificarSituacao())

//

class Usuario {
    constructor(nome, email) {
        this.nome = nome
        this.email = email
    }

    login() {
        return `${this.nome} logou`
    }
}

class Admin extends Usuario {
    deletarUsuario() {
        return "Usuario deletado"
    }
}

const admin = new Admin("vinicius", "vini@hotmail.com")
console.log(admin.login())
console.log(admin.deletarUsuario())

//

class Pessoas {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}

class Aluno5Ano extends Pessoas {
    constructor(nome, idade) {
        super(nome, idade)
        this.notas = []
    }

    adicionarNota(nota) {
        this.notas.push(nota)
    }

    calcularMedia() {
        let soma = 0

        for(let aluno of this.notas) {
            soma += aluno
        }

        return (soma / this.notas.length).toFixed(2)
    }
}

const aluno5Ano = new Aluno5Ano("vinicius", 24)
aluno5Ano.adicionarNota(9)
aluno5Ano.adicionarNota(8)
aluno5Ano.adicionarNota(7)

console.log(aluno5Ano.nome)
console.log(aluno5Ano.calcularMedia())

//

class Escola {
    constructor(nome) {
        this.nome = nome
    }

    apresentar() {
        return `Sou ${this.nome}`
    }
}

class Professor extends Escola {
    constructor(nome, disciplina) {
        super(nome)
        this.disciplina = disciplina
    }

    apresentar() {
        return `Sou o professor ${this.nome} e ensino ${this.disciplina}`
    }
}

const prof = new Professor("vinicius", "programação")
console.log(prof.apresentar())

//

class Conta {
    constructor(titular) {
        this.titular = titular
        this.saldo = 0
    }

    depositar(valor) {
        this.saldo += valor
    }

    sacar(valor) {
        if(this.saldo < valor) {
            console.log("saldo insuficiente!")
        }else {
            this.saldo -= valor
        }
    }

    verSaldo() {
        return this.saldo
    }
}

class ContaCorrente extends Conta {
    constructor(titular) {
        super(titular)
    }

    sacar(valor) {
        const taxa = 2
        const total = valor + taxa

        if(total > this.saldo) {
            return `Saldo insuficiente`
        }

        this.saldo -= total
    }
}

class ContaPoupanca extends Conta {
    constructor(titular) {
        super(titular)
    }

    sacar(valor) {
        if(this.saldo - valor < 100) {
            return ` Saque não permitido`
        }

        return this.saldo -= valor
    }
}

const cc = new ContaCorrente("vinicius")
cc.depositar(200)
cc.sacar(50)
console.log(cc.verSaldo())

const cp = new ContaPoupanca("maria")
cp.depositar(150)
cp.sacar(60)
console.log(cp.verSaldo())

//
