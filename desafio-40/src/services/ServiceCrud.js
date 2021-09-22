class ServiceCrud{

    constructor(model){
        this.model = model
    }
    
    async getById(id){
        return await this.model.getById(id)
    }

    async getOneBy(objectParams){
        return  await this.model.getOneBy(objectParams)
    }

    async getAll(){
        return await this.model.getAll()
        
    }

    async save(data){
       return await this.model.save(data)
    }

    async update(id, data){
        return await this.model.update(id,data)        
    }
    async delete(id){
       return await this.model.delete(id)
    }
}


module.exports = ServiceCrud;