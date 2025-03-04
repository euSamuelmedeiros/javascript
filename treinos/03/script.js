function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('img')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = (`agora sao ${hora} horas`)
if (hora >= 0 && hora < 12) {
    img.src = ('imagens/tmanhaa.png')
}  else if (hora >= 12 && hora < 18) {
        img.src = ('imagens/ttarde.png')
} else {
    img.src = ('imagens/tnoite.png')
}
}

