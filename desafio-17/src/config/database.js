const sqlite3 = {
    client: 'sqlite3',
    connection: {
        filename: __dirname + '/../db/mensajes.sqlite'
    },
    useNullAsDefault:true
}

const mysql = {
    client: 'mysql',
    connection: {
    host : '127.0.0.1',
    user : 'root',
    password : '',
    database : 'productos'
  }
}
module.exports = {sqlite3, mysql};