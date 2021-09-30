const { knex } = require('../../MySql/knex')
const IUserDAO = require('./IUserDAO')
const UserDTO = require('../../dto/UserDTO')

class UserMySqlDAO extends IUserDAO{
    static instance
    constructor(db,DTO ){
        super()
        this.db = db
        this.DTO = DTO
    }

    static getInstance(){
        if(!this.instance) {
            this.instance = new UserMySqlDAO('usuarios',UserDTO)
        }
        return this.instance
    }



    async getOneBy(objectParams){   
        const entity = await knex.from(this.db).select('*').where(objectParams)
        return this.DTO(entity[0].id, entity[0].username, entity[0].password)
    }

    async save(data){
        const idEntity = await knex(this.db).insert(data)
        return await this.getOneBy({ id: idEntity })
    }


}

module.exports = UserMySqlDAO.getInstance()