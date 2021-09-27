class PersistenceFactory {
    static getPersistence(type,modelName){
        try {
            console.log(`Se ha elegido: ${type}`)
            return require(`./daos/${modelName}/${type}`)
        }catch(err){
            console.log('No se encontro el tipo de persistencia', type, modelName)
        }
    }
}

const typePersistence = process.argv[2] || 'mongodb'
module.exports = ( modelName ) =>
     PersistenceFactory.getPersistence( typePersistence, modelName )