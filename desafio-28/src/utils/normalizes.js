const { normalize, schema } = require('normalizr');

/** 
@description Recibe los mensajes y los normaliza 
@param { array } messages Un array de mensajes con author y su contenido
@returns { object } Devuelve un objeto con los datos normalizada

*/
function normalizeMessages( messages ){
    const dataNoNormalizr = { id: "mensajes", messages }
            
    const authorSchema = new schema.Entity('authors',{},{ idAttribute: 'id'})
    const messageSchema = new schema.Entity('messages',{
        author: authorSchema
    },{idAttribute: '_id'})
    
    const data = new schema.Entity('data',{
        authors: [authorSchema],
        messages: [messageSchema]
    })

    const normalizedData = normalize(dataNoNormalizr, data);
    return normalizedData
}

module.exports = { normalizeMessages }