function contar() {
    let inicio = document.querySelector('input#inicio')
    let fim = document.querySelector('input#fim')
    let passo = document.querySelector('input#passo')
    let contando =document.querySelector('div#contando')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados')
    } else {
        contando.innerHTML = "Contando: <br>"
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <=0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for(let c = i; c <= f; c+=p) {
                contando.innerHTML += ` ${c} \u{1F449}`
                // Formatação de emoji no JS 
                // U+1F449 para \u{1F449} (Só funciona entre crases)
            }       
        } else {
            // Contagem regressiva
            for(let c = i; c >= f; c-=p) {
                contando.innerHTML += ` ${c} \u{1F449}`
            }         
        }
        contando.innerHTML += `\u{1F3C1}`
    }
}

