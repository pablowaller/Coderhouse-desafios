const nodemailer = require('nodemailer');
const config = require('../config/config');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: config.GMAIL_USER,
        pass: config.GMAIL_PASS
    }
});


sendGmailMail = (user) =>{
    let subject = `${user.fullName} iniciaste sesion con facebook.`
    let text = `${user.fullName} iniciaste sesion ${new Date().toLocaleString()}`
    
    return  transporter.sendMail({
        from: 'Servidor Node.js',
        to: user.email,
        subject: subject,
        html: `<p>${text}</p><img src=${user.photo}/>`,
        attachments: [
            { path: `${user.photo}` }
        ]
    })
}


module.exports = { sendGmailMail }