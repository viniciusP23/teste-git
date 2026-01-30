const carrinho = [
    { nome: "arroz", preco: 17.99, quantidade: 8 },
    { nome: "feijão", preco: 12.99, quantidade: 2 },
    { nome: "batata", preco: 10.99, quantidade: 0 },
]

let estoque = []
let produtos = []

for (let i = 0; i < carrinho.length; i++) {

    if (carrinho[i].quantidade === 0) {
        estoque.push(carrinho[i].nome)
    }

    if (carrinho[i].quantidade != 0) {
        produtos.push(carrinho[i].nome)
    }
}

console.log(estoque)
console.log(produtos)

///

const convidados = [
    { name: "vinicius", guest: true },
    { name: "ana clara", guest: true },
    { name: "joao", guest: true },
    { name: "paulo", guest: false },
]

function findGuest() {

    for (let i = 0; i < convidados.length; i++) {

        if (convidados[i].guest === true) {
            console.log(` o nome esta na lista ${convidados[i].name}`)
        } else {
            console.log(` o nome não esta na lista ${convidados[i].name}`)
        }

    }

}

console.log(findGuest())

///

function cnhProcess(name, birthYear) {

    let ano = new Date().getFullYear()

    let idade = ano - birthYear
    let check = ""

    if (idade >= 18) {
        check = "pode"
    } else {
        check = "não pode"
    }

    return `${name} tem ${idade} anos de idade e ${check} iniciar o processo.`

}

console.log(cnhProcess("vinicius", 2001))

///

function squareRoot(number) {
    const sqrt = Math.sqrt(number)

    if (number === 0 || typeof number != "number") {
        return "Número inválido"
    } else if (sqrt === Math.floor(sqrt)) {
        return `a raiz quadrada de ${number} é: ${sqrt}`
    } else {
        return `Não existe raiz inteira para esse número ${number}`
    }

}

console.log(squareRoot(25))

///

const Entrada =
    [
        { name: 'lápis', price: 2 },
        { name: 'borracha', price: 4 },
        { name: 'caneta', price: 5 },
        { name: 'régua', price: 6 },
        { name: 'apontador', price: 3 },
        { name: 'teclado gamer', price: 180 },
        { name: 'mochila', price: 33 },
        { name: 'fone de ouvido', price: 57 },
        { name: 'mousepad', price: 35 },
    ]

function productAnalysis(products) {

    let maiorpreco = products[0].price
    let total = 0

    for (let i = 1; i < products.length; i++) {

        total += products[i].price

        if (products[i].price > maiorpreco) {
            maiorpreco = products[i].price
        }
    }

    let media = total / products.length

    return {
        maiorpreco,
        total,
        media: Number(media.toFixed(2))
    }

}

console.log(productAnalysis(Entrada))

///


const graus = [98, 95, 92, 88, 74, 106, 114, 90, 76, 65, 55, 80]

function averageTemperature(anualRegister) {

    let total = 0

    for (let i = 0; i < anualRegister.length; i++) {

        total += anualRegister[i]
    }

    let average = total / anualRegister.length

    const averageConvert = ((5 * (average - 32)) / 9).toFixed(2)

    return averageConvert
}

console.log(averageTemperature(graus))

///

const numberMax = [10, 5, 74, 90, 3, 50]

function getMaxNumber(numbers) {

    let maior = numbers[0]

    for(let i = 1; i < numbers.length; i++) {
        if(numbers[i] > maior) {
            maior = numbers[i]
        }
    }

    return maior

}

console.log(getMaxNumber(numberMax))


///

const numeros = [1, 2, 3, 4, 5]

const dobro = numeros.map(num => num * 2) 
console.log(dobro)

//

const numberString = [10, 20, 30]

const mudarString = numberString.map(n => n + "")
console.log(mudarString)

//

const palavras = ["js", "react", "node"]

const palavrasMaiuscula = palavras.map(n => n.toUpperCase())
console.log(palavrasMaiuscula)

//

const preco = [100, 200, 300]

const imposto = preco.map(i => i * 1.1)
console.log(imposto)

///


const numbers = [1, 2, 3, 4, 5, 6]

const numberPares = numbers.filter(n => n % 2 === 0)
console.log(numberPares)

//

const idades = [12, 18, 20, 25, 16 ]

const menorIdade = idades.filter(n => n < 18)
console.log(menorIdade)

//

const palavrasMais5 = ["casa", "javascript", "sol", "programador"]

const maioresPalavras = palavrasMais5.filter(n => n.length > 5 )
console.log(maioresPalavras)

//

const precoMaiores = [80, 120, 200, 300]

const maioresPreco = precoMaiores.filter(n => n > 150)
console.log(maioresPreco)

//

const reduceNumber = [1, 2, 3, 4]

const somarReduce = reduceNumber.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0 )
console.log(somarReduce)

//

const maiorReduce = [10, 5, 20, 8]

const reduceMaior = maiorReduce.reduce((maior, atual) => {
    if(atual > maior) {
        return atual
    }

    return maior
})
console.log(reduceMaior)