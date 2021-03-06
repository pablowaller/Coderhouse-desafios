const productMD = require ('../schemas/ProductSchema') //importo la conexion knexMysql como knex

class Producto{
    constructor(){
    }

    async get(id){
        return  await productMD.findById(id).lean()
        
    }
    
    async getAll(){
        const productos = productMD.find().lean()
        return productos
    }

    async save(data){

        const producto = await productMD.create(data)
        return producto
       
    }

    async update(id, producto){
        
        const updated  = await productMD.updateOne({_id: id},{$set: producto})
        console.log(updated)
        if(!updated) return undefined
        
        return this.get(id)
        
    }
    async delete(id){
         const product = await this.get(id)
            
         if(!product) return undefined
 
         await productMD.deleteOne({ _id: product._id})
         return product
       
    }
}


module.exports = new Producto()