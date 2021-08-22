const express = require('express')
const router = express.Router()

const prodController = require('../../api/ProductoController')

router.get('/listar/:id?',prodController.listar)

router.post('/guardar',prodController.guardar)

router.put('/actualizar/:id',prodController.actualizar )

router.delete('/borrar/:id',prodController.borrar )

module.exports = router
