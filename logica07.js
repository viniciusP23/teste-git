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

