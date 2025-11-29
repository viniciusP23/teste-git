// OBJETOS

const pessoa = {
    nome: "vinicius",
    idade: 24,
    profissao: "programador",
    // Objetos dentro de objetos
    endereco: {
        cidade: "Chavantes",
        rua: "farid bassit"
    },

    // Métodos (funções dentro de objetos)
    falar() {
        console.log(`olá meu nome é ${this.nome}`)
    }

    
}

console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa["idade"])

pessoa.falar()



////////

// literal
const pessoa1 = new Object()

pessoa1.nome = "ana clara"
pessoa1.sobreNome = "pereira"

pessoa1.falarNome = function() {
    console.log(`${this.nome} está falando seu nome.`)
}

console.log(pessoa1.nome, pessoa1.sobreNome)
pessoa1.falarNome()
////////

const pessoa2 = new Object()
pessoa2.name = "vinicius"
pessoa2.idade = 24

pessoa2.estouFalando = function() {
    return(`${this.name} idade ${this.idade}`)
}

pessoa2.getNascimento = function() {
    const dataAtual = new Date()
    return(dataAtual.getFullYear() - this.idade) 
}
console.log(pessoa2.getNascimento())
pessoa2.estouFalando()

///////////

const pessoa3 = new Object()

pessoa3.nome = "vinicius pereira"
pessoa3.idade = 24
pessoa3.endereco = "farid bassit 364"

pessoa3.falarDescricao = function() {
    return(`meu nome é ${this.nome} tenho ${this.idade} e moro na ${this.endereco}`)
}

console.log(pessoa3.falarDescricao())

pessoa3.calYear = function() {
    const verData = new Date()
    return( verData.getFullYear() - this.idade)
}

console.log(pessoa3.calYear())

for(let chave in pessoa3) {
    console.log(chave)
}

////////////////////////

