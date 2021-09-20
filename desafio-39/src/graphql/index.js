const {  graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')
const ProductService = require('../services/Producto')

const schema = buildSchema(`
    type Query {
        productos: [Producto],
        producto(id: String!) : Producto
    },
    type Mutation {
        guardarProducto(title: String!, price: Int!, thumbnail: String!) : Producto,
    },
    type Producto {
        _id: String
        title: String
        price: Int
        thumbnail: String
    }

`)


const getProductsById = async (args)=>{
    const  id = args.id;
    return await ProductService.getById(id)
}

const getProducts = async ()=>{
    return await ProductService.getAll()
}

var guardarProducto = async ({ title, price, thumbnail }) => {
    return await ProductService.save({ title, price, thumbnail })
}

const root = {
    productos: getProducts,
    producto: getProductsById,
    guardarProducto: guardarProducto
}


module.exports = graphqlHTTP({
                                schema: schema,
                                rootValue: root,
                                graphiql: true
                            })
