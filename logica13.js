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