const { knexMysql:knex } = require('../database/knex') //importo la conexion knexMysql como knex

class Producto{
    constructor(){
    }

    async get(id){
        try {
            const producto = await knex.from('productos').select('*').where('id',id)
            
            return producto[0]
        } catch (err) {
            throw err
        }
    }
    
    async getAll(){
        try {
            const productos = await knex.from('productos').select('*')
            return productos
        } catch (err) {
            throw err
        }
    }

    async save(data){
        try{
           const idProducto =  await knex('productos').insert(data)
           const producto = await knex.from('productos').select('*').where('id',idProducto)
            console.log(producto[0])
           return producto[0]
        }catch(err){
            throw err
        }
    }

    async update(id, producto){
        try{
            const updated  = await knex('productos').where('id',id).update({...producto})
            
            if(!updated) return undefined
            
            return  await this.get(id)
            
        }catch(err){
            throw err
        }
    }
    async delete(id){
        try{
            const product = await this.get(id)
            const deleted  = await knex('productos').where('id',id).del()

            if(!deleted) return undefined
            
            return product
        }catch(err){
            throw err
        }
    }
}


module.exports = new Producto()