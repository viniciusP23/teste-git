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