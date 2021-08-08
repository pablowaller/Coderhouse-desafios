const messageMD = require ('../schemas/MessageSchema')

class Mensaje{
    async getAll(){
        try{
            let mensajes = await messageMD.find().lean()
            return mensajes
        } catch(err){  
            throw err
        }
    }

    async save(data){
            try{
                await messageMD.create(data)
            }catch(err){
                throw err
            }
        
    }
}

module.exports = new Mensaje()