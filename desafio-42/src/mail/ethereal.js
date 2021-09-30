const nodemailer = require('nodemailer');
const config = require('../config/config');


const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: config.ETHEREAL_MAIL,
        pass: config.ETHEREAL_PASS
    }
})

sendFacebookEmail = (user,event) =>{
    let subject;
    let text;

    if(event == 'login'){
        subject = `${user.fullName} iniciaste sesion con facebook.`
        text = `${user.fullName} iniciaste sesion ${new Date().toLocaleString()}`
    }else{
        subject = `${user.fullName} ha cerrado sesión`
        text = `${user.fullName} ha cerrado sesion ${new Date().toLocaleString()}`
    }
    transporter.sendMail({
        from: 'Servidor Node.js',
        to: user.email,
        subject: subject,
        text: text
    },(err, info) => {
        if(err){
            console.log(err)
            return err
            }
        console.log(info)
    })
}




module.exports = { sendFacebookEmail }