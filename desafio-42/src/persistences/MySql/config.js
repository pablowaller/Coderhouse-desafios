const config = require("../../config/config")

config
const options = {
    client: 'mysql',
    connection: {
        host : config.MYSQL_HOST,
        user : config.MYSQL_USER,
        password : config.MYSQL_PASSWORD,
        database : config.MYSQL_DATABASE,
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