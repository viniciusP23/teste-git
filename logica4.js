const produtos = [
    { nome: "Camiseta", preco: 50, categoria: "roupa" },
    { nome: "Calça", preco: 120, categoria: "roupa" },
    { nome: "Notebook", preco: 3000, categoria: "eletronico" },
    { nome: "Mouse", preco: 80, categoria: "eletronico" },
]

function listarProdutos() {

    const filtrar100 = produtos.filter(produto => produto.preco > 100)
    const nomes = produtos.map(nomes => nomes.nome)
    const somatotal = produtos.reduce((acc, crr) => {
        return acc + crr.preco
    }, 0)

    const abaixoDe20 = produtos.some(p => p.preco < 20)
    const acimade10 = produtos.every(p => p.preco > 10)

    console.log("produtos acima de 100:", filtrar100)
    console.log("nomes:", nomes)
    console.log("soma Total:", somatotal)
    console.log("abaixo de 20", abaixoDe20)
    console.log("acima de 10", acimade10)

}

console.log(listarProdutos())

///

const alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "Carlos", nota: 5 },
    { nome: "João", nota: 9 },
    { nome: "Marina", nota: 4 }
]

function notasDosAlunos() {

    const aprovados = alunos.filter(apro => apro.nota >= 7)
    const reprovados = alunos.filter(aluno => aluno.nota < 7).map(aluno => aluno.nome)
    const media = alunos.reduce((acc, crr) => acc + crr.nota, 0) / alunos.length
    const maiorNota = alunos.reduce((acc, crr) =>
        acc.nota > crr.nota ? acc : crr
    )

    console.log("aprovados:", aprovados)
    console.log("reprovados", reprovados)
    console.log("media total:", media)
    console.log("maior nota:", maiorNota)
}

console.log(notasDosAlunos())

///

const mercado = [
    {nome: "Camiseta", preco: 50, quantidade: 2},
    {nome: "Boné", preco: 70, quantidade: 5},
    {nome: "Shorst", preco: 120, quantidade: 7},
    {nome: "Meia", preco: 20, quantidade: 3}
]

function carrinhoDeCompras() {




}

console.log(carrinhoDeCompras())