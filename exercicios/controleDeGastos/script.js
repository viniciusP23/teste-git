
const gastos = []
const limite = 500

function adicionarGasto() {
    const nomeInput = document.getElementById("nome")
    const valorInput = document.getElementById("valor")

    const nome = nomeInput.value
    const valor = Number(valorInput.value)

    if (nome === "" || valor <= 0) {
        alert("Preencha os dados corretamente!")
        return
    }

    gastos.push({ nome, valor })

    nomeInput.value = ""
    valorInput.value = ""

    rederizarGastos()
}

function rederizarGastos() {
    const lista = document.getElementById("lista")
    const totalSpan = document.getElementById("total")

    lista.innerHTML = ""
    let total = 0

    gastos.forEach((gasto, index) => {
        total += gasto.valor

        lista.innerHTML += `
        
        <li>
            ${gasto.nome} - R$ ${gasto.valor}
            <button onclick="removerGastos(${index})">❌</button>
        </li>
        `
    })

    totalSpan.textContent = total.toFixed(2)

    if (total > limite) {
        totalSpan.style.color = "red"
    } else {
        totalSpan.style.color = "green"
    }

}

function removerGastos(index) {
    gastos.splice(index, 1)
    rederizarGastos()
}


