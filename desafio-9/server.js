const express = require('express')
const morgan = require('morgan')
// creo una app de tipo express
const app = express()

app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))

//Rutas
app.use('/api/productos', require('./routes/productos'))

// Middleware para manejar errores

app.use((error, req, res, next) => {
  res.status(error.code || 400).json({ error: error.message })
})

const puerto = 8080

const server = app.listen(puerto, () => {
  console.log(`servidor escuchando en http://localhost:${puerto}`)
})

server.on('error', error => {
  console.log('error en el servidor:', error)
})
