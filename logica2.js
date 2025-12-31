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