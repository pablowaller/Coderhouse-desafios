const { knex } = require('../../MySql/knex')
const IProductDAO = require('./IProductDAO')
const ProductDTO = require('../../dto/ProductDTO')

class ProductMySqlDAO extends IProductDAO{
    static instance
    constructor(db, DTO){
        super()
        this.db = db
        this.DTO = DTO
    }

    static getInstance(){
        if(!this.instance) {
            this.instance = new ProductMySqlDAO('productos', ProductDTO)
        }
        return this.instance
    }

    async getById(id){
        const entity = await knex.from(this.db).select('*').where('id',Number(id))
        return new this.DTO( entity[0].id, entity[0].title, entity[0].price, entity[0].thumbnail)
    }

    async getAll(){
        const data = await knex.from(this.db).select('*')
        return data.map(entity => new this.DTO(entity.id, entity.title, entity.price, entity.thumbnail))
    }

    async save(data){
        const idEntity = await knex(this.db).insert(data)
        return await this.getById(idEntity)
    }

    async update(id, data){    
        const updated = await knex(this.db).where('id', id).update( data )
        if( !updated ) return undefined
        return await this.getById(id)
    }
    async delete(id){
        const entity = await this.getById(id)
        const deleted = await knex(this.db).where('id',id).del()

        if(!deleted) return undefined

        return entity
    }
}

module.exports = ProductMySqlDAO.getInstance()