var idade = 22
   console.log(`vc tem ${idade} anos.`)  
  if (idade < 16) {
 console.log('vc ainda nao vota')      
 } else if (idade < 18 || idade > 67) {
 console.log('seu voto é opcional')
  } else if (idade >= 18) {
   console.log('o seu voto é obrigatorio')
      }