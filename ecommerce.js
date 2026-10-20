const produtos = [
    { id: 1, nome: "Notebook", preco: 3500, estoque: 5 },
    { id: 2, nome: "Mouse", preco: 120, estoque: 10 },
    { id: 3, nome: "Teclado", preco: 250, estoque: 7 },
    { id: 4, nome: "Monitor", preco: 900, estoque: 3 },
    { id: 5, nome: "Headset", preco: 180, estoque: 8 }
]



function listarProdutos(produtos) {


    for (let i = 0; i < produtos.length; i++) {

        console.log(produtos[i].nome)
        console.log(produtos[i].preco)
        console.log(produtos[i].estoque)
        console.log("------------------")
    }
}

listarProdutos(produtos)

// 

function buscarProdutoPorId(produtos, id) {

    for (let i = 0; i < produtos.length; i++) {

        let produto = produtos[i]

        if (produto.id === id) {
            return produto
        }
    }

    return "produto não encontrado"
}

console.log(buscarProdutoPorId(produtos, 3))

// 

function filtrarProdutosPorPreco(produtos, precoMaximo) {

    let resultado = []

    for (let i = 0; i < produtos.length; i++) {

        let produto = produtos[i]

        if (produto.preco <= precoMaximo) {
            resultado.push(produto)
        }
    }

    return resultado
}

console.log(filtrarProdutosPorPreco(produtos, 250))

// 

function buscarProdutosEmEstoque(produtos) {

    let resultado = []

    for (let i = 0; i < produtos.length; i++) {

        let produto = produtos[i]

        if (produto.estoque > 0) {
            resultado.push(produto)
        }
    }

    return resultado
}

console.log("Em estoque:", buscarProdutosEmEstoque(produtos))

// 

function buscarProdutoPorNome(produtos, nome) {

    for (let i = 0; i < produtos.length; i++) {

        let produto = produtos[i]

        if (produto.nome.toLowerCase() === nome.toLowerCase()) {
            return produto
        }
    }

    return "Produto não encontrado"
}

console.log(buscarProdutoPorNome(produtos, "mouse"))
console.log(buscarProdutoPorNome(produtos, "MOUSE"))
console.log(buscarProdutoPorNome(produtos, "Celular"))

// 

const carrinho = []

function adicionarAoCarrinho(produtos, carrinho, id, quantidade) {

    let produto = buscarProdutoPorId(produtos, id)

    if (typeof produto === "string") {
        return produto
    }

    if (quantidade <= 0) {
        return "quantidade inválida"
    }

    if (quantidade > produto.estoque) {
        return "estoque insuficiente"
    }

    carrinho.push("Produto adicionado ao carrinho:",{
        produto: produto,
        quantidade: quantidade
    })

}

console.log(adicionarAoCarrinho(produtos, carrinho, 2, 2))
console.log(carrinho)

// 