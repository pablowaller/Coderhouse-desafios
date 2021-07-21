/**
 * Plantilla base para el desafio entregable de Javascript asincrono
 *
 * Desarrollar una función que permita recorrer un texto que se le pase como parámetro
 * y muestre cada una de sus palabras en un tiempo estipulado.
 * Al finalizar debe ejecutar una función que se le pasa como callback.
 *
 * Realizar tres llamadas a la función con porciones de texto que tienen que ser
 * representados en forma ordenada. Inicialmente todas las palabras del primero,
 * luego las del segundo y finalmente las del tercero.
 *
 * Hacer configurable el tiempo de representación de palabras mediante un parámetro opcional.
 * Si este no se define será cada un segundo.
 *
 * Al finalizar el la operación completa debe imprimir: ‘proceso completo’ y también mostrar
 * la cantidad de palabras totales
 * Aclaracion: no usar variables globales y clases y ejecutar con NodeJS (no tsc)
 */

// funcion de espera
const esperar = ret => {
  var start = new Date().getTime()
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > ret) {
      break
    }
  }
}

const esperar2 = ret => {
  return new Promise(resolve => {
    setTimeout(resolve, ret)
  })
}
// muestra las palabras en orden a partir de un texto

async function mostrarPalabras(
  texto,
  tiempo = 1000,
  cantidadPalabras,
  callback
) {
  let error = null
  const palabras = texto.split(' ')

  for (let i = 0; i < palabras.length; i++) {
    await esperar2(tiempo).then(console.log(palabras[i]))
  }

  const totalPalabras = cantidadPalabras + palabras.length

  callback(error, totalPalabras)
}

let texto1 = 'primer texto'
let texto2 = 'curso backend de coderhouse'
let texto3 = 'probando llamadas sincronas en nodejs'
const tiempo = 500

mostrarPalabras(texto1, tiempo, 0, (error, totalPalabras) => {
  if (error) {
    return console.error(error)
  }
  mostrarPalabras(texto2, undefined, totalPalabras, (error, totalPalabras) => {
    if (error) {
      return console.error(error)
    }
    mostrarPalabras(texto3, 2000, totalPalabras, (error, totalPalabras) => {
      if (error) {
        return console.error(error)
      }
      console.log('Proceso terminado, cantidad de palabras:', totalPalabras)
    })
  })
})

console.log('some')
