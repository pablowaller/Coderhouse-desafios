const options = {
    client: 'mysql',
    connection: {
        host : process.env.MYSQL_HOST,
        user : process.env.MYSQL_USER,
        password : process.env.MYSQL_PASSWORD,
        database : process.env.MYSQL_DATABASE,
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