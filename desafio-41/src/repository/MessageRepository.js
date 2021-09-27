const BaseRepository = require("./BaseRepository");
const model = require('../persistences/PersistenceFactory')('Message')

class MessageRepository extends BaseRepository{
    constructor(model){
        super(model)
    }

    //Otros metodos a llamar desde persistencia.
}

module.exports = new MessageRepository(model)