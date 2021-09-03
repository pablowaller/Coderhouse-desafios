const express = require('express')
const router = express.Router()
const passport = require('passport')
const { sendFacebookEmail } = require('../../mail/ethereal')
const { isAuth } = require('../../middleware/auth')

router.post('/login',passport.authenticate('login',{ failureRedirect: '/auth/failLogin'}),(req, res)=>{
    res.redirect('/')
})

router.post('/signup',passport.authenticate('signup', { failureRedirect: '/auth/failSignUp'}),(req, res)=>{
    res.redirect('/')

})

router.get('/logout',isAuth,(req, res)=>{
    const fullname = req.user.fullname
    sendFacebookEmail(req.user,'logout')
    req.logout();
    res.render('logout',{ layout: 'index', username: fullname })
})

module.exports = router