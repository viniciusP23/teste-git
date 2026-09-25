let nota = 7

if(nota >= 7) {
    console.log("Aprovado")
}else if(nota > 5 && nota <= 7) {
    console.log("Recuperação")
}else {
    console.log("Reprovado")
}

//===============

let saldo = 1000
let saque = 900

if(saldo >= saque) {
    saldo = saldo -= saque
     console.log("saque realaizado")
}else {
    console.log("saldo insuficiente")
}

console.log("seu saldo é de:", saldo)

//===============

let valorDaCompra = 250

if(valorDaCompra >= 200) {
    valorDaCompra -= valorDaCompra * 0.10
    console.log("Desconto aplicado!")
} else {
    console.log("Sem desconto.")
}

console.log("Valor final:", valorDaCompra)

//===============

let saldo01 = 1000
let saque01 = 700

if(saque01 <= 0 ) {
    console.log("Saldo não pode ser negativo")
}else if(saldo01 >= saque01) {
    saldo01 -= saque01
    console.log("Saque Realizado")
}else {
    console.log("Saldo invalido")
}

console.log("Novo Saldo:", saldo01)

//===============

let usuarioCadastrado = "Vinicius"
let senhaCadastrada = "1234"

let usuarioDigitado = "Vinicius"
let senhaDigitada = "1234"

if(usuarioCadastrado !== usuarioDigitado) {
    console.log("Usuario incorreto")
}else if(senhaCadastrada !== senhaDigitada) {
    console.log("Senha incorreta")
}else {
    console.log("Login realizado!")
}

//===============

let idade = 20

if(idade <= 12) {
    console.log("Criança")
}else if(idade <= 17) {
    console.log("Adolecente")
}else if(idade < 60) {
    console.log("Adulto")
}else {
    console.log("Idoso")
}

//===============

let valorCompra = 350
let cupom = "DESCONTO10"
 
if(valorCompra >= 300 && cupom === "DESCONTO10") {
    valorCompra -= valorCompra * 0.10
    console.log("Desconto 10% aplicado")
}else if(valorCompra >= 300 && cupom !== "DESCONTO10") {
    valorCompra -= valorCompra * 0.05
    console.log("Desconto 5% aplicado")
}else {
    console.log("Sem desconto")
}

console.log("valor da compra:", valorCompra)

//===============

let usuario = "vinicius"
let userIdade = 22
let ativo = true

if(userIdade >= 18 && !ativo) {
    console.log("Acesso negado: conta inativa.")
}else if(userIdade >= 18 && ativo) {
    console.log("Acesso permitido!")
}else {
    console.log("Acesso negado: idade insuficiente.")
}

console.log(usuario, userIdade, ativo)

//===============

let valor = 180
let distancia = 30

if(valor < 200 && distancia <= 10) {
    valor += 10
    console.log("Frete R$5")
}else if(valor < 200 && distancia > 10) {
    valor += 20
    console.log("Frete R$10")
}else {
    console.log("Frete gratis")
}

console.log(valor)

//===============

let horas = 5

if(horas <= 0) {
    console.log("Quantidade de horas inválida")
}else if(horas <= 2) {
    console.log("Horas: R$10")
}else if(horas <= 5) {
    console.log("Horas: R$20")
}else {
    console.log("Horas: R$30")
}

//===============

let notaAluno = 8
let frequencia = 80

if(notaAluno < 0 || notaAluno > 10) {
    console.log("Nota Inválida")
}else if(frequencia < 75) {
    console.log("Reprovado por falta")
}else if(notaAluno >= 7) {
    console.log("Aprovado")
}else if(notaAluno >= 5 && notaAluno <= 7) {
    console.log("Recuperação")
}else {
    console.log("Reporvado")
}
    
//===============

let usuarioConta = "Vinicius"
let senha = "1234"
let tentativas = 2

if (tentativas >= 3) {
    console.log("Conta bloqueada")
} else if (usuarioConta !== "Vinicius") {
    console.log("Usuário inválido")
} else if (senha !== "1234") {
    console.log("Senha inválida")
} else {
    console.log("Login realizado")
}

//===============

let categoria = "normal"
let valorBuy = 150
let frete = 20

