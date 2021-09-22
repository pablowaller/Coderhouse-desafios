

class MongoCrud{

    constructor(model){
        this.model = model
    }

    async getById(id){
        return  await this.model.findById(id).lean()
    }

    async getOneBy(objectParams){
        return  await this.model.findOne(objectParams)
    }

    async getAll(){
        return await this.model.find().lean()
        
    }

    async save(data){
       return await this.model.create(data)
    }

    async update(id, data){
        
        const updated  = await this.model.updateOne({_id: id},{$set: data})
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


module.exports = MongoCrud;