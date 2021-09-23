const MySqlCrud = require('../../MySql/MySqlCrud')
const { knex } = require('../../MySql/knex')

class MessageMySql extends MySqlCrud{
    static instance
    constructor(db = 'mensajes'){
        super(db)
    }

    async save(data){
        const { author, text } = data
        const idEntity = await knex(this.db).insert({text: text, author: JSON.stringify(author)})
        return await this.getById(idEntity)
    }

    static getInstance(){
        if(!this.instance) {
            this.instance = new MessageMySql()
        }
        return this.instance
    }
}

module.exports = MessageMySql.getInstance()