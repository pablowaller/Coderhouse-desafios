module.exports = class IProductDAO{
    constructor(){}

    async getById(id){
        throw new Error('Product - getById not Implemented')
    }

    async getAll(){
        throw new Error('Product - getAll not Implemented')
    }

    async save(data){
        throw new Error('Product - save not Implemented')
    }

    async update(id, data){
        throw new Error('Product - update not Implemented')        
    }

    async delete(id){
        throw new Error('Product - delete not Implemented')
    }
}