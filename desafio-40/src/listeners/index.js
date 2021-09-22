const Product = require('../services/Product')
const Message = require('../services/Message')

const {  normalizeMessages } = require('../utils/normalizes')
const { sendAdminMessage } = require('../sms/twilioSms')

module.exports = io =>{

    io.on("connection", socket => {
        console.log(`User with socketId ${socket.id} connected`)
      })
    io.on("disconnect", socket => {
        console.log(`User with socketId ${socket.id} disconnected`)
      })
    io.on('error', err => console.log(err))
    io.on('connect', async (socket) =>{
      
        socket.emit('productos',await Product.getAll())

        socket.on('productos:update',async  () =>{
          io.sockets.emit('productos',await Product.getAll())
          }
        )
            
        socket.emit('mensajes', normalizeMessages(await Message.getAll()))
  
        socket.on('mensajes:nuevo', async msg => {
          try{
            await Message.save(msg)

            io.sockets.emit('mensajes',normalizeMessages(await Message.getAll()))

            if(msg.text.toUpperCase().includes('ADMINISTRADOR')){
              let sended = await sendAdminMessage(msg)
              console.log(sended)
            }
          }catch(err){ console.log(err) }
            
      })      
    })


}