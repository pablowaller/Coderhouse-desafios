const MensajeSchema = require ('../schemas/MessageSchema')
const MongoCrud = require('./MongoCrud')

class Mensaje extends MongoCrud{
    constructor(){
        super(MensajeSchema)
    }
}

module.exports = new Mensaje()