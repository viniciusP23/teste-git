function imparOuPar(valor) {
    if (valor % 2 === 0) {
        return console.log("seu numero é par")
    } else {
        return console.log("seu numero é impar")
    }

}

imparOuPar(11)

////

function posicaoDosNumeros(valor) {
    if (valor > 10) {
        console.log(` ${valor} é maior que 10`)
    } else if (valor < 10) {
        console.log(` ${valor} é menor que 10`)
    } else if (valor === 10) {
        console.log(` ${valor} é igual a 10`)
    }
}

posicaoDosNumeros(8)

//

function negativoPositivo(valor) {
    if (valor > 0) {
        console.log("valor positivo")
    } else if (valor < 0) {
        console.log("valor negativo")
    } else {
        console.log("valor 0")
    }
}

negativoPositivo(10)

//

function recebaPalavra(palavra) {
    if (palavra[0] === "a" || palavra[0] === "A") {
        console.log(`${palavra} começa com a letra a`)
    } else {
        console.log(` ${palavra} não começa com a letra a`)
    }
}

recebaPalavra("vinicius")

//

function numerosDePalavras(numPalavras) {
    if (numPalavras.length) {
        console.log(` ${numPalavras} tem ${numPalavras.length} de letras`)
    } else {
        console.log("coloque alguma palavra")
    }
}

numerosDePalavras("café")

//

function trasFrente(palavra) {
    let invertida = ""

    for (let i = palavra.length - 1; i >= 0; i--) {
        invertida += palavra[i]
    }

    return invertida
}

console.log(trasFrente("café"))

//

function vogais(palavra) {
    const texto = palavra.toLowerCase()
    let contador = 0

    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i]

        if ("aeiou".includes(letra)) {
            contador++
        }
    }

    return ` A palavra ${palavra} tem ${contador} vogais`
}

console.log(vogais("vinicius"))

//

function somarPares(...valores) {
    let soma = 0

    for (let i = 0; i < valores.length; i++) {
        const numeros = valores[i]

        if (numeros % 2 === 0) {
            soma = soma + numeros
        }
    }

    return soma

}

console.log(somarPares(20, 13, 25, 10, 88, 100, 23))

//

function somarImpar(...valores) {
    let somar = 0

    for (let i = 0; i < valores.length; i++) {
        const numeros = valores[i]

        if (numeros % 2 === 1) {
            somar = somar + numeros
        }
    }

    return somar
}

console.log(somarImpar(13, 20, 11, 3, 50, 77, 14))

//

function receberValores(...valores) {
    let maior = valores[0]

    for (let i = 0; i < valores.length; i++) {
        if (valores[i] > maior) {
            maior = valores[i]
        }
    }

    return maior
}

console.log(receberValores(10, 55, 8, 60, 99, 100))

//



function numerosMaiores(...valores) {
    let contar = 0

    for (let i = 0; i < valores.length; i++) {
        if (valores[i] >= 50) {
            contar = contar + 1
        }
    }

    return contar
}

console.log(numerosMaiores(10, 33, 55, 80, 60, 10))

/////

const usersOnline = [
    { nome: "vinicius", online: true },
    { nome: "ana", online: true },
    { nome: "vinicius pereira", online: false },
    { nome: "ana clara", online: false },
]

function verOnline() {
    let contar = 0

    for (let i = 0; i < usersOnline.length; i++) {
        if (usersOnline[i].online === true) {
            contar = contar + 1
        }
    }

    return contar
}

console.log(verOnline())

//

function calcularMedia(...valores) {
    let somas = 0

    for (let i = 0; i < valores.length; i++) {
        somas += valores[i]
    }

    return somas / valores.length
}

console.log(calcularMedia(10, 20, 30, 50))

//

function contarPalavras(palavras, letras) {
    let contador = 0

    for (let i = 0; i < palavras.length; i++) {
        if (palavras[i] === letras) {
            contador += 1
        }
    }

    return contador
}

console.log(contarPalavras("vinicius", "u"))

//

function somandoPares(valor) {
    let somas = 0

    for (let i = 0; i < valor.length; i++) {
        if (valor[i] % 2 === 0) {
            somas += valor[i]
        }
    }

    return somas
}

console.log(somandoPares([10, 55, 20, 33, 40]))

//

