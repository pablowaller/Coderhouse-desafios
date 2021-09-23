const MySqlCrud = require('../../MySql/MySqlCrud')

class ProductMySql extends MySqlCrud{
    static instance
    constructor(db = 'productos'){
        super(db)
    }

    static getInstance(){
        if(!this.instance) {
            this.instance = new ProductMySql()
        }
        return this.instance
    }
}

module.exports = ProductMySql.getInstance()