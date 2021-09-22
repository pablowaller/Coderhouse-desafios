const express = require('express') 
const handlebars = require('express-handlebars')  
const session = require('express-session')
const cookieParser = require('cookie-parser')
const MongoStore = require('connect-mongo')
const passport = require('passport')
const compression = require('compression')

const { logger, loggerError } = require('./logger/config')

require('dotenv').config()

const initListeners = require('./listeners')
const app = express()
app.use(compression())

const http = require('http').Server(app)
const io = require('socket.io')(http)

//-- Passport Config
require('./config/passport')(passport)

//-- Session y coookies 
app.use(session({
  store: MongoStore.create({ 
    mongoUrl: `${process.env.MONGO_ATLAS_URL}/sesiones`,
    ttl: 60 * 10 
  }),
  secret: 'secreto',
  resave: true,
  saveUninitialized: true,
}))

if(process.env.ENV == 'DEV') {
  app.use(require('morgan')('dev'))
}

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//--Passport Middlewares 
app.use(passport.initialize())
app.use(passport.session())

//Public folder + Handlebars
app.use(express.static(__dirname + '/public'))
app.engine('hbs',handlebars({
  extname: '.hbs',
  layoutsDir: __dirname + '/views/layouts', 
}))
app.set('view engine','hbs')
app.set('views', __dirname + '/views');

// Rutas -
app.use('/',require('./routes/index.routes'))
app.use('/productos',require('./routes/productos.routes'))
app.use('/auth',require('./routes/auth.routes'))

//Rutas API
app.use('/api/productos', require('./routes/api/productos.routes'))
app.use('/api/auth', require('./routes/api/auth.routes'))


//Graphql

app.use('/graphql', require('./graphql'))

//Socket
initListeners(io)

const PORT = process.env.PORT || 8080 


const server = http.listen(PORT, () => {
 logger.info(`servidor escuchando en http://localhost:${PORT} || PID ${process.pid}`, )
})

server.on('error', error => {
  loggerError.error('error en el servidor:', error)
})
