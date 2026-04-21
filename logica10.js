const produtos = [
    { nome: "Camiseta", preco: 50 },
    { nome: "Tênis", preco: 200 },
    { nome: "Boné", preco: 30 }
]

function temProduto(nome) {

    const existente = produtos.find(n => n.nome === nome)
    return !!existente

}

console.log(temProduto("Tênis"))

// 

function pegarPreco(nome) {

    const produto = produtos.find(p => p.nome === nome)

    if (!produto) {
        return "Produto não encontrado"
    } else {
        return produto.preco
    }

}

console.log(pegarPreco("Camiseta"))

// 

function verificarPreco(nome) {

    const produto = produtos.find(p => p.nome === nome)

    if (!produto) {
        return "produto não encontrado"
    }

    if (produto.preco > 100) {
        return "produto caro"
    }

    return "produto barato"
}

console.log(verificarPreco("Boné"))

// 

let carrinho = []

function adicionarProduto(nome) {

    const produto = produtos.find(n => n.nome === nome)

    if (!produto) {
        return "produto não encontrado"
    }

    const itemCarrinho = carrinho.find(n => n.nome === nome)

    if (itemCarrinho) {
        itemCarrinho.qtd += 1
    } else {
        carrinho.push({ ...produto, qtd: 1 })
    }
}

adicionarProduto("Tênis")
adicionarProduto("Tênis")

adicionarProduto("Camiseta")
adicionarProduto("Camiseta")

console.log(carrinho)

// 

function removerProduto(nome) {

    const consultar = carrinho.find(n => n.nome === nome)

    if (!consultar) {
        return "Produto não encontrado"
    }

    carrinho = carrinho.filter(n => n.nome !== nome)

}

removerProduto("Camiseta")
console.log(carrinho)

// 


function diminuirQuantidade(nome) {

    const produto = carrinho.find(n => n.nome === nome)

    if (!produto) {
        return "Produto não encontrado"
    }

    if (produto.qtd > 1) {
        produto.qtd--
    } else {
        carrinho = carrinho.find(n = n.nome !== nome)
    }
}



function calcularTotal() {

    return carrinho.reduce((acc, crr) => {
        return acc + (crr.preco * crr.qtd)
    }, 0)

}

console.log(calcularTotal())


/////

const meusProdutos = [
    { nome: "mouse", preco: 100 },
    { nome: "teclado", preco: 250 },
    { nome: "fone", preco: 150 },
    { nome: "mouse-pad", preco: 50 }
]

let cart = []

function adiconar(nome) {

    const produto = meusProdutos.find(p => p.nome === nome)

    if (!produto) {
        return "produto não encontrado"
    }

    const itemCart = cart.find(p => p.nome === nome)

    if (itemCart) {
        itemCart.qtd += 1
    } else {
        cart.push({ ...produto, qtd: 1 })
    }
}

adiconar("mouse")
adiconar("mouse")
adiconar("mouse")
adiconar("teclado")

console.log(cart)


function remover(nome) {

    const produto = cart.find(p => p.nome === nome)

    if (!produto) {
        return "produto não encontrado"
    }

    cart = cart.filter(p => p.nome !== nome)
}

remover("mouse")

console.log(cart)

// 

const produtos01 = [
    { nome: "Camiseta", preco: 50 },
    { nome: "Tênis", preco: 200 },
    { nome: "Boné", preco: 30 }
]

let carrinho01 = []

function adicionarProduto01(nome) {

    const produto = produtos01.find(p => p.nome === nome)

    if (!produto) return

    const item = carrinho01.find(p => p.nome === nome)

    if (item) {
        item.qtd += 1
    } else {
        carrinho01.push({ ...produto, qtd: 1 })
    }

    renderCarrinho()

}

function renderProduto() {

    const container = document.getElementById("produtos")

    produtos01.forEach(produto => {
        const div = document.createElement("div")

        div.innerHTML = `
        <h3>${produto.nome}</h3>
        <p>R$ ${produto.preco}</p>
        <button onclick="adicionarProduto01('${produto.nome}')">
        Adicionar
        </button>
    `

    container.appendChild(div)
    })
}

function renderCarrinho() {
    const lista = document.getElementById("carrinho")
    const totalEl = document.getElementById("total")


    lista.innerHTML = ""

    let total = 0

    carrinho01.forEach(item => {
        const li = document.createElement("li")

        li.innerHTML = `
        
        ${item.nome} - ${item.qtd}x - R$ ${item.preco * item.qtd}
        <button onclick="diminuir('${item.nome}')">-</button>
        `
        lista.appendChild(li)

        total += item.preco * item.qtd
    })

    totalEl.innerHTML = `Total: R$ ${total}`
}

function diminuir(nome) {

    const item = carrinho01.find(p => p.nome === nome)

    if (!item) return

    if (item.qtd > 1) {
        item.qtd--
    } else {
        carrinho01 = carrinho01.filter(p => p.nome !== nome)
    }

    renderCarrinho()
}

adicionarProduto01("Camiseta")
adicionarProduto01("Camiseta")
adicionarProduto01("Boné")


// 

