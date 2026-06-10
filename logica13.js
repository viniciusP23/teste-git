const carrinho = [
  { nome: "Mouse", preco: 80, estoque: 5},
  { nome: "Teclado", preco: 120, estoque: 2},
  { nome: "Monitor", preco: 900, estoque: 0}
]

let total = 0
let maisCaro = 0


for(let i = 0; i < carrinho.length; i++) {
    const num = carrinho[i]

    total += num.preco

    if(num.preco > maisCaro) {
        maisCaro = num.preco
    }

    if(num.estoque === 0) {
        console.log("Produto indisponível")
    }else {
        console.log("Produto disponível")
    }
}

const acimaDe100 = carrinho.filter(n => n.preco > 100)
const desconto = carrinho.map(n => n.preco * 0.90)


console.log(desconto)
console.log(acimaDe100)
console.log(maisCaro)
console.log(total)

// 


function aplicarcupom(total, cupom) {

    if(cupom === "DESC10") {
        return total  - (total * 0.10)
    }

    if(cupom === "DESC20") {
        return total - (total * 0.20)
    }

    return total

}

console.log(aplicarcupom(200, "DESC10"))
console.log(aplicarcupom(200, "DESC20"))

///////////////


const produtos = document.querySelectorAll(".valor")
const totalTexto = document.getElementById("total")
const carteira = document.getElementById("carteira")

let totalProdutos = 0

produtos.forEach(produto => {
    produto.addEventListener("click", () => {

        totalProdutos += Number(produto.value)
        const saldo = carteira.value
        
        if(totalProdutos > saldo) {
            alert("saldo insuficiente")
            return
        }

        totalTexto.textContent = `Saldo: R$${totalProdutos}`
    })
})

// 

const additem = document.getElementById("addItem")
const btnAdd = document.getElementById("adicionar")
const itens = document.getElementById("itens")

btnAdd.addEventListener("click", () => {

    const adicionar = additem.value

    if(adicionar === "") {
        alert("preencha o campo")
        return
    }

    const li = document.createElement("li")

    li.textContent = adicionar

    li.addEventListener("click", () => {
        li.remove()
    })

    itens.appendChild(li)
    additem.value = ""
})

// 


const btnCompras = document.querySelectorAll(".cart")
const caixa = document.getElementById("caixa")
const inputSaldo = document.getElementById('saldo')

let caixaTotal = 0

const btnPagar = document.createElement("button")
btnPagar.textContent = "pagar"
document.body.appendChild(btnPagar)

btnCompras.forEach(produto => {

    produto.addEventListener("click", () => { 

        caixaTotal += Number(produto.value)
      
        caixa.textContent = `Caixa: $${caixaTotal}`

    })
})

btnPagar.addEventListener("click", () => {

    let minhaCarteira = Number(inputSaldo.value)

    if(minhaCarteira >= caixaTotal) {
        
        minhaCarteira -= caixaTotal

        inputSaldo.value = minhaCarteira

        caixaTotal = 0

        caixa.textContent = "Caixa: 0"
    }else {
        alert("Saldo insuficiente!")
    }

})

