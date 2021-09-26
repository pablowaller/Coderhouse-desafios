const model = require('../persistences/PersistenceFactory')('Message')
const BaseRepository = require('../repository/BaseRepository')

class Message extends BaseRepository{
   constructor(model){
       super(model)
   }
}


module.exports = new Message(model)