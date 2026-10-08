let nota = 7

if (nota >= 7) {
    console.log("Aprovado")
} else if (nota > 5 && nota <= 7) {
    console.log("Recuperação")
} else {
    console.log("Reprovado")
}

//===============

let saldo = 1000
let saque = 900

if (saldo >= saque) {
    saldo = saldo -= saque
    console.log("saque realaizado")
} else {
    console.log("saldo insuficiente")
}

console.log("seu saldo é de:", saldo)

//===============

let valorDaCompra = 250

if (valorDaCompra >= 200) {
    valorDaCompra -= valorDaCompra * 0.10
    console.log("Desconto aplicado!")
} else {
    console.log("Sem desconto.")
}

console.log("Valor final:", valorDaCompra)

//===============

let saldo01 = 1000
let saque01 = 700

if (saque01 <= 0) {
    console.log("Saldo não pode ser negativo")
} else if (saldo01 >= saque01) {
    saldo01 -= saque01
    console.log("Saque Realizado")
} else {
    console.log("Saldo invalido")
}

console.log("Novo Saldo:", saldo01)

//===============

let usuarioCadastrado = "Vinicius"
let senhaCadastrada = "1234"

let usuarioDigitado = "Vinicius"
let senhaDigitada = "1234"

if (usuarioCadastrado !== usuarioDigitado) {
    console.log("Usuario incorreto")
} else if (senhaCadastrada !== senhaDigitada) {
    console.log("Senha incorreta")
} else {
    console.log("Login realizado!")
}

//===============

let idade = 20

if (idade <= 12) {
    console.log("Criança")
} else if (idade <= 17) {
    console.log("Adolecente")
} else if (idade < 60) {
    console.log("Adulto")
} else {
    console.log("Idoso")
}

//===============

let valorCompra = 350
let cupom = "DESCONTO10"

if (valorCompra >= 300 && cupom === "DESCONTO10") {
    valorCompra -= valorCompra * 0.10
    console.log("Desconto 10% aplicado")
} else if (valorCompra >= 300 && cupom !== "DESCONTO10") {
    valorCompra -= valorCompra * 0.05
    console.log("Desconto 5% aplicado")
} else {
    console.log("Sem desconto")
}

console.log("valor da compra:", valorCompra)

//===============

let usuario = "vinicius"
let userIdade = 22
let ativo = true

if (userIdade >= 18 && !ativo) {
    console.log("Acesso negado: conta inativa.")
} else if (userIdade >= 18 && ativo) {
    console.log("Acesso permitido!")
} else {
    console.log("Acesso negado: idade insuficiente.")
}

console.log(usuario, userIdade, ativo)

//===============

let valor = 180
let distancia = 30

if (valor < 200 && distancia <= 10) {
    valor += 10
    console.log("Frete R$5")
} else if (valor < 200 && distancia > 10) {
    valor += 20
    console.log("Frete R$10")
} else {
    console.log("Frete gratis")
}

console.log(valor)

//===============

let horas = 5

if (horas <= 0) {
    console.log("Quantidade de horas inválida")
} else if (horas <= 2) {
    console.log("Horas: R$10")
} else if (horas <= 5) {
    console.log("Horas: R$20")
} else {
    console.log("Horas: R$30")
}

//===============

let notaAluno = 8
let frequencia = 80

