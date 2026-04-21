const input = document.getElementById("inp-to-do")
const btnAdd = document.getElementById("add-tarefa")
const lista = document.getElementById("list")

btnAdd.addEventListener("click", () => {

    const inputValue = input.value

    if(inputValue === "") return

    input.value = ""

    const li = document.createElement("li")
    li.innerHTML = inputValue

    lista.appendChild(li)

    const btnRemove = document.createElement("button")
    btnRemove.innerHTML = "remover"

    btnRemove.addEventListener("click", () => {
        li.remove()
    })

    li.appendChild(btnRemove)

    li.addEventListener("click", () => {
        li.classList.toggle("feito")
    })

})

const btn = document.getElementById("toggleTema")

btn.addEventListener("click", () => {

    document.body.classList.toggle("dark")
})

// 

