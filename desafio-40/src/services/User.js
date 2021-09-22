const model = require('../persistences/PersistenceFactory')('User')
const ServiceCrud = require('./ServiceCrud')

class User extends ServiceCrud{
   constructor(model){
       super(model)
   }
}


module.exports = new User(model)