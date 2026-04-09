
// EX 1
const paragrafo = document.getElementById("text")
const botao = document.getElementById("btn")

botao.addEventListener("click", () => {
    paragrafo.innerHTML = "Paragravo mostrado"
});


// EX 2
const paragrafo2 = document.getElementById("text2")
const botaoAdicionar = document.getElementById("btn2")
const botaoDiminuir = document.getElementById("btn3")

let contador = 0


botaoAdicionar.addEventListener("click", () => {

    contador++

    paragrafo2.innerHTML = contador

});

botaoDiminuir.addEventListener("click", () => {

    if (contador > 0) {
        contador--
    }

    paragrafo2.innerHTML = contador
})


// EX 3
const paragrafo3 = document.getElementById("text3")
const input = document.getElementById("inp")
const botao2 = document.getElementById("btn4")

botao2.addEventListener("click", () => {

    const inputValor = input.value

    paragrafo3.innerHTML = inputValor

    inputValor.innerHTML = ""
})


// EX 4

const paragrafo4 = document.getElementById("text4")
const input2 = document.getElementById("inp2")
const botao3 = document.getElementById("btn5")

botao3.addEventListener("click", () => {

    const inputValor = input2.value

    if (inputValor % 2 === 0) {
        paragrafo4.innerHTML = `Número ${inputValor} é PAR`
    } else {
        paragrafo4.innerHTML = `Número ${inputValor} é IMPAR`
    }

})


// EX 5
const paragrafo5 = document.getElementById("text5")
const input3 = document.getElementById("inp3")
const botao4 = document.getElementById("btn6")

botao4.addEventListener("click", () => {

    const inputValor = input3.value

    if (inputValor.length < 5) {
        paragrafo5.innerHTML = "Muito curto"
    } else if (inputValor.length > 10) {
        paragrafo5.innerHTML = "Muito longo"
    }
})

// 

const input4 = document.getElementById("inp4")
const btn7 = document.getElementById("btn7")
const lista = document.getElementById("list")


btn7.addEventListener("click", () => {

    const nome = input4.value

    if (nome === "") {
        alert("digite um nome")
        return
    }

    const li = document.createElement('li')
    li.innerHTML = nome

    const btnRemove = document.createElement("button")
    btnRemove.innerHTML = "Remover"

    btnRemove.addEventListener("click", () => {
        li.remove()
    })

    lista.appendChild(li)
    li.appendChild(btnRemove)

    input4.value = ""
})

// 

const paragrafo6 = document.getElementById("text6")
const input5 = document.getElementById("inp5")
const btn8 = document.getElementById("btn8")
const numeros = []


btn8.addEventListener("click", () => {

    const number = Number(input5.value)

    if (number.value === "") {
        alert("Digite um numero")
        return
    }

    numeros.push(number)

    let repetidos = {}

    for (let num of numeros) {

        if (repetidos[num]) {
            repetidos[num] ++
        } else {
            repetidos[num] = 1
        }
    }

    let resultados = ""

    for (let num in repetidos) {

        if (repetidos[num] > 1) {
            resultados += `Numero ${num} aparece ${repetidos[num]}`
        }
    }

    if(resultados === "") {
        resultados = "Nenhum número repetido ainda"
    }

    paragrafo6.innerHTML = resultados

    input5.value = ""

})

// 

