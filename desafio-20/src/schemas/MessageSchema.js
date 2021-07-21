const mongoose = require ('mongoose')

const MessageSchema = mongoose.Schema({
    message: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: Date, default: Date.now() }
})

module.exports = mongoose.model('Message',MessageSchema)