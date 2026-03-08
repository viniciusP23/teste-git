const numeros = [2, 5, 8, 11, 14, 3]

let pares = 0
let impares = 0
let soma = 0
let maiorNumero = numeros[0]
let menorNumero = numeros[0]


for(let i = 0; i < numeros.length; i++) {

    const num = numeros[i]

    if(num % 2 === 0) {
        pares++
    }else {
        impares++
    }

    soma += num

    if(num > maiorNumero) {
        maiorNumero = num
    }

    if(num < menorNumero) {
        menorNumero = num
    }

}

console.log(pares)
console.log(impares)
console.log(soma)
console.log(maiorNumero)
console.log(menorNumero)

///


const numerosLogica = [4, 9, 2, 15, 6, 21, 8]

let maioresQ10 = 0
let maiorPar = 0

for(let i = 0; i < numerosLogica.length; i++) {

    const num = numerosLogica[i]
    
    if(num > 10) {
        maioresQ10++
    }

    if(num % 2 === 0) {

        if(num > maiorPar) {
            maiorPar = num
        }
    }


}

console.log("maiores que 10:",maioresQ10)
console.log("maior par:",maiorPar)

///


const numerosMaiores = [7, 12, 3, 20, 9, 18, 5]

let maiorImpar = null
let menorPar = null


for(let i = 0; i < numerosMaiores.length; i++) {


    const num = numerosMaiores[i]

    if(num % 2 === 1) {

      if(maiorImpar === null || num > maiorImpar) {
        maiorImpar = num 
      }

    }

    if(num % 2 === 0) {

        if(menorPar === null || num < menorPar) {
            menorPar = num
        }

    }

}

console.log(maiorImpar)
console.log(menorPar)

///

const numeros02 = [4, 11, 7, 2, 19, 6, 13]

let numImpares = 0
let maiorNumimpar = null
let menorNumPar = null
let maior15 = false

for(let i = 0; i < numeros02.length; i++) {

    const num = numeros02[i]

    if(num % 2 === 1) {
        numImpares++

        if(maiorNumimpar === null || num > maiorNumimpar) {
            maiorNumimpar = num
        }
    }

    if(num % 2 === 0){
        
        if(menorNumPar === null || num < menorNumPar) {
            menorNumPar = num
        }
    }

    if(num > 15) {
        maior15 = true
    }

}

console.log("numeros impares:",numImpares)
console.log("maior numero impar:",maiorNumimpar)
console.log("menor numero par:", menorNumPar)
console.log("existe numero maior que 15:", maior15 )

///

const numeros03 = [8, 3, 15, 6, 2, 10]

let primeiorMaior = numeros03[0]
let segundoMaior = numeros03[0]

for(let i = 0; i < numeros03.length; i++) {

    const num = numeros03[i]

    if(num > primeiorMaior) {
        primeiorMaior = num
    }else if(num > segundoMaior) {
        segundoMaior = num
    }

}

console.log(segundoMaior)

///

const numerosSomarPar = [3, 8, 5, 12, 7, 6]

let somarPares = 0

for(let i = 0; i < numerosSomarPar.length; i++) {

    const num = numerosSomarPar[i]

    if(num % 2 === 0){
        somarPares += num
    }
}

console.log(somarPares)

///

const numerosMaiores10 = [4, 15, 9, 20, 3, 11]

let maiores10 = 0

for(let i = 0; i < numerosMaiores10.length; i++) {

    const num = numerosMaiores10[i]

    if(num > 10) {
        maiores10++
    }
}

console.log(maiores10)

///

const numerosMaiorPar = [7, 12, 4, 19, 8, 3]

let numeroPar = null

for(let i = 0; i < numerosMaiorPar.length; i++) {

    const num = numerosMaiorPar[i]

    if(num % 2 === 0) {

        if(numeroPar === null || num > numeroPar) {
            numeroPar = num
        }
    }
}

console.log(numeroPar)

///

const numerosAoQuadrado = [1, 2, 3, 4, 5]

let aoQuadrado = []

for(let i = 0; i < numerosAoQuadrado.length; i++) {

    const num = numerosAoQuadrado[i]

    aoQuadrado.push(num * num)
}

console.log(aoQuadrado)

///

const paresMultiplicados = [3, 7, 2, 9, 4]

let multiplicados = []

for(let i = 0; i < paresMultiplicados.length; i++) {

    const num = paresMultiplicados[i]

    if(num % 2 === 0) {

        multiplicados.push(num * 2)
    }
}

console.log(multiplicados)

///


const numerosRanking = [4, 9, 2, 7, 5]

let primeiro = numerosRanking[0]
let segundo = numerosRanking[0]
let terceiro = numerosRanking[0]

for(let i = 0; i < numerosRanking.length; i++) {

    const num = numerosRanking[i]

    if(num > primeiro) {

        terceiro = segundo
        segundo = primeiro
        primeiro = num
    }else if(num > segundo) {
        terceiro = segundo
        segundo = num
    }else if(num > terceiro) {
        terceiro = num
    }
}

console.log("primeiro:", primeiro)
console.log("segundo:", segundo)
console.log("terceiro:", terceiro)

///

const numerosSegundoMaior = [5, 12, 18, 7, 21, 14]

let primeiroM = -Infinity
let segundoM = -Infinity

for(let i = 0; i < numerosSegundoMaior.length; i++) {


    const num = numerosSegundoMaior[i]

    if(num > 10) {
        
        if(num > primeiroM) {
            segundoM = primeiroM
            primeiroM = num
        }else if(num > segundoM){
            segundoM = num
        }

    }
}

console.log(segundoM)