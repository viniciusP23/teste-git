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

