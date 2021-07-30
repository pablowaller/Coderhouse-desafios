const mongoose = require ('mongoose')

const connection = mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.on('connected', ()=> {
    console.log('[Mongoose] - connected in:', process.env.MONGO_URL)
})

mongoose.connection.on('error', (err)=> {
    console.log('[Mongoose] - error:', err)
})

module.exports = connection