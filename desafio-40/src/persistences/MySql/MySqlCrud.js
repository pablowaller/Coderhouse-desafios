const { knex } = require("./knex");

module.exports = 
class MySqlCrud {
    constructor(db){
        this.db = db;
    }

    async getById(id){
        const entity = await knex.from(this.db).select('*').where('_id',Number(id))
        return entity[0]
    }

    async getOneBy(objectParams){   
        const entity = await knex.from(this.db).select('*').where(objectParams)
        return entity[0]
    }

    async getAll(){
        const data = await knex.from(this.db).select('*')
        return data
    }

    async save(data){
        const idEntity = await knex(this.db).insert(data)
        return await this.getById(idEntity)
    }

    async update(id, data){    
        const updated = await knex(this.db).where('_id', id).update( data )
        if( !updated ) return undefined
        return await this.getById(id)
    }
    async delete(id){
        const entity = await this.getById(id)
        const deleted = await knex(this.db).where('_id',id).del()

        if(!deleted) return undefined

        return entity
    }

}