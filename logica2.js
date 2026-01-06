const numeros = [2, 4, 6]

const dobrados = numeros.map(n => n * 2)
console.log(dobrados)

//

const numeros2 = [1, 2, 3, 4, 5, 6]

const pares = numeros2.filter(n => n % 2 === 0)
console.log(pares)

//

const numeros3 = [10, 8, 5]

const soma = numeros3.reduce((total, n) => {
    return total + n
})

console.log(soma)

//

const vendas = [
    { produto: "Camisa", preco: 50, quantidade: 2 },
    { produto: "Calça", preco: 120, quantidade: 1 },
    { produto: "Tênis", preco: 300, quantidade: 1 },
    { produto: "Meia", preco: 20, quantidade: 3 }
]

const valores = vendas.map(n => n.preco * n.quantidade)
console.log(valores)

const filtrados = valores.filter(maior => maior > 100)
console.log(filtrados)

const faturamento = valores.reduce((total, n) => {
    return total + n
}, 0)

console.log(faturamento)

//

const number = [3, 6, 9, 12]

const mais1 = number.map(n => n + 1)
console.log(mais1)
///
const maiores = [5, 12, 8, 20, 3, 15]

const maiorque10 = maiores.filter(n => n > 10)
console.log(maiorque10)
///
const numerosSomados = [10, 20, 30, 40]
const somartudo = numerosSomados.reduce((total, n) => {
    return total + n
}, 0)
console.log(somartudo)


////

const produtos = [
    { nome: "Mouse", preco: 50 },
    { nome: "Teclado", preco: 150 },
    { nome: "Monitor", preco: 900 },
    { nome: "Cabo USB", preco: 30 }
]

const separandoProdutos = produtos.map(n => n.preco)

const maioresPreço = separandoProdutos.filter(n => n > 100)
console.log(maioresPreço)

//

const pedidos = [
    { valor: 80 },
    { valor: 120 },
    { valor: 200 },
    { valor: 40 },
    { valor: 150 }
]

const pegarValores = pedidos.map(n => n.valor)

const maioresPedidos = pegarValores.filter(n => n > 100)

const somarPedidos = maioresPedidos.reduce((total, a) => {
    return total + a
}, 0)

console.log(somarPedidos)

//


function iparOuPar(valor) {

    let contadorPar = 0
    let contadorImpar = 0

    for(let i = 0; i < valor.length; i++) {
        if(valor[i] % 2 === 0) {
            contadorPar++
        }
        else{
            contadorImpar++
        }
    }  

    return {
        contadorImpar,
        contadorPar
    }
}

console.log(iparOuPar([2, 7, 6, 22, 99]))

//

function maioresQue(valores) {

    let maior = valores[0]
    
    for(let i = 1; i < valores.length; i++) {
         if(valores[i] > maior) {
            maior = valores[i]
         }
    }

    return maior
}

console.log(maioresQue([10, 5, 20, 6, 7, 30]))

//


function somaTotal() {
    let numeros = [10, 20, 30, 5]
    let somar = 0

    for(let i = 0; i < numeros.length; i++) {
        somar += numeros[i]
    }

    return somar
}

console.log(somaTotal())

//

const produtos2 = [
  { nome: "Camisa", preco: 50 },
  { nome: "Calça", preco: 120 },
  { nome: "Meia", preco: 20 }
]

function loja(produtos) {
    
    let valorMaximo = 110
    let filtrados = []

    for(let i = 0; i < produtos.length; i++) {
        if(produtos[i].preco <= valorMaximo) {
            filtrados.push(produtos[i])
        }
    }

    return filtrados
}

console.log(loja(produtos2))

///

function imparOuPar(valor) {
   
    if(valor % 2 === 0) {
        return console.log("seu numero é par")
    }else {
        return console.log("seu numero é impar")
    }

}

imparOuPar(7)

//

function somaDosNumeros(...valor) {
    let soma = 0

    for(let i = 0; i < valor.length; i++) {
        soma += valor[i]
    }

    return soma
}

console.log(somaDosNumeros(5, 3))

//

function maiorNumero(...valor) {

    let maior = 0

    for(let i = 0; i < valor.length; i++) {
        if(valor[i] > maior) {
            maior = valor[i]
        }
    }

    return maior
}

console.log(maiorNumero(10, 7))

//

function contarAte10() {

    for(let i = 1; i <= 10; i++) {
        console.log(i)
    }
}
contarAte10()

//

function contarNumerosPares(valor) {
    let numPares = 0

    for(let i = 0; i < valor.length; i++) {
        if(valor[i] % 2 === 0) {
            numPares++
        }
    }

    return numPares
}

console.log(contarNumerosPares([1, 2, 3, 4, 6]))

//

