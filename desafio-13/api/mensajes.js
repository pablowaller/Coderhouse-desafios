const fs = require('fs')

class Mensajes{

    constructor(path){
        this.path = path
    }

    async getMensajes(){
        try{
            let contenido = await fs.promises.readFile(this.path)
            return JSON.parse(contenido)
        } catch(err){  
            return []
        }
    }

    async guardar({email, message}){
            try{
                const mensaje = { email: email, date: new Date().toLocaleString(), message: message}
                const newMessages = [ ...await this.getMensajes(), mensaje]
    
                await fs.promises.writeFile(this.path,JSON.stringify(newMessages,null,'\t'))
            }catch(err){
                throw err
            }
          

    }
}
module.exports = new Mensajes('messages.txt')