if (notaAluno < 0 || notaAluno > 10) {
    console.log("Nota Inválida")
} else if (frequencia < 75) {
    console.log("Reprovado por falta")
} else if (notaAluno >= 7) {
    console.log("Aprovado")
} else if (notaAluno >= 5 && notaAluno <= 7) {
    console.log("Recuperação")
} else {
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

if (categoria !== "normal" && categoria !== "premium") {
    console.log("Categoria inválida")
} else if (categoria === "normal" && valorBuy >= 200) {
    console.log("Frete grátis")
} else if (categoria === "normal" && valorBuy < 200) {
    valorBuy += frete
    console.log("frete de R$20")
} else {
    console.log("Frete grátis")
}

console.log(valorBuy)

//===============

let valorCompra2 = 250
let distancia2 = 15
let tipoEntrega = "express"


if (tipoEntrega !== "normal" && tipoEntrega !== "express") {
    console.log("Tipo inválido")
} else if (tipoEntrega === "normal") {
    if (valorCompra2 >= 200) {
        console.log("frete grátis")
    } else {
        let frete = 15
        valorCompra2 += frete
    }
} else {
    if (distancia2 <= 10) {
        let frete = 25
        valorCompra2 += frete
    } else {
        let frete = 40
        valorCompra2 += frete
    }
}

console.log(valorCompra2)

//===============

let saldo1 = 1000
let saque1 = 400
let limiteSaque = 500

if (saque1 <= 0) {
    console.log("Valor inválido")
} else if (saque1 > limiteSaque) {
    console.log("Limite de saque excedido")
} else if (saque1 > saldo1) {
    console.log("Saldo insuficiente")
} else {
    console.log("Saque realizado")
    saldo1 -= saque1
}

console.log("saldo:", saldo1)

//===============

let valorCompra3 = 500
let clienteVip = true
let cupom1 = "DESCONTO10"

if (valorCompra3 >= 500) {
    if (clienteVip) {
        console.log("Desconto de 20%")
        valorCompra3 -= valorCompra3 * 0.20
    } else {
        console.log("Desconto de 10%")
        valorCompra3 -= valorCompra3 * 0.10
    }
} else if (valorCompra3 < 500 && cupom1 === "DESCONTO10") {
    valorCompra3 -= valorCompra3 * 0.10
    console.log("Desconto de 10%")
} else {
    console.log("Sem desconto")
}

console.log(valorCompra3)

//===============

function calcularDesconto(valorCompra, clienteVip, cupom) {

    if (valorCompra >= 500) {
        if (clienteVip) {
            return valorCompra -= valorCompra * 0.20
        } else {
            return valorCompra -= valorCompra * 0.10
        }
    } else if (valorCompra < 500 && cupom === "DESCONTO10") {
        return valorCompra -= valorCompra * 0.10
    } else {
        return valorCompra
    }
}

let resultado = calcularDesconto(500, true, "DESCONTO10")
console.log(resultado)

//===============

function calcularFrete(valorCompra, distancia) {

    if (valorCompra < 200) {
        if (distancia <= 10) {
            return 10
        } else {
            return 20
        }
    } else {
        return 0
    }
}

let resultadoFrete = calcularFrete(150, 15)
console.log(resultadoFrete)

//===============

function verificarAprovado(nota, frequencia) {

    if (nota < 0 || nota > 10) {
        return "Nota inválida"
    } else if (frequencia < 75) {
        return "Reprovado por falta"
    } else if (nota >= 7) {
        return "Aprovado"
    } else if (nota >= 5 || nota < 7) {
        return "Recuperação"
    } else {
        return "Reprovado"
    }
}

let resultadoNota = verificarAprovado(8, 80)
console.log("Resultado:", resultadoNota)

//===============

function fazerLogin(usuario, senha, contaAtiva) {

    if (!contaAtiva) {
        return "Conta inativa"
    } else if (usuario !== "Vinicius") {
        return "Usuário incorreto"
    } else if (senha !== "123") {
        return "Senha incorreta"
    } else {
        return "Login realizado"
    }
}

let resultadoLogin = fazerLogin("Vinicius", "123", true)
console.log(resultadoLogin)

//===============

function calcular(numero1, numero2, operacao) {

    if (operacao === "soma") {
        return numero1 + numero2
    } else if (operacao === "subtracao") {
        return numero1 - numero2
    } else if (operacao === "multiplicacao") {
        return numero1 * numero2
    } else if (operacao === "divisao") {
        if (numero2 === 0) {
            return "Não é possível dividir por zero"
        } else {
            return numero1 / numero2
        }
    } else {
        return "Operação inválida"
    }
}

let resultadoSoma = calcular(10, 5, "divisao")
console.log(resultadoSoma)

//===============

function maiorNumero(num1, num2) {

    if (num1 > num2) {
        return num1
    } else if (num1 < num2) {
        return num2
    } else {
        return "Os números são iguais"
    }
}

let maiorNumResultado = maiorNumero(10, 20)
console.log("maior numero:", maiorNumResultado)

//===============

function verificarNumero(numero) {

    if (numero > 0) {
        return "Número positivo"
    } else if (numero < 0) {
        return "Número negativo"
    } else {
        return "Número zero"
    }
}

let verificarResultado = verificarNumero(-5)
console.log(verificarResultado)

//===============

function calcularMedia(nota1, nota2, nota3) {

    let media = nota1 + nota2 + nota3
    let mediaTotal = media / 3

    if (mediaTotal >= 7) {
        return "Aprovado"
    } else if (mediaTotal >= 5 && mediaTotal < 7) {
        return "Recuperação"
    } else {
        return "Reprovado"
    }

}

let calcularMediaFinal = calcularMedia(7, 8, 6)
console.log(calcularMediaFinal)

//===============

function verificarParImpar(numero) {

    if (numero % 2 === 0) {
        return "Número par"
    } else {
        return "Número ímpar"
    }
}

let parImpar = verificarParImpar(7)
console.log(parImpar)

//===============

function maiorDetres(num1, num2, num3) {

    if (num1 > num2 && num1 > num3) {
        return num1
    } else if (num2 > num1 && num2 > num3) {
        return num2
    } else {
        return num3
    }
}

let maiorDosTres = maiorDetres(10, 25, 155)
console.log(maiorDosTres)

//===============

function verificarSenha(senha) {

    if (senha.length < 6) {
        return "Senha muito curta"
    } else {
        return "Senha válida"
    }
}

let senhaResultado = verificarSenha("123456")
console.log(senhaResultado)

//===============

function verificarCadastro(idade, documento) {

    if (idade < 18) {
        return "Cadastro negado: menor de idade"
    } else if (idade >= 18 && !documento) {
        return "Cadastro negado: documento obrigatório"
    } else {
        return "Cadastro realizado"
    }
}

let resultadoCadastro = verificarCadastro(20, true)
console.log(resultadoCadastro)

//===============

function verificarCompra(preco, estoque, clienteVip) {

    if (estoque <= 0) {
        return "Produto indisponível"
    } else if (estoque > 0 && clienteVip) {
        return preco -= preco * 0.10
    } else {
        return preco
    }
}

let resultadoCompra = verificarCompra(200, 5, true)
console.log(resultadoCompra)

//===============

function calcularDesconto(preco) {

    if (preco < 300) {
        return preco
    } else if (preco >= 300 && preco < 500) {
        return preco -= preco * 0.10
    } else {
        return preco -= preco * 0.20
    }
}

let desconto = calcularDesconto(600)
console.log(desconto)

//===============

function calcularPedido(valorCompra, clienteVip, cupom, formaPagamento) {

    if (valorCompra <= 0) {
        return "Valor inválido"
    }

    let valorFinal = valorCompra
    let frete = 20

    if (clienteVip) {
        if (valorFinal >= 500) {
            valorFinal -= valorFinal * 0.20
        } else {
            valorFinal -= valorFinal * 0.10
        }
    }

    if (!clienteVip && cupom === "DESCONTO10") {
        valorFinal -= valorFinal * 0.10
    }

    if (valorFinal < 300) {
        valorFinal += frete
    }

    if (formaPagamento === "pix") {
        valorFinal -= valorFinal * 0.05
    } else if (formaPagamento === "cartao") {
        "sem desconto"
    } else {
        return "forma de pagamento inválida"
    }

    return valorFinal

}

let resultadoPedido = calcularPedido(600, true, "DESCONTO10", "pix")
console.log(resultadoPedido)

//===============

function analisarNumeros(numeros) {

    let pares = 0
    let impares = 0
    let maior = numeros[0]
    let menor = numeros[0]
    let soma = 0

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares++
        } else {
            impares++
        }

        if (numeros[i] > maior) {
            maior = numeros[i]
        }

        if (numeros[i] < menor) {
            menor = numeros[i]
        }

        soma += numeros[i]
    }

    return {
        pares: pares,
        impares: impares,
        maior: maior,
        menor: menor,
        soma: soma
    }

}

