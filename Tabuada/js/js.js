function tabuada() {
    let num = document.getElementById('num')
    let seltab1 = document.getElementById('seltab1')
    let seltab2 = document.getElementById('seltab2')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número')      
    } else {
        let n = Number(num.value)
        seltab1.innerHTML = '' // Antes mostrar uma tabuada, limpa a anterior
        seltab2.innerHTML = ''
        for(let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            // Cria uma option dentro do select no html
            item.text = `${n} x ${c} = ${n*c}`
            seltab1.appendChild(item)
        }
        for(let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} + ${c} = ${n+c}`
            seltab2.appendChild(item)
        }
    }
    
}
