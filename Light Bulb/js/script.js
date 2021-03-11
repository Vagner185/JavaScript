let ligarDesligar = document.getElementById('ligar-desligar')
let bulb = document.getElementById('bulb')
let body = document.querySelector('body')

ligarDesligar.addEventListener('click', ligouDesligou)
bulb.addEventListener('dblclick', quebrou)

function isQuebrada() {
    return bulb.src.indexOf('quebrada') > -1
}

function ligou() { 
    if ( !isQuebrada() ) {
        bulb.src = 'img/ligada.png'
    }  
}

function desligou() { 
    if ( !isQuebrada() ) {
        bulb.src = 'img/desligada.png'
    }  
}

function quebrou() {
    if ( !isQuebrada() ) {
        bulb.src = 'img/quebrada.png'
    } 
}

function ligouDesligou() {
    if ( !isQuebrada() )
    if (ligarDesligar.textContent == 'Turn On') {
        ligou()
        ligarDesligar.textContent = 'Turn Of'
        ligarDesligar.style.background = '#ffe700'
        body.style.background = '#feffae'
    } else {
        desligou()
        ligarDesligar.textContent = 'Turn On'
        ligarDesligar.style.background = ''
        body.style.background = ''
    }
}







