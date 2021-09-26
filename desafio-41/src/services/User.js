const model = require('../persistences/PersistenceFactory')('User')
const BaseRepository = require('../repository/BaseRepository')

class User extends BaseRepository{
   constructor(model){
       super(model)
   }
}


module.exports = new User(model)