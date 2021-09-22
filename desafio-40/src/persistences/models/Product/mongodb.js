const MongoCrud = require('../../Mongo/MongoCrud')
const schema = require('../../Mongo/schemas/ProductSchema')

class ProductMongo extends MongoCrud{
    static instance
    constructor(){
        super(schema)
        require('../../Mongo/db')
    }

    static getInstance(){
        if(!this.instance) {
            this.instance = new ProductMongo()
        }
        return this.instance
    }
}

module.exports = ProductMongo.getInstance()