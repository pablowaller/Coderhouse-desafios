const { loggerError } = require('../logger/config')

const client = require('twilio')(process.env.TWILIO_ACCOUNTSID,process.env.TWILIO_AUTH_TOKEN)


function sendAdminMessage(message){
    try{
        return client.messages.create({
            body: `Te ha enviado un mensaje:${message.author.nombre} con el siguiente contenido: ${message.text}`,
            from: process.env.TWILIO_NUMBER,
            to: process.env.TWILIO_ADMIN_NUMBER
        })
    }catch(err){
        loggerError.error(err)
    }
   
}

module.exports = { sendAdminMessage }