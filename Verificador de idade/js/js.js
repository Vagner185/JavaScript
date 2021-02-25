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
        if (sex[0].checked) {
            gênero = 'homem'
        } else if (sex[1].checked) {
            gênero = 'mulher'
        }
        resultado.style.textAlign = 'center'
        // Centralizando a div direto pelo JS
        resultado.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    }
}