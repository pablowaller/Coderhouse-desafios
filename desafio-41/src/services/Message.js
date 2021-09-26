const model = require('../persistences/PersistenceFactory')('Message')
const ServiceCrud = require('./ServiceCrud')

class Message extends ServiceCrud{
   constructor(model){
       super(model)
   }
}


module.exports = new Message(model)