function filterTransform(palavra) {
    let arrayNome = []

    for (let i = 0; i < palavra.length; i++) {
        let nome = palavra[i]

        if (nome.length > 4) {
            nome = nome.toUpperCase()
            arrayNome.push(nome)
        }
    }

    return arrayNome
}

console.log(filterTransform(["vini", "vinicius", "ana", "ana clara"]))

//

function frutasSelecionadas(frut) {
    let caidaDeFrutas = []

    for (let i = 0; i < frut.length; i++) {
        let quitanda = frut[i]

        if (quitanda.length > 5) {
            quitanda = quitanda.toUpperCase()
            caidaDeFrutas.push(quitanda)
        }
    }

    return caidaDeFrutas
}

console.log(frutasSelecionadas(["abacate", "banana", "pera", "uva"]))

//


function filtrarMaiores(valores, limite) {
    let resultado = []

    for (let i = 0; i < valores.length; i++) {
        if (valores[i] >= limite) {
            resultado.push(valores[i])
        }
    }

    return resultado
}

console.log(filtrarMaiores([10, 3, 20, 50, 80], 20))

//


function receberLetras(palavras, letras) {
    let resultados = []

    for (let i = 0; i < palavras.length; i++) {
        if (palavras[i][0] === letras) {
            resultados.push(palavras[i])
        }
    }

    return resultados
}
console.log(receberLetras(["vinicius", "ana"], "a"))

//

function somarNegativos(...valores) {

    let somas = 0

    for (let i = 0; i < valores.length; i++) {
        if (valores[i] < 0) {
            somas = somas + valores[i]
        }
    }


    return somas

}

console.log(somarNegativos(10, -5, -6, -7))

//

// O que entra?

// O que sai?

// Quais passos existem entre uma coisa e outra?

// Existem repetições?

// Existem decisões?

function imparPar(...valor) {

    let contadorPares = 0
    let contadorImpar = 0

    for (let i = 0; i < valor.length; i++) {
        if (valor[i] % 2 === 0) {
            console.log(`valor ${valor[i]} é par`)
            contadorPares++

        } else {
            console.log(`valor ${valor[i]} é impar`)
            contadorImpar++
        }
    }


    console.log(`Total de pares: ${contadorPares}`)
    console.log(`Total de ímpares: ${contadorImpar}`)

}
console.log(imparPar(10, 12, 4, 13, 17, 9))

//

function encontrarMaior(...valores) {
    let maior = valores[0]
    let menor = valores[0]

    for (let i = 0; i < valores.length; i++) {

        if (valores[i] > maior) {
            maior = valores[i]
        }
        if (valores[i] < menor) {
            menor = valores[i]
        }
    }

    return menor
}

console.log(encontrarMaior(10, 4, 25, 7, 3, 1))

//

function removerDuplicados(...valores) {
    let unico = []

    for (let i = 0; i < valores.length; i++) {
        if (!unico.includes(valores[i])) {
            unico.push(valores[i])
        }
    }

    return unico
}

console.log(removerDuplicados(1, 2, 2, 3, 4, 4, 5))

//

function ordenar(...valores) {
    for (let i = 0; i < valores.length; i++) {
        for (let j = 0; j < valores.length - 1; j++) {

            if (valores[j] > valores[j + 1]) {
                let temp = valores[j]
                valores[j] = valores[j + 1]
                valores[j + 1] = temp
            }
        }
    }

    return valores
}

console.log(ordenar(5, 3, 8, 1, 2))

//

function segundoMaior(...valores) {
    let maior = valores[0]
    let segundo = Infinity

    for (let i = 1; i < valores.length; i++) {
        if (valores[i] > maior) {
            segundo = maior
            maior = valores[i]
        }
        else if (valores[i] > segundo && valores[i] < maior) {
            segundo = valores[i]
        }


    }

    return segundo
}

console.log(segundoMaior(10, 4, 25, 7, 3))

//

function contatMaioresQue10(...valores) {
    let contador = 0

    for (let i = 0; i < valores.length; i++) {
        if (valores[i] > 10) {
            contador++
        }
    }

    return contador
}

console.log(contatMaioresQue10(5, 12, 20, 7, 15, 13))

//

function media(...valores) {
    let soma = 0

    for (let i = 0; i < valores.length; i++) {
        soma += valores[i]
    }

    return soma / valores.length
}

console.log(media(10, 20, 30))

//

