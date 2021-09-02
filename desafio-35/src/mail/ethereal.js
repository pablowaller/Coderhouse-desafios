const nodemailer = require ('nodemailer');


const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: process.env.ETHEREAL_MAIL,
        pass: process.env.ETHEREAL_PASS
    }
})

const sendMail = (to,subject,text) =>{
    transporter.sendMail({
        from: 'Servidor Node.js',
        to: to,
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

const sendFacebookEmail = (user,event)=>{
    const subject = event == 'login' ? `${user.fullName} inicio sesion con facebook.` : `${user.fullName} ha cerrado sesión`
    const text = event == 'login' ? `${user.fullName} ha iniciado sesion ${new Date().toLocaleString()}` : `${user.fullName} ha cerrado sesion ${new Date().toLocaleString()}`
    sendMail(user.email,subject,text)
}

module.exports = { sendFacebookEmail }