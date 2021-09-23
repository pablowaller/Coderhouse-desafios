const { knex } = require('./knex')

const migrate =  async () =>{
    try{
        await knex.schema.dropTableIfExists('productos');
        await knex.schema.createTable('productos', table => {
            table.increments('_id')
            table.string('title',255)
            table.float('price')
            table.string('thumbnail',255)
        })
        console.log('Se ha creado la tabla productos en Mysql')

        await knex.schema.dropTableIfExists('mensajes');

        await knex.schema.createTable('mensajes', table => {
            table.increments('_id')
            table.jsonb('author')
            table.string('text')
            table.timestamp('date', { useTz: true }).notNullable().defaultTo(knex.fn.now())
        })
        console.log('Se ha creado la tabla Mensajes en Mysql')

        await knex.schema.dropTableIfExists('usuarios');

        await knex.schema.createTable('usuarios', table => {
            table.increments('_id')
            table.string('username',255)
            table.string('password',255)
        })
        console.log('Se ha creado la tabla Usuarios en Mysql')
    }catch(err){
        console.log('error:', err);
    }finally{
        console.log('cerrando conexion...');
        process.exit(0);
    }
    
}

migrate()
