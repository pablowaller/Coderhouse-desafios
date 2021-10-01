const config = require("../config/config")



class PersistenceFactory {
    static getPersistence(type,modelName){
        try {
            return require(`./daos/${modelName}/${type}`)
        }catch(err){
            console.log('No se encontro el tipo de persistencia', type, modelName)
        }
    }
}

const typePersistence = config.PERSISTENCE
module.exports = ( modelName ) =>
     PersistenceFactory.getPersistence( typePersistence, modelName )