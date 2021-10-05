const schema = require('../../Mongo/schemas/UserSchema')
const IUserDAO = require('./IUserDAO')

class UserMongoDAO extends IUserDAO {
    static instance
    constructor(model, DTO){
        super()
        this.model = model
        this.DTO = DTO
        require('../../Mongo/db')
    }

    static getInstance(){
        if(!this.instance) {
            this.instance = new UserMongoDAO(schema)
        }
        return this.instance
    }

    async save(data){
        const { _id, username } = await this.model.create(data)
        return  new this.DTO(_id, username, "").toJson()
    }

    async getOneBy(objectParams){
        const { _id, username, password } = await this.model.findOne(objectParams)
        return new this.DTO( _id, username, password ).toJson()
    }


}

module.exports = UserMongoDAO.getInstance()