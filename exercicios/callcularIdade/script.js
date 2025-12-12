
function carregar() {
    let msg = document.getElementById("msg")
    let img = document.getElementById("imagem")
    let date = new Date()
    let hora = date.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12) {
        img.src = "./img/dia.jpg"
        document.body.style.background = "#eede87ff"
    } else if(hora >= 12 && hora <= 18) {
        img.src = "./img/tarde.jpg"
        document.body.style.background = "#c4b001ff"
    }else {
        img.src = "./img/noite.jpg"
        document.body.style.background = "#21158fff"
    }
}