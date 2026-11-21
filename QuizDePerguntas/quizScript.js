const perguntas = [
    {
        pergunta: "Qual linguagem utilizamos para manipular páginas web?",
        alternativas: [
            "Python", "JavaScript", "C++", "Java"
        ],
        resposta: "JavaScript"
    },

    {
        pergunta: "O que significa a sigla 'HTML' no desenvolvimento web?",
        alternativas: [
            "HyperText Markup Language", "HighText Machine Language",
            "HyperTool Multi Language", "Home Tool Markup Language"
        ],
        resposta: "HyperText Markup Language"
    },

    {
        pergunta: "Qual código de status HTTP indica que uma requisição foi bem-sucedida e um novo recurso foi criado no servidor?",
        alternativas: [
            "200 OK", "201 Created", "204 No Content", "400 Bad Request"
        ],
        resposta: "201 Created"
    }
]


const respostaUsuarios = [
    "JavaScript", "HyperText Markup Language", "201 Created"
]



function verificarResposta(indice, resposta) {
    return perguntas[indice].resposta === resposta
}

let pontuacao = 0

for (let i = 0; i < perguntas.length; i++) {
    
    
    if (verificarResposta(i, respostaUsuarios[i])) {
        pontuacao++
    }

    console.log(perguntas[i].pergunta)

}

if(pontuacao === 3) {
    console.log("Excelente!")
}else if(pontuacao === 2) {
    console.log("Muito bem!")
}else if(pontuacao === 1) {
    console.log("Precisa praticar!")
}else {
    console.log("Não desista!")
}

console.log(`Pontuacao: ${pontuacao}/${perguntas.length}`)
console.log(pontuacao)