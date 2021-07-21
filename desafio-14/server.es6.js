// Permite que funcionen las promesas al transpilar con babel
require("@babel/polyfill");

const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')

const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

const apiProd = require('./api/productos')
const apiMsj = require('./api/mensajes')

app.use(morgan('tiny'))


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname+'/public'))

app.engine('hbs',handlebars({
  extname: '.hbs',
  layoutsDir: __dirname + '/views/layouts', 
}))
app.set('view engine','hbs')
app.set('views', './views');


//Rutas 
app.get('/',(req,res)=>{
  res.render('form',{layout: 'index'})
})
app.use('/productos',require('./routes/productos'))

//Rutas API
app.use('/api/productos', require('./routes/api/productos'))

//Sockets
io.on('connect', async (socket) =>{

  socket.emit('productos',apiProd.listar())
  socket.on('productos:update', () =>{
      io.sockets.emit('productos',apiProd.listar())
    }
  )
    
  socket.emit('mensajes',await apiMsj.getMensajes())
  socket.on('mensajes:nuevo',async (mensaje) => {
      await apiMsj.guardar(mensaje)
      io.sockets.emit('mensajes', await apiMsj.getMensajes())
  })
})

// Middleware para manejar errores
app.use((error, req, res, next) => {
  res.status(error.code || 500).json({ error : error.message })
})

const puerto = 8080

const server = http.listen(puerto, () => {
  console.log(`servidor es6 escuchando en http://localhost:${puerto}`)
})

server.on('error', error => {
  console.log('error en el servidor:', error)
})
