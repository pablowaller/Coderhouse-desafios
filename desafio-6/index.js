import Archivo from './Archivo.js'

let archivo = new Archivo('./productos.txt')

try {
  //lectura de archivo
  const data = await archivo.leer()
  console.log(data)

  //escribir archivo
  await archivo.guardar('Paraguas', 55.5, 'https://somesome.jpg')
  await archivo.guardar('Otro', 55.5, 'https://somesome.jpg')
  await archivo.guardar('Otro 2', 55.5, 'https://somesome.jpg')

  //borrar archivo
  //await archivo.borrar()
} catch (err) {
  console.log(err.message)
}
