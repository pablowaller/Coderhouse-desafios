
const { sqlite3, mysql } = require('../config/database');

const knex = require('knex')(sqlite3);

const knexMysql = require('knex')(mysql)


// exporto el objeto para usarlo en otros modulos
module.exports = { knex, knexMysql };