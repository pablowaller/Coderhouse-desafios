const express = require('express')
const router = express.Router()

const productos = require('../api/productos')

router.get('/listar', (req, res, next) => {
  const prods = productos.listar()

  if (prods.length === 0) {
    next({ code: 404, message: 'No hay productos cargados' })
  }
  res.json(prods)
})

router.get('/listar/:id', (req, res, next) => {
  const { id } = req.params
  const producto = productos.obtener(Number(id))

  if (producto === undefined)
    next({ code: 404, message: 'No se encontro el producto' })
  res.json(producto)
})

router.post('/guardar', (req, res) => {
  const { title, price, thumbnail } = req.body
  const producto = productos.guardar({
    title,
    price,
    thumbnail
  })
  res.status(201).json(producto)
})

router.put('/actualizar/:id', (req, res) => {
  let data = {}

  //Valido que se hayan enviado exactamente esos atributos
  if (req.body.title) data.title = req.body.title
  if (req.body.price) data.price = req.body.price
  if (req.body.thumbnail) data.thumbnail = req.body.thumbnail

  const producto = productos.actualizar(Number(req.params.id), data)
  res.status(200).json(producto)
})

router.delete('/borrar/:id', (req, res) => {
  const productoEliminado = productos.borrar(Number(req.params.id))
  res.status(200).json(productoEliminado)
})

module.exports = router