function somarTodos(valor) {
    let soma = 0

    for(let i = 0; i < valor.length; i++) {
        soma += valor[i]
    }

    return soma
}

console.log(somarTodos([10, 5, 3]))

//

function encontrarMaiorNumero(valor) {
    let maiorNumero = valor[0]

   for(let i = 1; i < valor.length; i++) {
        if(valor[i] > maiorNumero) {
            maiorNumero = valor[i]
        }
   }

   return maiorNumero
}

console.log(encontrarMaiorNumero([4, 20, 7, 1]))

//

function mediaCalcular(valor) {
    let media = 0

    for(let i = 0; i < valor.length; i++) {
        media += valor[i]
    }

    return media / valor.length
}


console.log(mediaCalcular([7, 8, 5, 9]))

//

function contarMaiorQue10(valor) {
    
    let contador = 0

    for(let i = 0; i < valor.length; i++) {
        if(valor[i] > 10) {
            contador++
        }
    }

    return contador
}

console.log(contarMaiorQue10([5, 12, 8, 20, 3]))

//

function analiseDeNumeros(valores) {
    let soma = 0
    let maior = valores[0]
    let menor = valores[0]
    let quantidadeDePares = 0
    let quantidadeDeImpares = 0

    for(let i = 0; i < valores.length; i++) {

        soma += valores[i]

        if(valores[i] > maior) {
            maior = valores[i]
        }

         if(valores[i] < menor) {
            menor = valores[i]
        }

        if(valores[i] % 2 === 0) {
            quantidadeDePares++
        }else {
            quantidadeDeImpares++
        }

    }

    let media = soma / valores.length

    return {
        soma,
        media: Number(media.toFixed(2)),
        maior,
        menor,
        quantidadeDePares,
        quantidadeDeImpares
    }
}


console.log(analiseDeNumeros([10, 3, 8, 5, 2, 7]))

//

// {
//   media: 7.00,
//   aprovados: 2,
//   reprovados: 2,
//   maiorNota: "Maria",
//   menorNota: "João"
// }

const alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "João", nota: 5 },
  { nome: "Maria", nota: 9 },
  { nome: "Pedro", nota: 6 }
]

function mediaAlunos(valores) {
    let aprovados = 0
    let reprovados = 0
    let soma = 0
    let maiorNota = valores[0]
    let menorNota = valores[0]

    for(let i = 0; i < valores.length; i++) {
        soma += valores[i].nota

        if(valores[i].nota >= 7) {
            aprovados ++
        }else {
            reprovados++
        }

        if(valores[i].nota > maiorNota.nota) {
            maiorNota = valores[i]
        }

        if(valores[i].nota < menorNota.nota) {
            menorNota = valores[i]
        }
    }

    let media = soma / valores.length

    return {
        media: Number(media.toFixed(2)),
        aprovados,
        reprovados,
        maiorNota: maiorNota.nome,
        menorNota: menorNota.nome
    }
}

console.log(mediaAlunos(alunos))

//

class Aluno {
    constructor(nome, nota) {
        this.nome = nome
        this.nota = nota
    }

    aprovados() {
        return this.nota >= 7
    }
}

const a1 = new Aluno("vinicius", 8)
const a2 = new Aluno("ana", 6)

console.log(a1.aprovados())
console.log(a2.aprovados())

//

class Produtos {
    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
    }

    descricao() {
        return `Produto: ${this.nome} - ${this.preco}`
    }
}

const p1 = new Produtos("Camiseta", 50)
const p2 = new Produtos("Calça", 150)

console.log(p1.descricao())
console.log(p2.descricao())

//

class Carrinho {
    constructor() {
        this.itens = []
    }

    adicionar(produto) {
        this.itens.push(produto)
    }

    total() {
        let soma = 0
        for(let item of this.itens) {
            soma += item.preco
        }
        return soma
    }
}

const pr1 = new Produtos("Camisa", 50)
const pr2 = new Produtos("Tênis", 300)

const carrinho = new Carrinho()
carrinho.adicionar(pr1)
carrinho.adicionar(pr2)

console.log(carrinho.total())

//

class ContaBancaria {
    constructor(titular) {
        this.titular = titular
        this.saldo = 0
    }

    depositar(valor) {
        this.saldo += valor
    }

    sacar(valor) {
        if(valor > this.saldo) {
            console.log("valor insuficiente.")
        }else {
            this.saldo -= valor
        }
    }

    mostraSaldo() {
        return this.saldo
    }
}

const conta = new ContaBancaria("vinicius")
conta.depositar(200)
conta.sacar(50)
console.log(conta.mostraSaldo())

//

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    apresentar() {
        return `Olá meu nome é ${this.nome} e tenho ${this.idade} de idade`
    }
}

const pessoa1 = new Pessoa("vinicius", 24)
const pessoa2 = new Pessoa("ana clara", 22)

