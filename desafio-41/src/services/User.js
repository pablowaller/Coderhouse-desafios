const model = require('../persistences/PersistenceFactory')('User')

class User {
   constructor(model){
        this.model = model
   }

   async getOneBy(objectParams){
        return  await this.model.getOneBy(objectParams)
   }

   async save(data){
    return await this.model.save(data)
 }
}


module.exports = new User(model)