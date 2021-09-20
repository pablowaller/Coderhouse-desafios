const mongoose = require ('mongoose')


const MONGOURL = process.env.ENV !== 'DEV' ? process.env.MONGO_ATLAS_URL : process.env.MONGO_URL

const connection = mongoose.connect(`${MONGOURL}/ecommerceTest`, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
})
mongoose.connection.on('connected', ()=> {
    console.log('[Mongoose] - connected in:', MONGOURL)
})

mongoose.connection.on('error', (err)=> {
    console.log('[Mongoose] - error:', err)
})

module.exports = connection