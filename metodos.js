// * chartArt = pega um caractere

console.log("java".charAt(2))
console.log("vinicius".charAt(4))

// *  includes = verifica se contém
console.log("frontEnd".includes("End"))
console.log("frontEnd".includes("beck"))

// * indexOf = retorna a posição
console.log("vinicius".indexOf("u"))

// * splice = corta a parte da string
console.log("javaScript".slice(0, 4))
console.log("vinicius".slice(0, 5))

// * replace = substitui
console.log("vinicius pereira".replace("ana clara"))


// MÉTODOS DE ARRAY

// * push = adiciona no final
let a = [1, 2]
a.push(3)
console.log(a)

let b = [1, 2, 3]
b.push(4)
console.log(b)

// * pop = remove o último

let num1 = [1, 2, 3, 4, 5, 6]
num1.pop()
console.log(num1)

/////

console.log("vinicius".length)
console.log("vinicius".toLocaleUpperCase())
console.log("javaScript".slice(4))
console.log("vinicius".includes("pereira"))
console.log("vinicius".replace("pereira"))

////////

let colocarPush = [1, 2, 3, 4]
colocarPush.push(5)
console.log(colocarPush)

let tirarPush = [1, 2, 3, 4, 5, 6, 7]
tirarPush.pop()
console.log(tirarPush)

let colocaNumero = [1, 2, 3, 4, 5]
colocaNumero.unshift(0)
console.log(colocaNumero)

