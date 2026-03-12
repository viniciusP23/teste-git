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

///

const numbersSomarTodos = [1, 2, 3, 4, 5]
let somar = 0

for(let i = 0; i < numbersSomarTodos.length; i++) {
    somar += numbersSomarTodos[i]
}
console.log("somar todos",somar)

///

const multiplicar = [1, 2, 3, 4]

const numMultiplicados = multiplicar.map(num => {
    return num * 2
})

console.log("multiplicados",numMultiplicados)

///

const numbersPares = [1,2,3,4,5,6]
let pares = 0

for(let i = 0; i < numbersPares.length; i++) {

    const num = numbersPares[i]

    if(num % 2 === 0) {
        pares++
    }
}

console.log("pares",pares)

///

const numbersMaior = [8, 3, 15, 2, 9]

let maior = numbersMaior[0]

for(let i = 0; i < numbersMaior.length; i++) {

    const num = numbersMaior[i]

    if(num > maior) {
        maior = num
    }
}

console.log("numero maior:", maior)

///

const numbersInverter = [1,2,3,4]
let inverterNumeros = []

for(let i = numbersInverter.length - 1; i >= 0; i--) {
    inverterNumeros.push(numbersInverter[i])
}

console.log("numeros invertidos", inverterNumeros)

///

const numbersRemover = [2, 8, 3, 10, 4, 7]

const remover = numbersRemover.filter(num => {
    return num > 5
})

console.log("numeros maiores que 5:",remover)

///

const numbersSomarPares = [3,4,7,10,12,15]

let somarPares = 0

for(let i = 0; i < numbersSomarPares.length; i++) {

    const num = numbersSomarPares[i]

    if(num % 2 === 0) {

        somarPares +=  num
    }
}

console.log("soma dos pares:",somarPares)

///

const numbersEspecifico = [5,10,15,20]

const especifico = numbersEspecifico.filter(num => {
    return num === 15
})

console.log("numero específico",especifico)

///

const usersPegarNomes = [
 { name: "Ana", age: 20 },
 { name: "Carlos", age: 30 },
 { name: "Pedro", age: 25 }
]

const pegarNames = usersPegarNomes.map(user => {
    return user.name
})

console.log("nomes:",pegarNames)

///

const usersIdade = [
 { name: "Ana", age: 16 },
 { name: "Carlos", age: 22 },
 { name: "Pedro", age: 17 },
 { name: "Fernanda", age: 30 }
]

const userMais18 = usersIdade.filter(user => {
    return user.age >= 18
})

console.log("maiores de idade:",userMais18)

///

const segundoMaior = [10,5,20,8,15] 

let primeiroM = -Infinity
let segundoM = -Infinity

for(let i = 0; i < segundoMaior.length; i++) {

    const num = segundoMaior[i]

    if(num > primeiroM) {
        segundoM = primeiroM
        primeiroM = num
    }else if(num > segundoM){
        segundoM = num
    }
}

console.log("segundo maior:", segundoM)

///

const word = "banana"

const contar = word.split("").reduce((acc, word) => {

    if(acc[word]) {
        acc[word] += 1
    }else {
        acc[word] = 1
    }

    return acc
}, {})

console.log(contar)

///


// Remover números duplicados
const numerosDuplicados = [1,2,2,3,4,4,5]

let semDuplicados = []

for(let i = 0; i < numerosDuplicados.length; i++) {

    const num = numerosDuplicados[i]

    if(!semDuplicados.includes(num)) {
        semDuplicados.push(num)
    }
}

console.log("sem duplicados", semDuplicados)

///

/// Encontrar número mais frequente


const numerosFrequentes = [1,2,2,3,3,3,4]

let contagem = {}

for(let i = 0; i < numerosFrequentes.length; i++) {

    const num = numerosFrequentes[i]

    if(contagem[num]) {
        contagem[num] ++
    }else {
        contagem[num] = 1
    }
}


let maiorNum = 0
let maisFrequente = null

for(let num in contagem) {

    if(contagem[num] > maiorNum) {
        maiorNum = contagem[num]
        maisFrequente = num
    }
}

console.log("mais frequente:", maisFrequente)
console.log(" contar numeros",contagem)

///

const separar = [1,2,3,4,5,6]

let resultado = {
    pares: [],
    impares: []
}

for(let i = 0; i < separar.length; i++) {

    const num = separar[i]

    if(num % 2 === 0) {
        resultado.pares.push(num)
    }else {
        resultado.impares.push(num)
    }
}

console.log(resultado)

///

const num = [0,1,0,3,12]

let result = []
let zero = 0

for(let i = 0; i < num.length; i++) {

    if(num[i] === 0) {
        zero++
    }else {
        result.push(num[i])
    }
}

for(let i = 0; i < zero; i++) {
    result.push(0)
}

console.log(result)

////


const numerinhos = [5, 12, 8, 20, 3, 15]

let maior10 = 0

for(let i = 0; i < numerinhos.length; i++) {

    const num = numerinhos[i]

    if(num > 10) {
        maior10++
    }
}

console.log(maior10)