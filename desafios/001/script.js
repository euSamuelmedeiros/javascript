function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora sao ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/tmanhaa.png'
        document.body.style.background = '#ffcfcd'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/ttarde.png'
        document.body.style.background = '#df7e46'
    } else {
        img.src = 'imagens/tnoite.png'
        document.body.style.background = '#4695df'

    }
}
    
    
    
    
    
    
    
 