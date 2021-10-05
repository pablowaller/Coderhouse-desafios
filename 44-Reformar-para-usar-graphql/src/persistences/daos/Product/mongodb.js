const schema = require('../../Mongo/schemas/ProductSchema')
const ProductDTO = require('../../dto/ProductDTO')
const IProductDAO = require('./IProductDAO')

class ProductMongoDAO extends IProductDAO {

    static instance

    constructor(model, DTO){
        super()
        this.model = model
        this.DTO = DTO
        require('../../Mongo/db')
    }

    static getInstance(){
        if(!this.instance) {
            this.instance = new ProductMongoDAO(schema, ProductDTO)
        }
        return this.instance
    }

    async getById(id){
        const { _id, title, price, thumbnail } = await this.model.findById(id).lean()
        return  new this.DTO(_id, title, price, thumbnail ).toJson() 
    }

    async getOneBy(objectParams){
        const { _id, title, price, thumbnail } = await this.model.findOne(objectParams)
        return new this.DTO( _id, title, price, thumbnail ).toJson()
    }

    async getAll(){
        const data = await this.model.find().lean()
        return data.map( entity => 
             new this.DTO( entity._id, entity.title, entity.price, entity.thumbnail ).toJson()
             )
    }

    async save(data){
        const { _id, title, price, thumbnail } = await this.model.create(data)
        return  new this.DTO(_id, title, price, thumbnail ).toJson()
    }

    async update(id, data){
        
        const updated  = await this.model.updateOne({_id: id},{ $set: data })
        if(!updated) return undefined

        return this.getById(id)
        
    }

    async delete(id){
         const entity = await this.getById(id)
            
         if(!entity) return undefined
 
         await this.model.deleteOne({ _id: entity._id})

         return entity
       
    }
    
}

module.exports = ProductMongoDAO.getInstance()