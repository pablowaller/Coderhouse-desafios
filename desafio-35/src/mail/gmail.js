const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
});


sendGmailMail = (user) =>{
    let subject = `${user.fullName} iniciaste sesion con facebook.`
    let text = `${user.fullName} iniciaste sesion ${new Date().toLocaleString()}`
    
    transporter.sendMail({
        from: 'Servidor Node.js',
        to: user.email,
        subject: subject,
        html: `<p>${text}</p><img src=${user.photo}/>`,
        attachments: [
            { path: `${user.photo}` }
        ]
    },(err, info) => {
        if(err){
            console.log(err)
            return err
            }
        console.log(info)
    })
}


module.exports = { sendGmailMail }