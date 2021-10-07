const {  graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')
const ProductService = require('../services/Product')

const schema = buildSchema(`
    type Query {
        productos: [Producto],
        producto(id: String!) : Producto
    },
    type Mutation {
        guardarProducto(title: String!, price: Int!, thumbnail: String!) : Producto,
        actualizarProducto(id: String!, title: String, price: Int, thumbnail: String ) : Producto
    },
    type Producto {
        id: String
        title: String
        price: Int
        thumbnail: String
    },
`)


const getProductById = async (args)=>{
    try{
        const  id = args.id;
        return await ProductService.getById(id)
    }catch(err){
        return ({ message: 'Ha ocurrido un Error' })
    }
   
}

const getProducts = async ()=>{
    try{
        return await ProductService.getAll()
    }catch(err){
        return ({ message: 'Ha ocurrido un error'})
    }
}

var guardarProducto = async ({ title, price, thumbnail }) => {
    try{
        return await ProductService.save({ title, price, thumbnail })
    }catch(err){
        return ({ message: 'Ha ocurrido un error'})
    }
}

var actualizarProducto = async ({ id, ...data }) => {
    try{
        let res = await ProductService.update(id, data)
        if(res == undefined)
        return res
    }catch(err){
        return ({ message: 'Ha ocurrido un error'})
    }
}

const root = {
    productos: getProducts,
    producto: getProductById,
    guardarProducto: guardarProducto,
    actualizarProducto: actualizarProducto
}


module.exports = graphqlHTTP({
                                schema: schema,
                                rootValue: root,
                                graphiql: true,
                                customFormatErrorFn: (error) => ({
                                    message: error.message
                                  })
                            })
