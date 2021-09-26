const model = require('../persistences/PersistenceFactory')('Message')
const ServiceCrud = require('./ServiceCrud')

class Mensaje extends ServiceCrud{
   constructor(model){
       super(model)
   }
}


module.exports = new Mensaje(model)