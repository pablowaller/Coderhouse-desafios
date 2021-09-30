module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    HOST: process.env.HOST || '127.0.0.1',
    PORT: process.env.PORT || '8080',

    MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost:27017' ,
    MONGO_ATLAS_URL: process.env.MONGO_ATLAS_URL,

    MYSQL_HOST: process.env.MYSQL_HOST || '127.0.0.1',
    MYSQL_USER: process.env.MYSQL_USER,
    MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
    MYSQL_DATABASE: process.env.MYSQL_DATABASE,

    FACEBOOK_CLIENT_ID: process.env.FACEBOOK_CLIENT_ID,
    FACEBOOK_CLIENT_SECRET: process.env.FACEBOOK_CLIENT_SECRET,
    
    ETHEREAL_MAIL: process.env.ETHEREAL_MAIL,
    ETHEREAL_PASS: process.env.ETHEREAL_PASS,

    GMAIL_USER: process.env.GMAIL_USER,
    GMAIL_PASS: process.env.GMAIL_PASS,

    TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
    TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,

    TWILIO_MUMBER: process.env.TWILIO_MUMBER,
    TWILIO_ADMIN_NUMBER: process.env.TWILIO_ADMIN_NUMBER,
}