let resultadoAnalisar = analisarNumeros([10, 5, 8, 3, 20, 7])
console.log(resultadoAnalisar)

//===============

const produtos = [
    { nome: "Teclado", preco: 150, estoque: 10 },
    { nome: "Mouse", preco: 80, estoque: 0 },
    { nome: "Monitor", preco: 900, estoque: 5 },
    { nome: "Headset", preco: 250, estoque: 3 }
]

function analisarProdutos(produtos) {

    let disponiveis = 0
    let esgotados = 0
    let maisCaro = produtos[0]
    let maisBarato = produtos[0]
    let valorTotal = 0


    for (let i = 0; i < produtos.length; i++) {
        let product = produtos[i]

        if (product.estoque > 0) {
            disponiveis++
        }

        if (product.estoque === 0) {
            esgotados++
        }

        if (product.preco > maisCaro.preco) {
            maisCaro = product
        }

        if (product.preco < maisBarato.preco) {
            maisBarato = product
        }

        valorTotal += product.preco

    }

    return {
        disponiveis: disponiveis,
        esgotados: esgotados,
        maisCaro: maisCaro,
        maisBarato: maisBarato,
        valorTotal: valorTotal
    }

}

let resultadoProdutos = analisarProdutos(produtos)
console.log(resultadoProdutos)

