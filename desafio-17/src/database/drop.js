const {knex, knexMysql} = require('../database/knex');

(async ()=>{

    try{
        await knex.schema.dropTableIfExists('mensajes')
        await knexMysql.schema.dropTableIfExists('productos')
        console.log('Se han borrado las tablas')
    }catch(err){
        console.log(err)
    }finally{
        knex.destroy();
        knexMysql.destroy()
    }

})()
