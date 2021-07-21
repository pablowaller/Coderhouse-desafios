/**
 * Desafio Entregable
 *
 * Desarrollar un servidor en nodejs que con cada requerimiento devuelva como
 * resultado un objeto con ciertos valores aleatorios.
 */

const http = require('http')

function obtenerRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

function generarPrecio() {
  return (Math.random() * (9999 - 1)).toFixed(2)
}

const server = http.createServer((req, res) => {
  res.end(
    JSON.stringify({
      id: obtenerRandom(1, 10),
      title: `Producto ${obtenerRandom(1, 10)}`,
      price: `${generarPrecio()}`,
      thumbnail: `Foto ${obtenerRandom(1, 10)}`
    })
  )
})

server.listen(4000, function () {
  console.log(`Servidor escuchando en http://localhost:${this.address().port}`)
})
