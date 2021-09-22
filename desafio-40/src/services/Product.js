const model = require('../persistences/PersistenceFactory')('Product')
const ServiceCrud = require('./ServiceCrud')

class Producto extends ServiceCrud{
   constructor(model){
       super(model)
   }
}


module.exports = new Producto(model)