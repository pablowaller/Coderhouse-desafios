const { knex } = require('../../MySql/knex')
const IMessage = require('./IMessageDAO')
const MessageDTO = require('../../dto/MessageDTO')

class MessageMySql extends IMessage{
    static instance
    constructor(db, DTO){
        super()
        this.db = db
        this.DTO = DTO
    }

    static getInstance(){
        if(!this.instance) {
            this.instance = new MessageMySql('mensajes', MessageDTO)
        }
        return this.instance
    }

    async getById(id){
        const entity = await knex.from(this.db).select('*').where('id',Number(id))
        return new this.DTO( entity[0].id, entity[0].date, entity[0].author, entity[0].text).toJson()
    }

    async save(data){
        const { author, text } = data
        const idEntity = await knex(this.db).insert( {text: text, author: JSON.stringify(author)} )

        return await this.getById(idEntity)
    }

    async getAll(){
        const data = await knex.from(this.db).select('*')
        return data.map(entity => new this.DTO(entity.id, entity.date, entity.author, entity.text).toJson() )
    }

}

module.exports = MessageMySql.getInstance()