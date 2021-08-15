const genRandom = ()=>{
    return Math.floor(Math.random() * 1000) + 1
  }

const getRandoms = (cant)=>{
    let numbers = []
    let i = 0
    console.log('randoms')

    while(cant > i){
      let randomNumber = genRandom()
      let number = numbers.find(number => number.numero == randomNumber )
      if ( number ){
        number.cantidad += 1
      }else{
        numbers.push({ numero: randomNumber, cantidad: 1})
      }
      i++
    }
  
    numbers.sort((a, b) => a.numero - b.numero)
    console.log(numbers)

    return numbers
}

process.on('message', cant => {
    const numbers = getRandoms(cant)
    process.send(numbers)
})



  