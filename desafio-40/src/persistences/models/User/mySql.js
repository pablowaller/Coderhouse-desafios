const MySqlCrud = require('../../MySql/MySqlCrud')

class UserMySql extends MySqlCrud{
    static instance
    constructor(db = 'usuarios'){
        super(db)
    }

    static getInstance(){
        if(!this.instance) {
            this.instance = new UserMySql()
        }
        return this.instance
    }
}

module.exports = UserMySql.getInstance()