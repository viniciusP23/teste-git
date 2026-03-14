const numbers = [8, 3, 15, 2, 9]

let menor = numbers[0]

for(let i = 0; i < numbers.length; i++) {

    const num = numbers[i]

    if(num < menor) {
        menor = num
    }
}

console.log("menor:", menor)

///

const numbers02 = [5, 12, 8, 20, 3, 15]

let maiores = 0

for(let i = 0; i < numbers02.length; i++) {

    const num = numbers02[i]

    if(num > 10) {
        maiores++
    }
}

console.log("maiores que 10:", maiores)

///

const numbers03 = [1,2,3,4,5,6]

let somarImpares = 0

for(let i = 0; i < numbers03.length; i++) {

    const num = numbers03[i]

    if(num % 2 === 1) {

        somarImpares += num
    }
}

console.log("somar impares", somarImpares)

///

const numbers04 = [10,20,30,40]

const encontrarNum = numbers04.filter(num => {
    return num === 30
})

console.log("encontrar numero", encontrarNum)

///

const fruits = ["maçã", "banana", "maçã", "laranja", "banana", "maçã"]

const contarFrutas = fruits.reduce((acc, fruta) => {

    if(acc[fruta]) {
        acc[fruta] += 1
    }else {
        acc[fruta] = 1
    }

    return acc
}, {})

console.log(contarFrutas)

///

const a = [1,2,3]
const b = [4,5,6]

const juntar = [...a, ...b]
console.log(juntar)

///

const numbers05 = [7,2,9,4,1]

let menor01 = Infinity
let menor2 = Infinity

for(let i = 0; i < numbers05.length; i++) {

    const num = numbers05[i]

    if(num < menor01) {
        menor2 = menor01
        menor01 = num
    }else if(num < menor2) {
        menor2 = num
    }
}

console.log(menor2)

///

const palavra = "arara"

let invertida = ""


for(let i = palavra.length - 1; i >= 0; i--) {
    invertida += palavra[i]
}

console.log(invertida === palavra)

///

const numbers06 = [1,2,2,3,3,3,4]

let contarNum = {}

for(let i = 0; i < numbers06.length; i++) {

    const num = numbers06[i]

    if(contarNum[num]) {
        contarNum[num] += 1
    }else {
        contarNum[num] = 1
    }
}

console.log(contarNum)

///

const word = "banana"

let contagem = {}

for(let i = 0; i < word.length; i++) {

    const num = word[i]

    if(contagem[num]) {
        contagem[num] += 1
    }else {
        contagem[num] = 1
    }
}

console.log(contagem)

///

const numbers07 = [1,2,2,3,3,3,4]

const contar = {}

for(let num of numbers07) {

    if(contar[num]) {
        contar[num] += 1
    }else {
        contar[num] = 1
    }
}

let maior = 0
let maisFrequente = null

for(let num in contar) {

    if(contar[num] > maior) {
        maior = contar[num]
        maisFrequente = num
    }
}

console.log(maisFrequente)

///

const numbers08 = [1,2,2,3,3,3,4]

const contagemNum = {}

for(let i = 0; i < numbers08.length; i++) {

    const num = numbers08[i]

    if(contagemNum[num]) {
        contagemNum[num] += 1
    }else {
        contagemNum[num] = 1
    }
}

console.log(contagemNum)

//

const palavras = "javascript"

const contarPalavras = {}

for(let i = 0; i < palavras.length; i++) {

    const word = palavras[i]

    if(contarPalavras[word]) {
        contarPalavras[word] ++
    }else {
        contarPalavras[word] = 1
    }
}

console.log(contarPalavras )

// 

const numbers09 = [1,3,4,2,2]

const contar01 = {}

for(let num of numbers09) {

    if(contar01[num]) {
        contar01[num] ++
    }else {
        contar01[num] = 1
    }
}

console.log(contar01)

// 

const numbers10 = [1,3,4,2,2]

let contagem01 = {}

for(let num of numbers10) {

    if(contagem01[num]) {
        contagem01[num] ++
    }else {
        contagem01[num] = 1
    }
}
console.log(contagem01)

for(let num in contagem01) {

    if(contagem01[num] > 1) {
        console.log("duplicados", num)
    }
}

// 

const numbers11 = [1,2,2,3,3,3,4]

let contagem02 = {}

for(let num of numbers11) {

    if(contagem02[num]) {
        contagem02[num] ++
    }else {
        contagem02[num] = 1
    }
}

let maior01 = 0
let numFrequente = null

for(let num in contagem02) {

    if(num > maior) {
        numFrequente = maior
    }
}

console.log(numFrequente)

// 

const word01 = "banana"

let contagem03 = {}

for(let num of word01) {

    if(contagem03[num]) {
        contagem03[num] ++
    }else {
        contagem03[num] = 1
    }
}

console.log(contagem03)

// 

const word02 = "aabbcdde"

let contagem04 = {}

for(let word of word02) {

    if(contagem04[word]) {
        contagem04[word] ++
    }else {
        contagem04[word] = 1
    }
}

for(let letra of word02) {

    if(contagem04[letra] === 1) {
        console.log(letra)
        break
    }
}

// 

const numbers12 = [1,2,3,2,4,5,3]

let contagem05 = {}

for(let num of numbers12) {
    if(contagem05[num]) {
        contagem05[num] ++
    }else {
        contagem05[num] = 1
    }
}

for(let num in contagem05) {

    if(contagem05[num] > 1) {
        console.log(num)
    }
}