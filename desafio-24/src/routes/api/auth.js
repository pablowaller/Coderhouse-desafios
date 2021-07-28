const express = require('express')
const router = express.Router()

router.post('/login',(req, res)=>{
    const username = req.body.username || undefined
    if( !username) return res.status(400).json({message: 'No se envio el usuario'})

    req.session.username = username
    //return res.status(200).json({ message: 'Ha iniciado session', data: { username: username}})
    return res.redirect('/')
})

router.get('/logout',(req, res)=>{
    const username = req.session.username
    req.session.destroy(err => {
        if (!err) return res.render('logout',{ layout: 'index', username: username })

        else res.send({ status: 'Logout ERROR', body: err })
    })
})

module.exports = router