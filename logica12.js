
function exibirAsteriscos(linhas) {

    let padrao = ""

    for(let i = 1; i <= linhas; i++) {

        padrao += "*"

        console.log(padrao)
    }
}

exibirAsteriscos(10)

// 


function exibirNumerosPrimos(limite) {

    for(let numero = 2; numero <= limite; numero++) {
        let ehPrimo = true

        for(let divisor = 2; divisor < numero; divisor++) {
            if(numero % divisor === 0) {
                ehPrimo = false
                break
            }
        }

        if(ehPrimo) console.log(numero)
    }
}

exibirNumerosPrimos(20)

// 

function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {

    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,

        ligar() {
            console.log("Fazendo ligação")
        }
    }
}

const celular1 = criarCelular("Zenfone", 5.5, 5000)
console.log(celular1)

// 

function contarDe1aN(numero) {

    for(let i = 1; i <= numero; i++) {
        console.log(i)
    }
}

contarDe1aN(10)

// 

function somarArray(array) {

   let soma = 0

   for(let i = 0; i < array.length; i++) {

        soma += array[i]
   }

   console.log(soma)

   let media = soma / array.length

   console.log(media)

}

somarArray([1, 2, 3, 4])

// 

function inverterString(texto) {

    let resultado = ""

    for(let i = texto.length -1; i >= 0; i--) {
        resultado += texto[i]
    }

    console.log(resultado)
}

inverterString("vinicius")

// 

function contarVogais(texto) {

    let palavra = ""

    for(let i = 0; i < texto.length; i++) {

        if("aeiou".includes(texto[i])) {
            palavra ++
        }
    }

    console.log(palavra)
}

contarVogais("vinicius")

// 

function parImpar(number) {

    if(number % 2 === 0) {
        console.log(`${number} é PAR`)
    }else {
        console.log(`${number} é IMPAR`)
    }
}

parImpar(13)

// 


const tabuada = 9

for(let i = 0; i < 10; i++) {

    console.log(` ${1} X ${tabuada} = ${tabuada * i}`)

}

// 

const arrayDenumeros = [1, 7, 10, 70, 5,]

let maior = arrayDenumeros[0]
let menor = arrayDenumeros[0]

for(let i = 0; i < arrayDenumeros.length; i++) {


    const num = arrayDenumeros[i]

    if(num > maior) {
        maior = num
    }

    if(num < menor) {
        menor = num
    }
}

console.log(maior)
console.log(menor)

// 

const valores = [10, 20, 30]

let somarValor = 0

for(let i = 0; i < valores.length; i++) {

    const num = valores[i]

    somarValor += num
}

console.log(somarValor)

// 

const duplicados = [1, 2, 2, 3, 4, 4, 5]

// let resultado = {}

// for(let valor of duplicados) {

//     if(resultado[valor]) {
//         resultado[valor] += 1
//     }else {
//         resultado[valor] = 1
//     }
// }

// let removidos = []
// for(let chave in resultado) {

//     removidos.push(chave)
// }

// console.log(removidos)

let removidos = []

for(let chave of duplicados) {

    if(!removidos.includes(chave)) {
        removidos.push(chave)
    }
}

console.log(removidos)

// 

const palavras = "vinicius"

let contarLetras = {}

for(let letras of palavras) {

    if(contarLetras[letras]) {
        (contarLetras[letras]) += 1
    }else {
        (contarLetras[letras]) = 1
    }
}

console.log(contarLetras)

// 

for(let i = 0; i <= 30; i++) {

    if(i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    }
    
    else if(i % 3 === 0) {
        console.log("Fizz")
    }

    else if(i % 5 === 0) {
        console.log("Buzz")
    }
     
    else {
        console.log(i)
    }
}

// 

const acharSegundo = [10, 5, 18, 25, 15]

let primeiro = -Infinity
let segundo = -Infinity

for(let i = 0; i < acharSegundo.length; i++) {

    const num = acharSegundo[i]

    if(num > primeiro) {
        segundo = primeiro
        primeiro = num

    }else if(num > segundo && num < primeiro){
        segundo = num
    }
}

console.log("maior:", primeiro)
console.log("segundo maior:",segundo)

// 

const numbers = [10, 11, 56, 33, 77, 80, 100]

let numImpar = []
let numPar = []

for(let i = 0; i < numbers.length; i++) {

    const num = numbers[i]

    if(num % 2 === 0) {
        numPar.push(num)
    }else {
        numImpar.push(num)
    }
}

console.log("pares:", numImpar)
console.log("impares", numPar)

// 

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    apresentar() {
        console.log(`Olá meu nome é ${this.nome} e tenho ${this.idade} de idade`)
    }
}

const p1 = new Pessoa("vinicius", 25)
p1.apresentar()

// 

class Banco {
    constructor(titular, saldo) {
        this.titular = titular
        this.saldo = saldo
    }

    depositar(valor) {

        this.saldo += valor
    }

    sacar(valor) {

        if(valor > this.saldo) {
            console.log("Valor insuficiente")
            return 
        }

        this.saldo -= valor
        
    }

    verSaldo() {
        console.log(this.saldo)
    }
}

const conta = new Banco("vinicius", 1000)
conta.depositar(500)
conta.sacar(200)
conta.verSaldo()

// 

class Produtos {
    constructor(nome, preco, quantidade) {
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }

    calcularTotal() {

        return this.preco * this.quantidade
    }
}

const pt1 = new Produtos("banana", 5, 2)
console.log(pt1.calcularTotal())

// 

class Carro {
    constructor(marca, modelo) {
        this.marca = marca
        this.modelo = modelo
        this.velocidade = 0
    }

    acelerar() {
        this.velocidade += 10
    }

    frear() {
        this.velocidade -= 10

        if(this.velocidade < 0) {
            this.velocidade = 0
        }
    }

    mostrarVelocidade() {
        console.log(`Velocidade atual: ${this.velocidade}`)
    }
}

const carro1 = new Carro("Toyota", "Corolla")
carro1.acelerar()
carro1.acelerar()
carro1.acelerar()
carro1.frear()

carro1.mostrarVelocidade()

// 

const produtosCar = [
    {nome: "pizza calabresa", preco: 40},
    {nome: "pizza portuguesa", preco: 60},
    {nome: "pizza mussarela", preco: 35},
    {nome: "pizza doce", preco: 50},
    {nome: "pizza calabresa II", preco: 47},
]

// const produtosAcima40 = produtosCar.filter(p => p.preco > 40) 
// console.log(produtosAcima40)


let produtosAcimaDe40 = []

for(let i = 0; i < produtosCar.length; i++) {
    
    const valor = produtosCar[i]

    if(valor.preco > 40) {
        produtosAcimaDe40.push(valor)
    }
}

console.log(produtosAcimaDe40)