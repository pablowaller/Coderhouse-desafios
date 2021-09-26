const model = require('../persistences/PersistenceFactory')('Product')
const BaseRepository = require('../repository/BaseRepository')

class Producto extends BaseRepository{
   constructor(model){
       super(model)
   }
}


module.exports = new Producto(model)