const habitos = []

function adicionarHabito() {
    const input = document.getElementById("habito")
    const nome = input.value.trim()

    if(nome === "") {
        alert("Digite um Hábito")
        return
    }

    habitos.push({nome, feito: false})
    input.value = ""

    redenrizarHabitos()
}

function redenrizarHabitos() {
    const lista = document.getElementById("lista")
    const progresso = document.getElementById("progresso")

    lista.innerHTML = ""
    let feitos = 0

    habitos.forEach((habito, index) => {
        if(habito.feito) feitos++

        lista.innerHTML += `
        
        <li>
            <input type="checkbox"
            ${habito.feito ? "checked" : ""}
            onchange="alternarHabito(${index})"/>
            ${habito.nome}
            <button onclick="deletarHabito(${index})">❌</button>
        </li>
        `
    })

    progresso.textContent = `${feitos} de ${habitos.length} concluídos`
}

function alternarHabito(index) {
    habitos[index].feito = !habitos[index].feito
    redenrizarHabitos()
}

function deletarHabito(index) {
    habitos.splice(index, 1)
    redenrizarHabitos()
}