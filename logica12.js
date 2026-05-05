
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



