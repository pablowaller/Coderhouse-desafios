const Product = require('../services/Product')
const Message = require('../services/Message')

const {  normalizeMessages } = require('../utils/normalizes')

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

            await Message.sendMessage(msg)
            io.sockets.emit('mensajes',normalizeMessages(await Message.getAll()))

            
          }catch(err){ 
            console.log(err) 
          }
            
      })      
    })


}