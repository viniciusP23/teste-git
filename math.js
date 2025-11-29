// Math.round() - arredonda pro mais próximo


// Rounnd()

let notas = [7.5, 5.6, 8.9, 2.5, 7]
let media = notas.reduce((a, b) => a + b / notas.length) 
console.log(Math.round(media))


if(media >= 7) {
    console.log("parabens passou de ano")
}else(
    console.log("reprovou dee ano")
)
/////

let num1 = 9.7
let num2 = 5.2
console.log(Math.round(num1))
console.log(Math.round(num2))
///

let numeros = [8.2, 4.5, 10, 5.9, 5]
let somanumeros = numeros.reduce((a, b) => a + b / numeros.length)

console.log(Math.random(somanumeros))


 