function contar() {
   let ini = document.getElementById('inc')
   let fim = document.getElementById('Fim')
   let passo = document.getElementById('ipss')
   let res = document.getElementById('res')

   if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    window.alert('[ERRO] faltam dados')
   } else  { 
      res.innerText = 'contando:  ' 
      let i = Number(ini.value)
      let f = Number(fim.value)
      let p = Number(passo.value)

      for(let t = i; t <= f; t += p) {
        res.innerHTML += `${t} `
      }
 }

      
      
   } 



