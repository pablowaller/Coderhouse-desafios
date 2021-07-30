const productModel = require('../models/Producto')

class ProductoController {
  constructor(model) {
    this.model = model
  }

  async listar(req, res){
    try{
      const { id } = req.params

      //Obtener Todos
      if(!id){
        const prods = await productModel.getAll()
        if (prods.length === 0) {
           res.status(404).json({ error: 'No hay productos cargados' })
        }
    
        return res.json(prods)
      } 

      //Obtener Uno
      const producto = await productModel.get(id)
  
      if (producto === undefined || producto === null) 
        return res.status(404).json({ code: 404, message: 'No se encontro el producto' })
  
      return res.json(producto)

    }catch(err){
      res.status(500).json({error: err})
    }
  }

  async guardar (req, res){
    try{
      const { title, price, thumbnail } = req.body
      const producto = await productModel.save({
        title,
        price,
        thumbnail
      })
      res.json(producto)
    }catch(err){
      res.status(500).json({error: err})
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
  
      const producto = await productModel.update( (req.params.id), data)
  
      if(producto == null || producto == undefined)
        return res.status(404).json({ code: 404, message: 'No se encontro el producto' })
  
      return res.status(200).json(producto)
      
    }catch(err){
      res.status(500).json({error: err})
    }
    
  }

  async borrar (req, res){
    try{
      const producto = await productModel.delete(req.params.id)

      if(producto == null || producto == undefined)
      return res.status(404).json({ code: 404, message: 'No se encontro el producto' })
  
    return res.status(200).json({ message:"Se ha eliminado el producto",producto})
      
    }catch(err){
      res.status(500).json({error: err})
    }
  }  
}

// exporto una instancia de la clase
module.exports = new ProductoController()
