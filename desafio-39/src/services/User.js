const UserSchema = require ('../schemas/UserSchema')
const MongoCrud = require('./MongoCrud')

class User extends MongoCrud{
    constructor(){
        super(UserSchema)
    }
}

module.exports = new User()