function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = (`Agora sao ${hora} horas`)
    if (hora >= 0 && hora < 12) {
        img.src = ('imagens/tmanhaa.png')
    }else if (hora >= 12 && hora < 18) {
        img.src = ('imagens/ttarde.png')
    } else {
        img.src = ('imagens/tnoite.png')
    }
    
}