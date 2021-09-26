const options = require('./config')

const knex = require('knex')(options)

module.exports = { knex, options }