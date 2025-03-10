function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = (`Agora sao ${hora} horas`)
    
    if (hora >= 0 && hora < 12) {
        img.src = ()
    }
    
}