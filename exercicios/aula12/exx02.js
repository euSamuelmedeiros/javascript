var agora = new Date()
var horas = agora.getHours()
console.log(`agora sao exatamente ${horas} horas.`)
if (horas >= 6 && horas < 12) {
    console.log('bom dia')
} else if (horas >= 13 && horas < 18) {
    console.log('boa tarde')
} else if (horas >= 19 && horas < 24) {
    console.log('boa noite')
} else {
    console.log('é de madrugada')
}


