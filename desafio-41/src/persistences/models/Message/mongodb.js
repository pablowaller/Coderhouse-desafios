const MongoCrud = require('../../Mongo/MongoCrud')
const schema = require('../../Mongo/schemas/MessageSchema')

class MessageMongo extends MongoCrud{
    static instance
    constructor(){
        super(schema)
        require('../../Mongo/db')
    }

    static getInstance(){
        if(!this.instance) {
            this.instance = new MessageMongo()
        }
        return this.instance
    }
}

module.exports = MessageMongo.getInstance()