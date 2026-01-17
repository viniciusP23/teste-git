const compras = []

function caixa() {
  const inputNome = document.getElementById("compras")
  const nome = inputNome.value.trim()

  if (nome === "") {
    alert("Preencha os dados")
    return
  }

  compras.push({ nome, feito: false })
  inputNome.value = ""

  renderizarCompras()
}

function renderizarCompras() {
  const lista = document.getElementById("lista")
  const comprados = document.getElementById("comprados")

  lista.innerHTML = ""
  let feitos = 0

  compras.forEach((compra, index) => {
    if (compra.feito) feitos++

    lista.innerHTML += `
      <li>
        <input 
          type="checkbox"
          ${compra.feito ? "checked" : ""}
          onchange="alternarCompra(${index})"
        />

        <span class="${compra.feito ? "feito" : ""}">
          ${compra.nome}
        </span>

        <button onclick="deletarCompra(${index})">❌</button>
      </li>
    `
  })

  comprados.textContent = `${feitos} de ${compras.length}`
}

function alternarCompra(index) {
  compras[index].feito = !compras[index].feito
  renderizarCompras()
}

function deletarCompra(index) {
  compras.splice(index, 1)
  renderizarCompras()
}
