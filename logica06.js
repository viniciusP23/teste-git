const numbers = [2, 4, 6, 8]

const dobrados = numbers.map(num  => {
    return num * 2
})
console.log(dobrados)

////

const numbersMaiores = [5, 12, 8, 20, 3, 15]

const maioresq10 = numbersMaiores.filter(acc  => {
    return acc > 10
})

console.log(maioresq10)

///

const names = ["Ana", "Carlos", "Pedro", "João", "Fernanda"]

const filtrarNomes = names.filter(name => {
    return name.length > 4
})

console.log(filtrarNomes)

///

const users = [
 { id: 1, name: "Ana", age: 20 },
 { id: 2, name: "Carlos", age: 30 },
 { id: 3, name: "Pedro", age: 25 }
]

const pegarNomes = users.map(user => {
    return user.name
})

console.log(pegarNomes)

///

const usersMaiores = [
 { name: "Ana", age: 17 },
 { name: "Carlos", age: 22 },
 { name: "Pedro", age: 15 },
 { name: "Fernanda", age: 30 }
]

const maioresDeIdade = usersMaiores.filter(user => {
    return user.age >= 18
})

console.log(maioresDeIdade)

///

const prices = [100, 200, 300]

const desconto  = prices.map(valor => {
    return valor - valor * 0.10
})

console.log(desconto)

///

const numbersSomar = [10, 20, 30, 40]

const somarTodos = numbersSomar.reduce((acc, crr) => {
    return acc + crr
}, 0)

console.log(somarTodos)

///

const numbersQuantosTem = [5, 10, 15, 20]

const verQuantos = numbersQuantosTem.reduce((acc, crr) => {
    return acc + 1
}, 0)

console.log(verQuantos)

///

const segundoMaiorNumPar = [4, 12, 7, 20, 3, 15, 8]

let primeiro = -Infinity
let segundo = -Infinity

for(let i = 0; i < segundoMaiorNumPar.length; i++){
    const num = segundoMaiorNumPar[i]

    if(num % 2 === 0) {
        if(num > primeiro) {
            segundo = primeiro
            primeiro = num
        }else if(num > segundo) {
            segundo = num
        }
    }
}

console.log(segundo)

///

const numbersMaiorQ25 = [10, 20, 30, 40, 50]

const maiores25 = numbersMaiorQ25.reduce((acc, crr) => {
    if(crr > 25) {
        return acc + 1
    }

    return acc

}, 0)
    

console.log(maiores25)

///

const fruits = ["maçã", "banana", "maçã", "laranja", "banana", "maçã"]

const contagemDeFrutas = fruits.reduce((acc, crr) => {

    if(acc[crr]) {
        acc[crr] += 1
    }else {
        acc[crr] = 1
    }

    return acc
}, {})

console.log(contagemDeFrutas)

///

const letras = ["a", "b", "a", "c", "b", "a"]

const contarLetras = letras.reduce((acc, letra) => {

    if(acc[letra]) {
        acc[letra] += 1
    }else {
        acc[letra] = 1
    }

    return acc
}, {})

console.log(contarLetras)

///

const numbersMaisVezes = [1, 2, 2, 3, 3, 3, 4]

const maisVezes = numbersMaisVezes.reduce((acc, crr) => {

    if(acc[crr]) {
        acc[crr] += 1
    }else {
        acc[crr] = 1
    }

    return acc 
}, {})

let numeroMaisFrequente = null
let maiorContagem = 0

for(let num in maisVezes) {

    if(maisVezes[num] > maiorContagem) {
        maiorContagem = maisVezes[num]
        numeroMaisFrequente = num
    }
}

console.log(maisVezes)
console.log(numeroMaisFrequente)

///

const numbersDobrar = [1, 2, 3, 4]

const dobrar = numbersDobrar.map(num => {
    return num *2
})

console.log(dobrar)

///

const numbers5 = [2, 8, 3, 10, 4, 7]

const maior5 = numbers5.filter(num => {
    return num > 5
})

console.log(maior5)

///

const numbersSomas = [5, 10, 15]

const total = numbersSomas.reduce((acc, crr) => {
    return acc + crr
})

console.log(total)

///

const usersNomes = [
 { name: "Ana", age: 20 },
 { name: "Carlos", age: 30 },
 { name: "Pedro", age: 25 }
]

const pegarUsers = usersNomes.map(user => {
    return user.name
})

console.log(pegarUsers)

///

const usersDeMaior = [
 { name: "Ana", age: 16 },
 { name: "Carlos", age: 22 },
 { name: "Pedro", age: 17 },
 { name: "Fernanda", age: 30 }
]

const maiorIdade = usersDeMaior.filter(user => {
    return user.age >= 18
})

console.log(maiorIdade)

///

const products = [
 { name: "Mouse", price: 50 },
 { name: "Teclado", price: 100 },
 { name: "Monitor", price: 400 }
]

const produtosTotal = products.reduce((acc, crr) => {

    return acc + crr.price

}, 0)

console.log(produtosTotal)

///

const numbersFiltrar = [1, 5, 8, 12, 3]

const resultados = numbersFiltrar
.filter(num => num > 5)
.map(num => num * 2)

console.log(resultados)

///

const usersMais20 = [
 { name: "Ana", age: 18 },
 { name: "Carlos", age: 25 },
 { name: "Pedro", age: 30 },
 { name: "Julia", age: 19 }
]

const maisQue20 = usersMais20
.filter(num => num.age > 20)
.map(num => num.name)

console.log(maisQue20)

///

const numbersExistentes = [10, 20, 30, 40]

const existentes = numbersExistentes.reduce((acc, crr) => {

    return  acc + 1

}, 0)

console.log(existentes)

///

const letters = ["a", "b", "a", "c", "b", "a"]

const frequenciaDeLetras = letters.reduce((acc, letras) => {

    if(acc[letras]) {
        acc[letras] += 1
    }else {
        acc[letras] = 1
    }

    return acc
}, {})

console.log(frequenciaDeLetras)

///


const letras1 = ["a", "b", "c", "d", "e"]

const invertidos = []

for(let i = letras1.length - 1; i >= 0; i--) {
    invertidos.push(letras1[i])
}

console.log(invertidos)