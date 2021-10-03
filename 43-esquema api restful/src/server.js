const express = require('express')

const cookieParser = require('cookie-parser')
const config = require('./config/config')
const compression = require('compression')
const cors = require('cors')
const handlebars = require('express-handlebars')  
const helmet = require('helmet')
const initListeners = require('./listeners')
const MongoStore = require('connect-mongo')
const passport = require('passport')
const session = require('express-session')

const { logger, loggerError } = require('./logger/config')



const app = express()


app.use(compression())
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        ...helmet.contentSecurityPolicy.getDefaultDirectives(),
        'script-src': [ "'self'","'unsafe-eval'", "'unsafe-inline'",
          "https://cdn.jsdelivr.net/npm/normalizr@3.6.1/dist/normalizr.browser.min.js",
          "https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js"],
        'img-src': [ "*","data:","'self'"]
      },
    },
  })
);
app.use(cors())
app.use(session({
  store: MongoStore.create({ 
    mongoUrl: `${config.MONGO_ATLAS_URL}/sesiones`,
    ttl: 60 * 10 
  }),
  secret: 'secreto',
  resave: true,
  saveUninitialized: true,
}))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//-- Passport Config
require('./config/passport')(passport)

//-- Session y coookies 
if( config.NODE_ENV == 'development') {
  app.use(require('morgan')('dev'))
}


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
const http = require('http').Server(app)
const io = require('socket.io')(http)

initListeners(io)

const PORT = config.PORT


const server = http.listen(PORT, () => {
 logger.info(`servidor escuchando en http://${config.HOST}:${PORT} || PID ${process.pid}`, )
})

server.on('error', error => {
  loggerError.error('error en el servidor:', error)
})
