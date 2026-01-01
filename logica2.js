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