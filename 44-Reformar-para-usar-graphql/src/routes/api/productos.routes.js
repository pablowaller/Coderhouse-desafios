const express = require('express')
const router = express.Router()
const productService = require('../../services/Product')
const logger = require('../../logger/config')
const { saveProductValidator, updateProductValidator} = require('../../middleware/validateSchemas')

router.get('/:id?', async (req, res) => {
    try{
        const { id } = req.params
        //Obtener Todos
        if(!id){
          const prods = await productService.getAll()
          if (prods.length === 0) {
             return res.status(404).json({ error: 'No hay productos cargados' })
          }
          
          logger.info('Se retornaron productos')
          return res.json(prods)
        } 
        //Obtener Uno
        const producto = await productService.getById(id)
    
        if (producto === undefined || producto === null) 
          return res.status(404).json({ code: 404, message: 'No se encontro el producto' })
    
        return res.json(producto)
  
      }catch(err){
        logger.error(err.message)
        res.status(500).json({error: 'Ha ocurrido un Error'})
      }
})

router.post('/', saveProductValidator, async ( req, res ) => {
    try{
        const producto = await productService.save(req.body)
        res.status(201).json(producto)
      }catch(err){
        logger.error(err.message)
        res.status(500).json({error: 'Ha ocurrido un Error'})
      }
})

router.put('/:id', updateProductValidator, async (req, res) =>{
    try{
        const producto = await productService.update( (req.params.id), req.body)
    
        if(producto == null || producto == undefined){
          logger.warn('No se encontro el producto')
          return res.status(404).json({ code: 404, message: 'No se encontro el producto' })
        }
        return res.status(200).json(producto)
        
      }catch(err){
        res.status(500).json({error: 'Ha ocurrido un Error'})
      }
} )

router.delete('/:id', async (req, res) => {
    try{
        const producto = await productService.delete(req.params.id)
  
        if(producto == null || producto == undefined){
          logger.error(`No se encuentra el producto con id ${req.params.id}`)
          return res.status(404).json({ code: 404, message: 'No se encontro el producto' })
  
        }
    
      return res.status(200).json({ message:"Se ha eliminado el producto",producto})
        
      }catch(err){
        res.status(500).json({error: 'Ha ocurrido un Error'})
    }
} )

module.exports = router
