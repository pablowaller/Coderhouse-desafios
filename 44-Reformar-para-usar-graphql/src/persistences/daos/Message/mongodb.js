const schema = require('../../Mongo/schemas/MessageSchema')
const MessageDTO = require('../../dto/MessageDTO')
const IMessageDAO = require('./IMessageDAO')

class MessageMongoDAO extends IMessageDAO{
    static instance
    constructor(model, DTO){
        super()
        this.model = model
        this.DTO = DTO

        //Connect DB
        require('../../Mongo/db')
    }

    static getInstance(){
        if(!this.instance) {
            this.instance = new MessageMongoDAO(schema, MessageDTO)
        }
        return this.instance
    }
 
    async getAll(){
        const data = await this.model.find().lean()
        const dataDTO = data.map( entity => new this.DTO(entity._id, entity.date, entity.author, entity.text).toJson() )
        return dataDTO
    }

    async save(data){
        const { _id, date, author, text } = await this.model.create(data)
        return  new this.DTO( _id, date, author, text ).toJson() 
    }
}

module.exports = MessageMongoDAO.getInstance()