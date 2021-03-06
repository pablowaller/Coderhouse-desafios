const messageRepository = require('../repository/MessageRepository')
const { sendAdminMessage } = require('../sms/twilioSms')
const { normalizeMessages } = require('../utils/normalizes')

class MessageService {
    constructor(messageRepository){
        this.messageRepo = messageRepository
    }

    async getAll(){
        return normalizeMessages( await this.messageRepo.getAll() )
    }

    async sendMessage(msg){
        if(msg.text.toUpperCase().includes('ADMINISTRADOR')){
            sendAdminMessage(msg)
        }
        return await this.messageRepo.save(msg)
    }
}


module.exports = new MessageService(messageRepository)