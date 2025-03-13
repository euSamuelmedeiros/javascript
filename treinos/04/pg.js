function carregar() {
    let inicio = document.getElementById('ini')
    let fim = document.getElementById('ifim')
    let pss = document.getElementById('ipasso')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || pss.value.length == 0) {
        window.alert('[ERRO] ainda esta faltando dados ')
    } else {
        res.innerText = 'contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(pss.value)
        
        for(let c = i; c <= f; c += p) {
            res.innerHTML += `${c} `
            
        }

    }
}