function maiorMenor(...valores) {
    let maior = valores[0]
    let menor = valores[0]

    for (let i = 1; i < valores.length; i++) {
        if (valores[i] > maior) {
            maior = valores[i]
        }

        if (valores[i] < menor) {
            menor = valores[i]
        }
    }

    return { maior, menor }
}

console.log(maiorMenor(10, 4, 25, 7, 3))

//

function contarNumPares(...valores) {
    let contador = 0

    for (let i = 0; i < valores.length; i++) {

        if (valores[i] % 2 === 0) {
            contador++
        }
    }

    return contador
}

console.log(contarNumPares(1, 2, 4, 7, 8, 10))

//

function somarNumImpares(...valores) {
    let acomulador = 0

    for (let i = 0; i < valores.length; i++) {
        if (valores[i] % 2 === 1) {
            acomulador += valores[i]
        }
    }

    return acomulador
}

console.log(somarNumImpares(1, 2, 3, 4, 5))

//

function encontrarMenor(...valores) {
    let valorAtual = valores[0]

    for (let i = 1; i < valores.length; i++) {
        if (valores[i] < valorAtual) {
            valorAtual = valores[i]

        }
    }

    return valorAtual
}

console.log(encontrarMenor(10, 4, 25, 7, 3))

//

function contarEntre5e15(...valores) {
    let contador = 0

    for (let i = 0; i < valores.length; i++) {
        if (valores[i] > 5 && valores[i] < 15) {
            contador++
        }
    }

    return contador
}

console.log(contarEntre5e15(2, 7, 10, 20, 14, 5,))

//


function primeiroMaiorQue10(...valores) {

    for (let i = 0; i < valores.length; i++) {
        if (valores[i] > 10) {
            return valores[i]
        }
    }

    return null
}

console.log(primeiroMaiorQue10(3, 7, 9, 12, 20))

//

function analisarNumeros(...valores) {
    let pares = 0
    let impares = 0
    let soma = 0
    let maior = valores[0]
    let menor = valores[0]

    for (let i = 0; i < valores.length; i++) {
        if (valores[i] % 2 === 0) pares++
        else impares++

        soma += valores[i]

        if (valores[i] > maior) {
            maior = valores[i]
        }
        if (valores[i] < menor) {
            menor = valores[i]
        }

    }

    return {
        pares,
        impares,
        soma,
        maior,
        menor
    }

}

console.log(analisarNumeros(10, 3, 8, 5, 2))

//

function analisarNotas(notas) {
    let soma = 0
    let maiorNota = notas[0]
    let menorNota = notas[0]
    let aprovados = 0
    let reprovados = 0

    for (let i = 0; i < notas.length; i++) {
        soma += notas[i]

        if (notas[i] > maiorNota) {
            maiorNota = notas[i]
        }

        if(notas[i] < menorNota) {
            menorNota = notas[i]
        }

        if(notas[i] >= 7) {
            aprovados ++
        }else {
            reprovados ++
        }
    }

    let media = soma / notas.length

    return {
        media: Number(media.toFixed(2)),
        maiorNota,
        menorNota,
        aprovados,
        reprovados
    }
}

console.log(analisarNotas([5, 7, 10, 6, 8, 4]))

//

function analisarVendas(vendas) {
    let totalVendas = 0
    let maiorVenda = vendas[0]
    let menorVenda = vendas[0]
    let vendasAcimaDe100 = 0
    let vendasAbaixoDe50 = 0

    for(let i = 0; i < vendas.length; i++) {

        totalVendas += vendas[i]
         
        if(vendas[i] > maiorVenda) {
            maiorVenda = vendas[i]
        }
        if(vendas[i] < menorVenda) {
            menorVenda = vendas[i]
        }

        if(vendas[i] > 100) {
            vendasAcimaDe100++
        }else if(vendas[i] < 50) {
            vendasAbaixoDe50++
        }

    }

    return {
        totalVendas,
        maiorVenda,
        menorVenda,
        vendasAcimaDe100,
        vendasAbaixoDe50
    }
}

console.log(analisarVendas([120, 45, 200, 30, 80, 150]))

//

const produtos = [
  { nome: "Camisa", preco: 50 },
  { nome: "Calça", preco: 120 },
  { nome: "Tênis", preco: 300 },
  { nome: "Meia", preco: 20 },
  { nome: "Boné", preco: 80 }
]

function analisarProdutos(produtos) {

    
}