console.log(pessoa1.apresentar())
console.log(pessoa2.apresentar())

//

class Mercado {
    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
    }

    desconto(percentual) {
        this.preco -= this.preco * (percentual / 100)
    }

    descricao() {
        return `Produto: ${this.nome} - ${this.preco}`
    }
}

const conta01 = new Mercado("arroz", 20)
conta01.desconto(20)
console.log(conta01.descricao())

//

class ContaDoBanco {
    constructor(titular) {
        this.titular = titular
        this.saldo = 0
    }

    depositar(valor) {
        return this.saldo += valor
    }

    sacar(valor) {
        if(valor > this.saldo) {
            console.log("valor insuficiente.")
        }else{
            this.saldo -= valor
        }
    }

    verSaldo() {
        return this.saldo
    }
}

const contaP1 = new ContaDoBanco("vinicius")
contaP1.depositar(200)
console.log(contaP1.verSaldo())
contaP1.sacar(190)
console.log(contaP1.verSaldo())

//


class Turma {
    constructor() {
        this.lista = []
    }

    adicionar(aluno) {
        this.lista.push(aluno)
    }

    mediaDaTurma() {
        let soma = 0

        for(let aluno of this.lista) {
            soma += aluno.nota
        }

        return (soma / this.lista.length).toFixed(2)
    }

    aprovados() {
        let aprovados = []

        for(let aluno of this.lista) {
            if(aluno.nota >= 7) {
                aprovados.push(aluno.nome)
            }
        }

        return aprovados
    }

    reprovados() {
        let reprovados = []
        for (let aluno of this.lista) {
            if (aluno.nota < 7) {
                reprovados.push(aluno.nome)
            }
        }
        return reprovados
    }

    maiorNota() {
        let maior = this.lista[0]

        for(let aluno of this.lista) {

            if(aluno.nota > maior.nota) {
                maior = aluno
            }
            
        }

        return maior.nome
    }

    menorNota() {
        let menor = this.lista[0]

        for(let aluno of this.lista) {

            if(aluno.nota < menor.nota) {
                menor = aluno
            }
            
        }

        return menor.nome
    }

}

const turma = new Turma()

turma.adicionar(new Aluno("Ana", 8))
turma.adicionar(new Aluno("João", 5))
turma.adicionar(new Aluno("Maria", 9))
turma.adicionar(new Aluno("Pedro", 6))

console.log("Média da turma:", turma.mediaDaTurma())
console.log("Aprovados:", turma.aprovados())
console.log("Reprovados:", turma.reprovados())
console.log("Maior nota:", turma.maiorNota())
console.log("Menor nota:", turma.menorNota())


//

class Caixa {
    constructor() {
        this.valores = []
    }

    adicionar(numero) {
        this.valores.push(numero)
    }

    somarTudo() {
        let soma = 0

        for(let n of this.valores) {
            soma += n 
        }

        return soma
    }
}

const caixa = new Caixa()
caixa.adicionar(10)
caixa.adicionar(5)
caixa.adicionar(3)
console.log(caixa.somarTudo())

//

class NumerosPares {
    constructor() {
        this.lista = []
    }

    pegarNumeros(numeros) {
        this.lista.push(numeros)
    }

    separarPares() {
        let pares = 0

        for(let n of this.lista) {
            if(n % 2 === 0) {
                pares++
            }
        }

        return pares
    }

}

const numerosPar = new NumerosPares()

numerosPar.pegarNumeros(10)
numerosPar.pegarNumeros(3)
numerosPar.pegarNumeros(8)

console.log(numerosPar.separarPares())

//

class Lista {
    constructor() {
        this.itens = []
    }

    adicionar(item) {
        this.itens.push(item)
    }

    listar() {
        return this.itens
    }
}

const lista = new Lista()

lista.adicionar("feijão")
lista.adicionar("macarrão")
console.log(lista.listar())

//

class Caixa2 {
    constructor() {
        this.valores = []
    }

    adicionar(valor) {
        this.valores.push(valor)
    }

    total() {
        let soma = 0

        for(let n of this.valores) {
            soma += n
        }

        return soma
    }
}

const caixa2 = new Caixa2()
caixa2.adicionar(50)
caixa2.adicionar(100)
console.log(caixa2.total())

//

class ProdutoMercado {
    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
    }
}

class CarrinhoDeCompras {
    constructor() {
        this.produtos = []
    }

    adicionar(produto) {
        this.produtos.push(produto)
    }

    total() {
        let soma = 0

        for(let n of this.produtos) {
            soma += n.preco
        }

        return soma
    }
}

const carrinhos = new CarrinhoDeCompras()

carrinhos.adicionar(new ProdutoMercado("arroz", 20))
carrinhos.adicionar(new ProdutoMercado("macarrão", 10))
console.log(carrinhos.total())