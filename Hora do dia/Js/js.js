function carregar() {
    const msg = document.getElementById('msg')
    const img = document.getElementById('imagem')
    const data = new Date()
    const hora = data.getHours()
    if (hora >= 0 && hora < 12) {
        // Se determinada hora for maior ou igual a 0 e(&&)
        // determinada hora for menor que 12 então é bom dia
        img.src = 'img/manha.png'
        document.body.style.background = '#feca52'
        msg.innerHTML = `Agora são ${hora} horas, Bom dia!`     
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'img/tarde.png'
        document.body.style.background = '#cf958a'
        msg.innerHTML = `Agora são ${hora} horas, Boa tarde!`
    } else {
        img.src = 'img/noite.png'
        document.body.style.background = '#122027'
        msg.innerHTML = `Agora são ${hora} horas, Boa noite!`
    }
}
