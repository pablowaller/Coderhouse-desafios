
const operacion = async ( number1 : number, number2: number,operation:string) => {
    try{
        //extraigo el modulo que corresponda y retorno la clase
        const operationClass = await import(`./operaciones/${operation}`)

        //Creo una nueva instancia de la clase ya extraida
        let operationInstance = new operationClass.default(number1,number2)
        
        //devuelvo el resultado
        return  operationInstance.resultado()

    }catch(err){
        throw err
    }
    
}


 const operaciones = async  () => {

    const res1 = await operacion( 10, 30, 'suma')
    const res2 = await operacion(5,40, 'resta')
    const res3 = await operacion(15,35, 'suma')
    const res4 = await operacion(5,10, 'resta')
   
    return  `
    Resultado 1:${res1}
    Resultado 2: ${res2}
    Resultado 3: ${res3}
    Resultado 4: ${res4}
                `
}


 operaciones().then(res => console.log(res))