const ProductSchema = require('../schemas/ProductSchema')
const MongoCrud = require('./MongoCrud')

class Producto extends MongoCrud{
    constructor(){
        super(ProductSchema)
    }
}


module.exports = new Producto()