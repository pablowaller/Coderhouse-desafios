
const getNumRandom1al100 = () => parseInt(Math.random()*100) + 1

 function calcularRandoms(cant) {
      let randoms = {}
  
  
      for(let i=0; i<cant; i++) {
          let random = getNumRandom1al100()
          if(!randoms[random]) randoms[random] = 1
          else randoms[random]++
      }
  
  
      return randoms
  }
  

process.on('message', cant => {
    const numbers = calcularRandoms(cant)
    process.send(numbers) 
})



  