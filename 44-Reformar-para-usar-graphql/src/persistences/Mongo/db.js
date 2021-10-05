const mongoose = require ('mongoose')
const config = require('../../config/config')
const logger = require('../../logger/config')

const MONGOURL = config.NODE_ENV !== 'development' ? config.MONGO_ATLAS_URL : config.MONGO_URL

const connection = mongoose.connect(`${MONGOURL}/ecommerceTest`, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
})
mongoose.connection.on('connected', ()=> {
    logger.info(`[Mongoose] - connected in: ${MONGOURL}`, )
})

mongoose.connection.on('error', (err)=> {
    logger.error('[Mongoose] - error:', err)
})

module.exports = connection