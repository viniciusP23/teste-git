const numeros = [10, 20, 30]
let soma = 0

for(let i = 0; i < numeros.length; i++) {

    soma += numeros[i]
}
console.log(soma)

// 

const numeros2 = [1, 2, 3, 4, 5, 6]
let pares = 0

for(let i = 0; i < numeros2.length; i++) {

    const num = numeros2[i]

    if(num % 2 === 0) {
        pares ++
    }
}

console.log(pares)

// 

const numeros3 = [5, 9, 2, 20, 1]
let maior = numeros3[0]

for(let i = 0; i < numeros3.length; i++) {

    const num = numeros3[i]

    if(num > maior) {
        maior = num
    }
}

console.log(maior)

// 

const produtos = [
  { nome: "Camiseta", preco: 50 },
  { nome: "Calça", preco: 120 },
  { nome: "Boné", preco: 30 }
]

const filtrarProdutos = produtos.filter(n => n.preco > 50)
console.log(filtrarProdutos)

const buscar = "bo"
const buscarProdutos = produtos.filter(n => n.nome.toLowerCase().includes(buscar))

console.log(buscarProdutos)

// 

const mercadorias = [
  { nome: "Camiseta", preco: 50 },
  { nome: "Calça", preco: 120 },
  { nome: "Boné", preco: 30 },
  { nome: "Camisa Polo", preco: 80 }
]

function buscarMercadorias(mercadorias, termo, precoMin) {

    const termoFormado = termo.toLowerCase().trim()

    return mercadorias.filter(n => 
        n.nome.toLowerCase().includes(termoFormado) &&
        n.preco > precoMin
    )

}

console.log(buscarMercadorias(mercadorias, "ca", 70)) 

// 

let carrinho = []

function adicionarProduto(carrinho, produto) {

    const produtoExistente = carrinho.find(n => n.nome === produto.nome)

    if(produtoExistente) {
        produtoExistente.qtd += 1
    }else {
        carrinho.push({...produto, qtd: 1})
    }
}

function calcularTotal(carrinho) {

    return carrinho.reduce((total, item) => {
        return total + (item.preco * item.qtd)
    }, 0)
}

adicionarProduto(carrinho, {nome: "bolsa", preco: 200})
adicionarProduto(carrinho, {nome: "bolsa", preco: 200})
adicionarProduto(carrinho, {nome: "camiseta", preco: 200})

const total = calcularTotal(carrinho)
console.log(carrinho)
console.log(total)

// 

const precos = [10, 20, 30, 15]

let totalSomar = 0

for(let i = 0; i < precos.length; i++) {

    const num = precos[i]

    totalSomar += num
}

console.log(totalSomar)

// 

const carrinhoCompras = [
  { nome: "Camiseta", preco: 50, qtd: 2 },
  { nome: "Tênis", preco: 200, qtd: 1 }
]

let total01 = 0
let maiorValor = carrinhoCompras[0]

for(let item of carrinhoCompras) {

    total01 += item.preco * item.qtd

    if(item.preco > maiorValor.preco) {
        maiorValor = item
    }
}

console.log(total01)
console.log(maiorValor)

// 

class Produto {
    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
    }

    mostrarProduto() {
        return `Produto: ${this.nome} - ${this.preco}`
    }

    aplicarDesconto(porcentagem){
        return this.preco = this.preco - (this.preco * (porcentagem / 100))
    }

    aumetarPreco(porcentagem) {
        return this.preco = this.preco + (this.preco * (porcentagem / 100))
    }
}

const p1 = new Produto("Camiseta", 50)

console.log(p1.mostrarProduto())

p1.aplicarDesconto(10)
console.log("desconto:", p1.mostrarProduto())

p1.aumetarPreco(10)
console.log("aumento:", p1.mostrarProduto())

// 


class Mercadorias {
    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
    }

    mostrarProduto() {
        return `Produtos: ${this.nome} - ${this.preco}`
    }
}


class Carrinho {
    constructor() {
        this.itens = []
    }

    adicionarMercadoria(produto) {
        this.itens.push(produto)
    }

    removerProduto(nome) {
        this.itens = this.itens.filter(item => item.nome !== nome)
    }

    calcularTotal() {

        return this.itens.reduce((total, item) => {
            return total + item.preco
        }, 0)
    }
}

const cart = new Carrinho()

const m1 = new Mercadorias("Camiseta", 100)
const m2 = new Mercadorias("meia", 50)

cart.adicionarMercadoria(m1)
cart.adicionarMercadoria(m2)

console.log("Total:", cart.calcularTotal())

cart.removerProduto("Camiseta")

console.log("Removidos", cart.calcularTotal())
