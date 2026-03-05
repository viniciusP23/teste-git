const produtos = [
    { nome: "Camiseta", preco: 50, categoria: "roupa" },
    { nome: "Calça", preco: 120, categoria: "roupa" },
    { nome: "Notebook", preco: 3000, categoria: "eletronico" },
    { nome: "Mouse", preco: 80, categoria: "eletronico" },
]

function listarProdutos() {

    const filtrar100 = produtos.filter(produto => produto.preco > 100)
    const nomes = produtos.map(nomes => nomes.nome)
    const somatotal = produtos.reduce((acc, crr) => {
        return acc + crr.preco
    }, 0)

    const abaixoDe20 = produtos.some(p => p.preco < 20)
    const acimade10 = produtos.every(p => p.preco > 10)

    console.log("produtos acima de 100:", filtrar100)
    console.log("nomes:", nomes)
    console.log("soma Total:", somatotal)
    console.log("abaixo de 20", abaixoDe20)
    console.log("acima de 10", acimade10)

}

console.log(listarProdutos())

///

const alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "Carlos", nota: 5 },
    { nome: "João", nota: 9 },
    { nome: "Marina", nota: 4 }
]

function notasDosAlunos() {

    const aprovados = alunos.filter(apro => apro.nota >= 7)
    const reprovados = alunos.filter(aluno => aluno.nota < 7).map(aluno => aluno.nome)
    const media = alunos.reduce((acc, crr) => acc + crr.nota, 0) / alunos.length
    const maiorNota = alunos.reduce((acc, crr) =>
        acc.nota > crr.nota ? acc : crr
    )

    console.log("aprovados:", aprovados)
    console.log("reprovados", reprovados)
    console.log("media total:", media)
    console.log("maior nota:", maiorNota)
}

console.log(notasDosAlunos())

///

const pedidos = [
    { id: 1, valor: 120 },
    { id: 2, valor: 80 },
    { id: 3, valor: 200 },
    { id: 4, valor: 150 },
    { id: 5, valor: 50 }
]


const organizarPedidos = pedidos.reduce((acc, pedido) => {

    acc.total += pedido.valor

    if (!acc.maiorPedido || pedido.valor > acc.maiorPedido.valor) {
        acc.maiorPedido = pedido
    }

    if (pedido.valor > 100) {
        acc.pedidosAcimaDe100++
    }

    if (pedido.valor > 180) {
        acc.existePedidoMuitoAlto = true
    }

    return acc

}, {
    total: 0,
    maiorPedido: null,
    pedidosAcimaDe100: 0,
    existePedidoMuitoAlto: false
})

console.log(organizarPedidos)


const numeros = [7, 3, 15, 8, 4]
let maiorNumero = numeros[0]
let menorNumero = numeros[0]
let soma = 0


for (let i = 0; i < numeros.length; i++) {


    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i]
    }

    if (numeros[i] < menorNumero) {
        menorNumero = numeros[i]
    }

    soma += numeros[i]

}

let media = soma / numeros.length

console.log(maiorNumero)
console.log(menorNumero)
console.log(soma)
console.log(media)

///

const numbers = [12, 5, 8, 21, 3, 18]
let maiorNumber = numbers[0]
let menorNumber = numbers[0]
let somas = 0

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] > maiorNumber) {
        maiorNumber = numbers[i]
    }

    if (numbers[i] < menorNumber) {
        menorNumber = numbers[i]
    }

    somas += numbers[i]
}
let medias = somas / numbers.length

console.log(maiorNumber)
console.log(menorNumber)
console.log(somas)
console.log(medias)

////

const numerosPeI = [4, 7, 10, 3, 6, 9, 2]

let pares = 0
let impares = 0
let maiorPar = 0
let maior15 = false

for (let i = 0; i < numerosPeI.length; i++) {

    if (numerosPeI[i] % 2 === 0) {
        pares++

        if (numerosPeI[i] > maiorPar) {
            maiorPar = numerosPeI[i]
        }

    }

    if (numerosPeI[i] % 2 === 1) {
        impares++
    }

    if(numerosPeI[i] > 15) {
        maior15 = true
    }

}


console.log("pares:", pares)
console.log("impares", impares)
console.log(maiorPar)
console.log(maior15)

///

const notas = [8, 5, 6, 10, 4, 9, 3]
let aprovados = 0
let reprovados = 0
let maiorNota = notas[0]
let menorNota = notas[0]

for(let i = 0; i < notas.length; i++) {

    const notaAluno = notas[i]

    if(notaAluno >= 7) {
        aprovados++
    }

    if(notaAluno < 7) {
        reprovados++
    }

    if(notaAluno > maiorNota) {
        maiorNota = notaAluno
    }

    if(notaAluno < menorNota) {
        menorNota = notaAluno
    }

}

console.log("aprovados", aprovados)
console.log("reprovados", reprovados)
console.log("maior nota", maiorNota)
console.log("menor nota", menorNota)

///

const numerosMaiores = [3, 8, 12, 5, 20, 7]
let maioresQue10 = 0
let maiorMenorQue10 = null
let menorQue10Maior = null

for(let i = 0; i < numerosMaiores.length; i++) {

    const numeros = numerosMaiores[i]

    if(numeros > 10) {
        maioresQue10++

       if(maiorMenorQue10 === null || numeros < maiorMenorQue10) {
        maiorMenorQue10 = numeros
       }
    }

    if(numeros < 10) {

        if(menorQue10Maior === null || numeros > menorQue10Maior) {
            menorQue10Maior = numeros
        }
    }

}

console.log("maiores que dez:",maioresQue10)
console.log("maior menor que 10:",maiorMenorQue10)
console.log("maior numero menor que10:", menorQue10Maior)

///

const produtosGamer = [
  { nome: "Mouse", preco: 80 },
  { nome: "Teclado", preco: 120 },
  { nome: "Monitor", preco: 900 },
  { nome: "Cabo HDMI", preco: 40 },
  { nome: "Notebook", preco: 3500 }
]

let maisCaro = produtosGamer[0]
let maisBarato = produtosGamer[0]
let somatotal = 0
let acimaDe100 = 0
let acimaDe2K = false

for(let i = 0; i < produtosGamer.length; i++) {

    const produtos = produtosGamer[i]

    if(produtos.preco > maisCaro.preco) {
        maisCaro = produtos
    }

    if(produtos.preco < maisBarato.preco) {
        maisBarato = produtos
    }

    somatotal += produtos.preco
    
    if(produtos.preco > 100) {
        acimaDe100++
    }

    if(produtos.preco > 2000) {
        acimaDe2K = true
    }

}

console.log(maisCaro)
console.log(maisBarato)
console.log(somatotal)
console.log(acimaDe100)
console.log(acimaDe2K)