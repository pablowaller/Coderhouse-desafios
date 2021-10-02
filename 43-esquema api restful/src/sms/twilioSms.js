const config = require('../config/config')
const { loggerError } = require('../logger/config')

const client = require('twilio')(config.TWILIO_ACCOUNT_SID, config.TWILIO_AUTH_TOKEN)


function sendAdminMessage(message){
    try{
        return client.messages.create({
            body: `Te ha enviado un mensaje:${message.author.nombre} con el siguiente contenido: ${message.text}`,
            from: config.TWILIO_NUMBER,
            to: config.TWILIO_ADMIN_NUMBER
        })
    }catch(err){
        loggerError.error(err)
    }
   
}

module.exports = { sendAdminMessage }