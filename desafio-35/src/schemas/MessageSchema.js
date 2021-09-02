const mongoose = require ('mongoose')

const MessageSchema = mongoose.Schema({
    author: {
        id: { type: String, required: true },
        nombre: { type: String, required: true },
        apellido: { type: String, required: true },
        edad: { type: String, required: true },
        alias: { type: String, required: true },
        avatar: { type: String, required: true },
        },
    text: { type: String, required: true },
    date: { type: Date, default: Date.now() }
})

module.exports = mongoose.model('Message',MessageSchema)