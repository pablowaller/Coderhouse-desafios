const { knex, knexMysql } = require('../database/knex');

(async () =>{
    try{
        await knex.schema.createTable('mensajes', table => {
            table.increments('id');
            table.string('message');
            table.string('email');
            table.timestamp('date', { useTz: true }).notNullable().defaultTo(knex.fn.now())
        })
        console.log('Se ha creado la tabla mensajes en sqlite')
        
        await knexMysql.schema.createTable('productos', table => {
            table.increments('id');
            table.string('title');
            table.float('price');
            table.string('thumbnail');
        })
        
        console.log('Se ha creado la tabla productos en Mysql')
    }catch(err){
        console.log('error:', error);
    }finally{
        console.log('cerrando conexion...');
        process.exit(0);
    }
    
})()


