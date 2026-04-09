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