//===============

const pedidos = [
    {
        cliente: "Vinicius",
        valor: 350,
        status: "entregue"
    },
    {
        cliente: "Carlos",
        valor: 180,
        status: "pendente"
    },
    {
        cliente: "Ana",
        valor: 500,
        status: "entregue"
    },
    {
        cliente: "João",
        valor: 250,
        status: "cancelado"
    },
    {
        cliente: "Maria",
        valor: 700,
        status: "entregue"
    }
]

function analisarPedidos(pedidos) {

    let totalPedidos = 0
    let pedidosEntregues = 0
    let pedidosPendentes = 0
    let pedidosCancelados = 0
    let valorTotal = 0
    let maiorPedido = pedidos[0]

    for (let i = 0; i < pedidos.length; i++) {

        let pedido = pedidos[i]

        if (pedido.status === "entregue") {
            pedidosEntregues++
        }

        if (pedido.status === "pendente") {
            pedidosPendentes++
        }

        if (pedido.status === "cancelado") {
            pedidosCancelados++
        }

        if (pedido.valor > maiorPedido.valor) {
            maiorPedido = pedido
        }


        valorTotal += pedido.valor
        totalPedidos.length
    }

    return {
        totalPedidos: pedidos.length,
        pedidosEntregues: pedidosEntregues,
        pedidosPendentes: pedidosPendentes,
        pedidosCancelados: pedidosCancelados,
        valorTotal: valorTotal,
        maiorPedido: maiorPedido
    }
}

let resultadoDosPedidos = analisarPedidos(pedidos)
console.log(resultadoDosPedidos)

//===============

const produtosTech = [
    { id: 1, nome: "Teclado", categoria: "periferico", preco: 150 },
    { id: 2, nome: "Mouse", categoria: "periferico", preco: 80 },
    { id: 3, nome: "Monitor", categoria: "hardware", preco: 900 },
    { id: 4, nome: "SSD", categoria: "hardware", preco: 450 }
]


function buscarProduto(produtos, categoria) {

    let maiorPreco = null


    for (let i = 0; i < produtos.length; i++) {
        let product = produtos[i]

        if (product.categoria === categoria) {
            if (maiorPreco === null || product.preco > maiorPreco.preco) {
                maiorPreco = product
            }
        }

    }

    return maiorPreco
}

let procurarTech = buscarProduto(produtosTech, "hardware")
console.log(procurarTech)

//===============

const LojaProdutos = [
    { id: 1, nome: "Teclado", categoria: "periferico", preco: 150 },
    { id: 2, nome: "Mouse", categoria: "periferico", preco: 80 },
    { id: 3, nome: "Monitor", categoria: "hardware", preco: 900 },
    { id: 4, nome: "SSD", categoria: "hardware", preco: 450 }
]

function buscarProdutosPorPreco(produtos, precoMinimo, precoMaximo) {
    let novosProdutos = []

    for(let i = 0; i < produtos.length; i ++) {

        let produto = produtos[i]

        if(produto.preco >= precoMinimo && produto.preco <= precoMaximo) {
            novosProdutos.push(produto)
        }
    }

    return novosProdutos
}

let buscarLoja = buscarProdutosPorPreco(LojaProdutos, 100, 500)
console.log(buscarLoja)

//===============

const LojaProdutosTech = [
    { id: 1, nome: "Teclado", categoria: "periferico", preco: 150 },
    { id: 2, nome: "Mouse", categoria: "periferico", preco: 80 },
    { id: 3, nome: "Monitor", categoria: "hardware", preco: 900 },
    { id: 4, nome: "SSD", categoria: "hardware", preco: 450 }
]

function buscarTech(produtos, categoria, precoMaximo) {
    
    let produtosNovos = []

    for(let i = 0; i < produtos.length; i++) {
        let produto = produtos[i]

        if(produto.categoria === categoria && produto.preco <= precoMaximo) {
            produtosNovos.push(produto)
        }
    }

    return produtosNovos
}

let acharProdutos = buscarTech(LojaProdutosTech, "hardware", 500)
console.log(acharProdutos)

