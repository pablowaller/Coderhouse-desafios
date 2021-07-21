const { knex } = require ('../database/knex')

class Mensaje{

    async getAll(){
        try{
            let mensajes = await knex.from('mensajes').select('*')
            return mensajes
        } catch(err){  
            throw err
        }
    }

    async save({email, message}){
            try{
                await knex('mensajes').insert({email,message})
            }catch(err){
                throw err
            }
        
    }
}

module.exports = new Mensaje()