if(categoria !== "normal" && categoria !== "premium") {
    console.log("Categoria inválida")
}else if(categoria === "normal" && valorBuy >= 200) {
    console.log("Frete grátis")
}else if(categoria === "normal" && valorBuy < 200) {
    valorBuy += frete
    console.log("frete de R$20")
}else {
    console.log("Frete grátis")
}

console.log(valorBuy)

//===============

let valorCompra2 = 250
let distancia2 = 15
let tipoEntrega = "express"


if(tipoEntrega !== "normal" && tipoEntrega !== "express") {
    console.log("Tipo inválido")
}else if(tipoEntrega === "normal") {
    if(valorCompra2 >= 200) {
        console.log("frete grátis")
    }else {
        let frete = 15
        valorCompra2 += frete
    }
}else {
    if(distancia2 <= 10) {
        let frete = 25
        valorCompra2 += frete
    }else {
        let frete = 40
        valorCompra2 += frete
    }
}

console.log(valorCompra2)

//===============

let saldo1 = 1000
let saque1 = 400
let limiteSaque = 500

if(saque1 <= 0) {
    console.log("Valor inválido")
}else if(saque1 > limiteSaque) {
    console.log("Limite de saque excedido")
}else if(saque1 > saldo1) {
    console.log("Saldo insuficiente")
}else {
    console.log("Saque realizado")
    saldo1 -= saque1
}

console.log("saldo:", saldo1)

//===============

let valorCompra3 = 500
let clienteVip = true
let cupom1 = "DESCONTO10"

if(valorCompra3 >= 500) {
    if(clienteVip) {
        console.log("Desconto de 20%")
        valorCompra3 -= valorCompra3 * 0.20
    }else {
        console.log("Desconto de 10%")
        valorCompra3 -= valorCompra3 * 0.10
    }
} else if(valorCompra3 < 500 && cupom1 === "DESCONTO10") {
    valorCompra3 -= valorCompra3 * 0.10
    console.log("Desconto de 10%")
}else {
    console.log("Sem desconto")
}

console.log(valorCompra3)

//===============

function calcularDesconto(valorCompra, clienteVip, cupom) {
    
    if(valorCompra >= 500) {
        if(clienteVip) {
            return valorCompra -= valorCompra * 0.20
        }else {
            return valorCompra -= valorCompra * 0.10
        }
    }else if(valorCompra < 500 && cupom === "DESCONTO10") {
        return valorCompra -= valorCompra * 0.10
    }else {
        return valorCompra
    }
}

let resultado = calcularDesconto(500, true, "DESCONTO10")
console.log(resultado)

//===============

function calcularFrete(valorCompra, distancia) {

    if(valorCompra < 200) {
        if(distancia <= 10) {
            return 10
        }else {
            return 20
        }
    }else {
        return 0
    }
}

let resultadoFrete = calcularFrete(150, 15)
console.log(resultadoFrete)

//===============

function verificarAprovado(nota, frequencia) {

    if(nota < 0 || nota > 10) {
        return "Nota inválida"
    }else if(frequencia < 75) {
        return "Reprovado por falta"
    }else if(nota >= 7) {
        return "Aprovado"
    }else if(nota >= 5 || nota < 7) {
        return "Recuperação"
    }else {
        return "Reprovado"
    }
}

let resultadoNota = verificarAprovado(8, 80)
console.log("Resultado:", resultadoNota)

//===============

function fazerLogin(usuario, senha, contaAtiva) {

    if(!contaAtiva) {
        return "Conta inativa"
    }else if(usuario !== "Vinicius") {
        return "Usuário incorreto"
    }else if(senha !== "123") {
        return "Senha incorreta"
    }else {
        return "Login realizado"
    }
}

let resultadoLogin = fazerLogin("Vinicius", "123", true)
console.log(resultadoLogin)

//===============

function calcular(numero1, numero2, operacao) {

    if(operacao === "soma") {
        return numero1 + numero2
    }else if(operacao === "subtracao") {
        return numero1 - numero2
    }else if(operacao === "multiplicacao") {
        return numero1 * numero2
    }else if(operacao === "divisao") {
        if(numero2 === 0) {
            return "Não é possível dividir por zero"
        }else {
            return numero1 / numero2
        }
    }else {
        return "Operação inválida"
    }
}

let resultadoSoma = calcular(10, 5, "divisao")
console.log(resultadoSoma)

//===============