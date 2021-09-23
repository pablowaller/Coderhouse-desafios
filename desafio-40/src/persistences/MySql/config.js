const options = {
    client: 'mysql',
    connection: {
        host : '127.0.0.1',
        user : 'root',
        password : '',
        database : 'ecommerce-desafios',
        typeCast: function(field, next) {
            if (field.type === 'BLOB') {
                if(field.name === 'author'){
                    return JSON.parse(field.string())
                }
              }
              return next()
        }
    }
}


module.exports = options