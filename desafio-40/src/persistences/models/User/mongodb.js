const MongoCrud = require('../../Mongo/MongoCrud')
const schema = require('../../Mongo/schemas/UserSchema')

class UserMongo extends MongoCrud{
    static instance
    constructor(){
        super(schema)
        require('../../Mongo/db')
    }

    static getInstance(){
        if(!this.instance) {
            this.instance = new UserMongo()
        }
        return this.instance
    }
}

module.exports = UserMongo.getInstance()