const winston = require ('winston')

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({ 
            level: 'info', 
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.simple()
              )
            })
        ]
})

const loggerError = winston.createLogger({
    transports: [
        new winston.transports.Console({ 
            level: 'info', 
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.simple()
              )
            }),
        new winston.transports.File({
             filename: __dirname + '/logs/error.log', 
             level: 'error', 
             format:  winston.format.combine(
                winston.format.timestamp(), 
                winston.format.json()
             )})
    ]
})

const loggerWarn = winston.createLogger({
    transports: [
        new winston.transports.Console({ 
            level: 'info', 
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.simple()
              )
            }),
         new winston.transports.File({
            filename: __dirname + '/logs/warn.log', 
            level: 'warn', 
            format:  winston.format.combine(
               winston.format.timestamp(), 
               winston.format.json()
            )
           }),
    ]
})


module.exports = { 
    info:(msg)=> logger.info(msg),
    warn:(msg)=> loggerWarn.warn(msg),
    error:(msg)=> loggerError.error(msg)
}