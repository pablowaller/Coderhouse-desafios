const Producto = require('../models/Producto')
const Mensaje = require('../models/Mensaje')

module.exports = io =>{

    io.on("connection", socket => {
        console.log(`User with socketId ${socket.id} connected`)
      })
    io.on("disconnect", socket => {
        console.log(`User with socketId ${socket.id} disconnected`)
      })
    io.on('connect', async (socket) =>{
      
      socket.emit('productos',await Producto.getAll())

      socket.on('productos:update',async  () =>{
        io.sockets.emit('productos',await Producto.getAll())
        }
      )
          
      socket.emit('mensajes',await Mensaje.getAll())

      socket.on('mensajes:nuevo',async (msg) => {
          await Mensaje.save(msg)
          io.sockets.emit('mensajes', await Mensaje.getAll())
        })
      })

}