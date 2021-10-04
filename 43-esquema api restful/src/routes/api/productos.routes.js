const express = require('express')
const router = express.Router()

const prodController = require('../../controllers/ProductoController')
const { saveProductValidator, updateProductValidator} = require('../../middleware/validateSchemas')

router.get('/listar/:id?',prodController.listar)

router.post('/guardar', saveProductValidator, prodController.guardar)

router.put('/actualizar/:id',updateProductValidator, prodController.actualizar )

router.delete('/borrar/:id',prodController.borrar )

module.exports = router
