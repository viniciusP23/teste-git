const produtos = [
    { id: 1, nome: "Teclado", preco: 150, estoque: 10 },
    { id: 2, nome: "Mouse", preco: 80, estoque: 5 },
    { id: 3, nome: "Monitor", preco: 900, estoque: 0 },
    { id: 4, nome: "SSD", preco: 450, estoque: 3 }
]


function analisarEstoque(produtos) {

    let esgotados = 0
    let disponivel = 0
    let valorTotalEstoque = 0

    for (let i = 0; i < produtos.length; i++) {

        let produto = produtos[i]

        if (produto.estoque > 0) {
            disponivel++
        }

        if (produto.estoque === 0) {
            esgotados++
        }

        valorTotalEstoque += produto.preco * produto.estoque

    }

    return {
        disponiveis: disponivel,
        esgotados: esgotados,
        valorTotalEstoque: valorTotalEstoque
    }

}

console.log(analisarEstoque(produtos))

// ------------ 

const vendas = [
    { vendedor: "Ana", valor: 500 },
    { vendedor: "Carlos", valor: 1200 },
    { vendedor: "Ana", valor: 800 },
    { vendedor: "Joao", valor: 300 },
    { vendedor: "Carlos", valor: 200 }
]

function analisarVendas(vendas) {

    let totalVendas = 0
    let valorTotal = 0
    let vendasAcima500 = 0
    let totalVendasAna = 0

    for (let i = 0; i < vendas.length; i++) {

        let venda = vendas[i]

        totalVendas++

        if (venda.valor >= 500) {
            vendasAcima500++
        }

        if (venda.vendedor === "Ana") {
            totalVendasAna += venda.valor
        }

        valorTotal += venda.valor

    }

    return {

        totalVendas: totalVendas,
        valorTotal: valorTotal,
        vendasAcima500: vendasAcima500,
        totalVendasAna: totalVendasAna

    }
}

console.log(analisarVendas(vendas))

// ---------


function encontrarMelhorVendedor(vendas) {
    let totais = {
        Ana: 0,
        Carlos: 0,
        Joao: 0
    }

    for (let i = 0; i < vendas.length; i++) {
        let venda = vendas[i]

        totais[venda.vendedor] += venda.valor
    }

    let maiorTotal = 0
    let melhorVendedor = ""
    let nomesVendedores = Object.keys(totais)

    for (let i = 0; i < nomesVendedores.length; i++) {
        let nome = nomesVendedores[i]
        let total = totais[nome]

        if (total > maiorTotal) {
            maiorTotal = total
            melhorVendedor = nome
        }
    }

    return {
        melhorVendedor,
        maiorTotal,
        totais
    }
}

console.log(encontrarMelhorVendedor(vendas))


// ---------------------------------

