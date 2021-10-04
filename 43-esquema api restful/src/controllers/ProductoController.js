const productService = require('../services/Product')
const { logger, loggerError, loggerWarn } = require('../logger/config')

class ProductoController {
  async listar(req, res){
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

      loggerError.error(err.message)
      res.status(500).json({error: 'Ha ocurrido un Error'})
    }
  }

  async guardar (req, res){
    try{
      const producto = await productService.save(req.body)
      res.status(201).json(producto)
    }catch(err){
      loggerError.error(err.message)
      res.status(500).json({error: 'Ha ocurrido un Error'})
    }
  }

  async actualizar(req, res){
    try{
      const producto = await productService.update( (req.params.id), req.body)
  
      if(producto == null || producto == undefined){
        loggerWarn.warn('No se encontro el producto')
        return res.status(404).json({ code: 404, message: 'No se encontro el producto' })
      }
      return res.status(200).json(producto)
      
    }catch(err){
      res.status(500).json({error: 'Ha ocurrido un Error'})
    }
    
  }

  async borrar (req, res){
    try{
      const producto = await productService.delete(req.params.id)

      if(producto == null || producto == undefined){
        loggerWarn.warn(`No se encuentra el producto con id ${req.params.id}`)
        return res.status(404).json({ code: 404, message: 'No se encontro el producto' })

      }
  
    return res.status(200).json({ message:"Se ha eliminado el producto",producto})
      
    }catch(err){
      res.status(500).json({error: 'Ha ocurrido un Error'})}
  }  
}

// exporto una instancia de la clase
module.exports = new ProductoController()
