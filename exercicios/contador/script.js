let contador = 0

function atualizarTabela() {
    const valor = document.getElementById("valor")
    valor.innerText = contador
}

function somar() {
    if(contador < 10) {
        contador++
        atualizarTabela()
    }

    if(contador === 10) {
        alert("passou de 10")
    }
}

function subtrair() {
    if(contador > 0) {
        contador--
        atualizarTabela()
    }
}
