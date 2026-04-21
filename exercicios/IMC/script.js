const calcular = document.getElementById("calcular")


calcular.addEventListener("click", () => {

    const nome = document.getElementById("nome").value
    const altura = document.getElementById("altura").value
    const peso = document.getElementById("peso").value
    const resultado = document.getElementById("resultado")

    if (nome !== "" && altura !== "" && peso !== "") {

        const valorIMC = (peso / (altura * altura)).toFixed(2)

        let classificacao = ""

        if (valorIMC < 18.5) {
            classificacao = "Abaixo do peso normal"
        } else if (valorIMC < 25) {
            classificacao = "Peso normal"
        } else if (valorIMC < 30) {
            classificacao = "Excesso de peso"
        } else if (valorIMC < 35) {
            classificacao = "Obesidade classe I"
        } else if (valorIMC < 40) {
            classificacao = "Obesidade classe II"
        } else {
            classificacao = "Obesidade class III"
        }

        resultado.innerHTML = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`

    } else {
        resultado.innerHTML = "Preencha todos os campos"
    }
})