//===============

const produtosDev = [
    { id: 1, nome: "Teclado", categoria: "periferico", preco: 150, estoque: 10 },
    { id: 2, nome: "Mouse", categoria: "periferico", preco: 80, estoque: 0 },
    { id: 3, nome: "Monitor", categoria: "hardware", preco: 900, estoque: 5 },
    { id: 4, nome: "SSD", categoria: "hardware", preco: 450, estoque: 8 }
]

function buscarProdutosDev(produtos, categoria, precoMaximo, estoqueMinimo) {
    
    let produtosNovos = []

    for(let i = 0; i < produtos.length; i++) {
        let product = produtos[i]

        if(product.categoria === categoria && product.preco <= precoMaximo && product.estoque >= estoqueMinimo) {
            produtosNovos.push(product)
        }
    }

    return produtosNovos
}

let produtosDevBuscar = buscarProdutosDev(produtosDev, "hardware", 500, 5)
console.log(produtosDevBuscar)

//===============

const produtosDev2 = [
    { id: 1, nome: "Teclado", categoria: "periferico", preco: 150, estoque: 10 },
    { id: 2, nome: "Mouse", categoria: "periferico", preco: 80, estoque: 0 },
    { id: 3, nome: "Monitor", categoria: "hardware", preco: 900, estoque: 5 },
    { id: 4, nome: "SSD", categoria: "hardware", preco: 450, estoque: 8 }
]

function buscarProdutoPorNome(produtos, texto) {

    let produtosencontrados = []

    for(let i = 0; i < produtos.length; i++) {
        let product = produtos[i]

        if(product.nome.toLowerCase().includes(texto.toLowerCase())) {
            produtosencontrados.push(product)
        }
    }

    return produtosencontrados
}

let resultadoBuscar = buscarProdutoPorNome(produtosDev2, "o")
console.log(resultadoBuscar)

//===============

const produtosDev3 = [
    { id: 1, nome: "Teclado", categoria: "periferico", preco: 150, estoque: 10 },
    { id: 2, nome: "Mouse", categoria: "periferico", preco: 80, estoque: 0 },
    { id: 3, nome: "Monitor", categoria: "hardware", preco: 900, estoque: 5 },
    { id: 4, nome: "SSD", categoria: "hardware", preco: 450, estoque: 8 }
]

function buscarProduto(produtos, texto) {

    let produtosEncontrados = []

    for(let i = 0; i < produtos.length; i++) {

        let products = produtos[i]

        if(products.nome.toLowerCase().includes(texto.toLowerCase()) || products.categoria.toLowerCase().includes(texto.toLowerCase())) {
            produtosEncontrados.push(products)
        }
    }

    return produtosEncontrados

}

let resultadosDeProdutos = buscarProduto(produtosDev3, "hard")
console.log(resultadosDeProdutos)

//===============

const produtosDev4 = [
    { id: 1, nome: "Teclado", categoria: "periferico", preco: 150, estoque: 10 },
    { id: 2, nome: "Mouse", categoria: "periferico", preco: 80, estoque: 0 },
    { id: 3, nome: "Monitor", categoria: "hardware", preco: 900, estoque: 5 },
    { id: 4, nome: "SSD", categoria: "hardware", preco: 450, estoque: 8 }
]

function buscarProdutos2(produtos, texto, precoMaximo) {

    let encontrarProdutos = []

    for(let i = 0; i < produtos.length; i++) {

        let product = produtos[i]

        if(
           ( product.nome.toLowerCase().includes(texto.toLowerCase()) ||
            product.categoria.toLowerCase().includes(texto.toLowerCase())
        ) && 
            product.preco <= precoMaximo
        ) {
            encontrarProdutos.push(product)
        }
    }

    return encontrarProdutos
}

let encontrarProduto = buscarProdutos2(produtosDev4, "o", 200)
console.log(encontrarProduto)

//===============

const produtosDev5 = [
    { id: 1, nome: "Teclado", categoria: "periferico", preco: 150, estoque: 10 },
    { id: 2, nome: "Mouse", categoria: "periferico", preco: 80, estoque: 0 },
    { id: 3, nome: "Monitor", categoria: "hardware", preco: 900, estoque: 5 },
    { id: 4, nome: "SSD", categoria: "hardware", preco: 450, estoque: 8 }
]

