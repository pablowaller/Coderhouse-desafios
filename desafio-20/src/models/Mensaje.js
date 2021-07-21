const messageMD = require ('../schemas/MessageSchema')

class Mensaje{

    async getAll(){
        try{
            let mensajes = await messageMD.find()
            return mensajes
        } catch(err){  
            throw err
        }
    }

    async save({email, message}){
            try{
                await messageMD.create({email,message})
            }catch(err){
                throw err
            }
        
    }
}

module.exports = new Mensaje()