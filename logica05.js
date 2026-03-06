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