function buscarProduto3(produtos, texto, precoMaximo, estoqueMinimo){

    let encontrarProdutos = []

    for(let i = 0; i < produtos.length; i++) {
        let product = produtos[i]

        if(
            (product.nome.toLowerCase().includes(texto.toLowerCase()) ||
            product.categoria.toLowerCase().includes(texto.toLowerCase())
        ) &&

        (product.preco <= precoMaximo)&&
        (product.estoque >= estoqueMinimo)

        ) {
            encontrarProdutos.push(product)
        }
    }

    return encontrarProdutos
}

let resultadoEncontrado = buscarProduto3(produtosDev5, "o", 500, 5)
console.log(resultadoEncontrado)

//===============

const produtosDev6 = [
    { id: 1, nome: "Teclado", categoria: "periferico", preco: 150, estoque: 10 },
    { id: 2, nome: "Mouse", categoria: "periferico", preco: 80, estoque: 0 },
    { id: 3, nome: "Monitor", categoria: "hardware", preco: 900, estoque: 5 },
    { id: 4, nome: "SSD", categoria: "hardware", preco: 450, estoque: 8 }
]

function buscarProdutoPorId(produtos, id) {

    for(let i = 0; i < produtos.length; i++) {
        let product = produtos[i]

        if(product.id === id)  {
            return product
        }
    }

    return "Produto não encontrado"
}

let buscarId = buscarProdutoPorId(produtosDev6, 3)
console.log(buscarId)

//===============

const produtosDev7 = [
    { id: 1, nome: "Teclado", categoria: "periferico", preco: 150, estoque: 10 },
    { id: 2, nome: "Mouse", categoria: "periferico", preco: 80, estoque: 0 },
    { id: 3, nome: "Monitor", categoria: "hardware", preco: 900, estoque: 5 },
    { id: 4, nome: "SSD", categoria: "hardware", preco: 450, estoque: 8 }
]

function atualizarPreco(produtos, id, novoPreco) {

    for(let i = 0; i < produtos.length; i++) {
        let product = produtos[i]

        if(product.id === id) {
            product.preco = novoPreco
            return product
        }
    }

    return "Produto não encontrado"
}

let atualizarProduto = atualizarPreco(produtosDev7, 3, 750)
console.log(atualizarProduto)

//===============

const produtosDev8 = [
    { id: 1, nome: "Teclado", categoria: "periferico", preco: 150, estoque: 10 },
    { id: 2, nome: "Mouse", categoria: "periferico", preco: 80, estoque: 0 },
    { id: 3, nome: "Monitor", categoria: "hardware", preco: 900, estoque: 5 },
    { id: 4, nome: "SSD", categoria: "hardware", preco: 450, estoque: 8 }
]


function removerProduto(produtos, id) {

    for(let i = 0; i < produtos.length; i++) {

        let product = produtos[i]

        if(product.id === id) {
            produtos.splice(i, 1)
            return "Produto removido"
        }
    }

     return "Produto não encontrado"
}

let resultadoRemove = removerProduto(produtosDev8, 4)
console.log(resultadoRemove)

//===============

function atualizarEstoque(produtos, id, novoEstoque) {

    for(let i = 0; i < produtos.length; i++) {

        let product = produtos[i]

        if(product.id === id) {
            product.estoque = novoEstoque
            return product
        }
    }

    return "Produto não encontrado"

}

let resultadoEstoque = atualizarEstoque(produtosDev8, 3, 15)
console.log("estoque atualizado:", resultadoEstoque)

//===============

function aplicarDescontoCategoria(produtos, categoria, percentual) {

    for(let i= 0; i < produtos.length; i++) {

        let product = produtos[i]

        if(product.categoria === categoria) {
            product.preco -= product.preco * (percentual / 100)
        }
    }

    return produtos
}

let resultadoDesconto = aplicarDescontoCategoria(produtosDev8, "hardware", 10)
console.log("desconto aplicado:",resultadoDesconto)

//===============

function aplicarAumentoCategoria(produtos, categoria, percentual) {

    let encontrou = false

    for(let i = 0; i < produtos.length; i++) {
        let product = produtos[i]

        if(product.categoria === categoria) {
            product.preco += product.preco * (percentual / 100)
            encontrou = true
        }
    }
    
    if(encontrou) {
        return produtos
    }

    return "Categoria não encontrada"
}

let resultadoAumento = aplicarAumentoCategoria(produtosDev8, "hardware", 10)
console.log("resultado aumentado:", resultadoAumento)