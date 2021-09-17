const productService = require('../services/Producto')
const { logger, loggerError, loggerWarn } = require('../logger/config')

class ProductoController {
  async listar(req, res){
    try{
      const { id } = req.params

      //Obtener Todos
      if(!id){
        const prods = await productService.getAll()
        if (prods.length === 0) {
          
           res.status(404).json({ error: 'No hay productos cargados' })
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
      res.status(500).json({error: err})
      loggerError.error(err)
    }
  }

  async guardar (req, res){
    try{
      const { title, price, thumbnail } = req.body
      const producto = await productService.save({
        title,
        price,
        thumbnail
      })
      res.json(producto)
    }catch(err){
      res.status(500).json({error: err})
      loggerError.error(err.message)
    }
  }

  async actualizar(req, res){
    try{
      let data = {}
      
      //Valido que se hayan enviado exactamente esos atributo s
      const { title, price, thumbnail } = req.body
  
      if(title) data.title = title
      if(price) data.price = price
      if(thumbnail) data.thumbnail = thumbnail
  
      const producto = await productService.update( (req.params.id), data)
  
      if(producto == null || producto == undefined){
        loggerWarn.warn('No se encontro el producto')
        return res.status(404).json({ code: 404, message: 'No se encontro el producto' })

      }
  
      return res.status(200).json(producto)
      
    }catch(err){
      res.status(500).json({error: err})
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
      res.status(500).json({error: err})
    }
  }  
}

// exporto una instancia de la clase
module.exports = new ProductoController()
