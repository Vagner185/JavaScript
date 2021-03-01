function verificar() {
    const data = new Date()
    const ano = data.getFullYear()
    //getFullYear (pega os 4 digitos do ano, ex:2021)
    const fano = document.getElementById('txtano')
    const resultado = document.querySelector('div#resultado')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        let sex = document.getElementsByName('radsex')
        let idade = ano - fano.value
        let gênero = ''
        let img = document.createElement('img')
        // Cria uma tag
        img.setAttribute('id', 'foto')
        // cria uma id para foto
        if (sex[0].checked) {
            gênero = 'homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'img/foto-bebe-m.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'img/foto-jovem-m.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/foto-adulto-m.png')
            } else {
                // Idoso
                img.setAttribute('src', 'img/foto-idoso-m.png')
            }
        } else if (sex[1].checked) {
            gênero = 'mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'img/foto-bebe-f.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'img/foto-jovem-f.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/foto-adulto-f.png')
            } else {
                // Idoso
                img.setAttribute('src', 'img/foto-idoso-f.png')
            }
        }
        resultado.style.textAlign = 'center'
        // Centralizando a div direto pelo JS
        resultado.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        resultado.appendChild(img)
        // appendChild(img) Necessário para fazer as imagens aparecerem
        // Imagens referentes ao (img.setAttribute)
        // appendChild Adciona um elemento
    }
}