const express = require('express')
const router = express.Router()
const passport = require('passport')

router.post('/login',passport.authenticate('login'),(req, res)=>{
    return res.json({ message: 'User Logged!', user: req.user})

})

router.post('/signup',passport.authenticate('signup'),(req, res)=>{
    return res.json({ message: 'Created User!', user: req.user})
    
})

router.get('/logout',(req, res)=>{
    const username = req.session.username
    req.session.destroy(err => {
        if (!err) return res.render('logout',{ layout: 'index', username: username })

        else res.send({ status: 'Logout ERROR', body: err })
    })
})

module.exports = router