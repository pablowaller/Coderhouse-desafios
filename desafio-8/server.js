const express = require('express')
const productos = require('./api/productos')

// creo una app de tipo express
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api/productos/listar', (req, res) => {
  const prods = productos.listar()

  if (prods.length === 0) {
    throw new Error('No hay productos cargados')
  }
  res.json(prods)
})

app.get('/api/productos/listar/:id', (req, res) => {
  const { id } = req.params
  const producto = productos.obtener(Number(id))

  if (producto === undefined) throw new Error('producto no encontrado')

  res.json(producto)
})

app.post('/api/productos/guardar', (req, res) => {
  const { title, price, thumbnail } = req.body
  const producto = productos.guardar({
    title: title,
    price: price,
    thumbnail: thumbnail
  })
  res.status(201).json(producto)
})

// Middleware para manejar errores

app.use((error, req, res, next) => {
  res.status(400).json({ error: error.message })
})

// pongo a escuchar el servidor en el puerto indicado
const puerto = 8080

const server = app.listen(puerto, () => {
  console.log(`servidor escuchando en http://localhost:${puerto}`)
})

// en caso de error, avisar
server.on('error', error => {
  console.log('error en el servidor:', error)
})
