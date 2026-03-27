const numeros = [10, 20, 30]
let soma = 0

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i]
}

console.log(soma)

const somar = numeros.reduce((acc, crr) => {
    return acc + crr
})
console.log(somar)

// 

const numeros2 = [5, 99, 2, 8]
let maiorNum = numeros2[0]

for (let i = 0; i < numeros2.length; i++) {

    const num = numeros2[i]

    if (num > maiorNum) {
        maiorNum = num
    }
}

console.log(maiorNum)

// 

const palavras = ["camisa", "tenis", "camisa"]
let contagem = {}

for (let num of palavras) {

    if (contagem[num]) {
        contagem[num] += 1
    } else {
        contagem[num] = 1
    }
}

console.log(contagem)

// 

const usuarios = [
    { nome: "Ana", idade: 17 },
    { nome: "João", idade: 22 }
]

const maires18 = usuarios.filter(user => {
    return user.idade > 18
})

console.log(maires18)

// 

const produtos = [
    { nome: "Camisa", preco: 50 },
    { nome: "Calça", preco: 100 }
]

const retornarTotal = produtos.reduce((acc, crr) => {
    return acc + crr.preco
}, 0)

console.log(retornarTotal)

// 

let carrinho = []

carrinho.push({
    id: 1,
    nome: "Camisa",
    preco: 50,
    quantidade: 1
})

console.log(carrinho)

const verCarrinho = carrinho.filter(produto => produto.id !== 1)

console.log(verCarrinho)

// 

let car = []

car.push({ id: 1, nome: "Camisa", preco: 50 })
car.push({ id: 2, nome: "Calça", preco: 100 })

console.log(car)

const procurarItem = car.find(produto => produto.id === 1)
console.log(procurarItem)

const somarItens = car.reduce((acc, crr) => {
    return acc + crr.preco
}, 0)
console.log(somarItens)

const deletarItem = car.filter(product => product.id !== 1)
console.log(deletarItem)

// 

let carrinho01 = []

carrinho01.push({ id: 1, nome: "Camisa", preco: 50 })
carrinho01.push({ id: 2, nome: "Calça", preco: 100 })
carrinho01.push({ id: 3, nome: "Tênis", preco: 200 })

const primeiro = carrinho01[0]
const ultimo = carrinho01[carrinho01.length - 1]

console.log(primeiro)
console.log(ultimo)
console.log(carrinho01)

const buscarId2 = carrinho01.find(produto => produto.id === 2)
console.log(buscarId2)

carrinho01.filter(produto => produto.id !== 1)
console.log(carrinho01)

const somarProdutos = carrinho01.reduce((acc, crr) => {

    return acc + crr.preco

}, 0)

console.log(somarProdutos)

// 📝 Exercício 7

const compras = []

compras.push({ id: 1, nome: "teclado", preco: 300 })
compras.push({ id: 2, nome: "mouse", preco: 150 })
compras.push({ id: 3, nome: "mouse-pad", preco: 50 })

console.log(compras)

const removerCompra = compras.filter(item => item.id !== 1)
console.log(removerCompra)

const somarCompra = compras.reduce((acc, crr) => {
    return acc + crr.preco
}, 0)

console.log(somarCompra)

//

const carrinho02 = []

function adicionarProduto(produto) {

    const produtoExistente = carrinho02.find(p => p.id === produto.id)

    if(produtoExistente) {
        produtoExistente.quantidade += 1
    }else {
        carrinho02.push({
            ...produto,
            quantidade: 1
        })
    }

}

adicionarProduto({ id: 3, nome: "mouse-pad", preco: 50 })
adicionarProduto({ id: 3, nome: "mouse-pad", preco: 50 })
adicionarProduto({ id: 2, nome: "mouse", preco: 150 })

console.log(carrinho02)