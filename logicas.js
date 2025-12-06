function imparOuPar(valor) {
    if(valor % 2 === 0) {
        return console.log("seu numero é par")
    }else {
        return console.log("seu numero é impar")
    }
    
}

imparOuPar(11)

////

function posicaoDosNumeros(valor) {
    if(valor > 10) {
        console.log(` ${valor} é maior que 10`)
    } else if(valor < 10) {
        console.log(` ${valor} é menor que 10`)
    } else if(valor === 10) {
        console.log(` ${valor} é igual a 10`)
    }
}

posicaoDosNumeros(8)

//

function negativoPositivo(valor) {
    if(valor > 0) {
        console.log("valor positivo") 
    }else if(valor < 0) {
        console.log("valor negativo")
    }else {
        console.log("valor 0")
    }
}

negativoPositivo(10)

//

function recebaPalavra(palavra) {
    if(palavra[0] === "a" || palavra[0] === "A") {
        console.log(`${palavra} começa com a letra a`)
    }else {
        console.log(` ${palavra} não começa com a letra a`)
    }
}

recebaPalavra("vinicius")

//

function numerosDePalavras(numPalavras) {
  if(numPalavras.length) {
    console.log(` ${numPalavras} tem ${numPalavras.length} de letras`)
  } else {
    console.log("coloque alguma palavra")
  }
}

numerosDePalavras("café")

//

function trasFrente(palavra) {
    let invertida  = ""

    for(let i = palavra.length -1; i >= 0; i--) {
        invertida += palavra[i]
    }

    return invertida
}

console.log(trasFrente("café"))

//

function vogais(palavra) {
    const texto = palavra.toLowerCase()
    let contador = 0

    for(let i = 0; i < texto.length; i++) {
        const letra = texto[i]

        if("aeiou".includes(letra)) {
            contador++
        }
    }

    return ` A palavra ${palavra} tem ${contador} vogais`
}

console.log(vogais("vinicius"))

//

function somarPares(...valores) {
    let soma = 0

    for(let i = 0; i < valores.length; i++) {
        const numeros = valores[i]

        if(numeros % 2 === 0) {
            soma = soma + numeros
        }
    }

    return soma

}

console.log(somarPares(20, 13, 25, 10, 88, 100, 23))

//

function somarImpar(...valores) {
    let somar = 0

    for(let i = 0; i < valores.length; i++) {
        const numeros = valores[i]

        if(numeros % 2 === 1) {
            somar = somar + numeros
        }
    }

    return somar
}

console.log(somarImpar(13, 20, 11, 3, 50, 77, 14))

//

function receberValores(...valores) {
    let maior = valores[0]

    for(let i = 0; i < valores.length; i++) {
        if(valores[i] > maior) {
            maior = valores[i]
        }
    }

    return maior
}

console.log(receberValores(10, 55, 8, 60, 99, 100))

//



function numerosMaiores(...valores) {
    let contar = 0
    
    for(let i = 0; i < valores.length; i++) {
        if(valores[i] >= 50) {
            contar = contar + 1
        }
    }

    return contar
}

console.log(numerosMaiores(10, 33, 55, 80, 60, 10))

/////

const usersOnline = [
    {nome: "vinicius", online: true},
    {nome: "ana", online: true},
    {nome: "vinicius pereira", online: false},
    {nome: "ana clara", online: false},
]

function verOnline() {
    let contar = 0

    for(let i = 0; i < usersOnline.length; i++) {
        if(usersOnline[i].online === true) {
            contar = contar + 1
        }
    }

    return contar
}

console.log(verOnline())

//

function calcularMedia(...valores) {
    let somas = 0

    for(let i = 0; i < valores.length; i++) {
        somas += valores[i]
    }

    return somas / valores.length
}

console.log(calcularMedia(10, 20, 30, 50))

//

function contarPalavras(palavras, letras) {
    let contador = 0

    for(let i = 0; i < palavras.length; i++) {
        if(palavras[i] === letras) {
            contador += 1
        }
    }

    return contador
}

console.log(contarPalavras("vinicius", "u"))

//

function somandoPares(valor) {
    let somas = 0

    for(let i = 0; i < valor.length; i++) {
        if(valor[i] % 2 === 0) {
            somas += valor[i]
        }
    }

    return somas
}

console.log(somandoPares([10, 55, 20, 33, 40]))

//

function filterTransform(palavra) {
    let arrayNome = []

    for(let i = 0; i < palavra.length; i++) {
        let nome = palavra[i]

        if(nome.length > 4) {
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

    for(let i = 0; i < frut.length; i++) {
        let quitanda = frut[i]

        if(quitanda.length > 5) {
            quitanda = quitanda.toUpperCase()
            caidaDeFrutas.push(quitanda)
        }
    }

    return caidaDeFrutas
}

console.log(frutasSelecionadas(["abacate", "banana", "pera", "uva"]))

//


