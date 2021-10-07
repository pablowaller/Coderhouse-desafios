const express = require('express')
const router = express.Router()
const passport = require('passport')
const { sendFacebookEmail } = require('../mail/ethereal')
const { isAuth } = require('../middleware/auth')

router.get('/login',(req, res)=>{
    if(req.user) return res.redirect('/')
    res.render('login',{ layout: 'index' })
})
router.get('/signup',(req, res)=>{
    if(req.user) return res.redirect('/')

    res.render('signup',{ layout: 'index' })
})

router.get('/failSignUp',(req, res)=>{
    res.render('failSignUp',{ layout: 'index' })
})

router.get('/failLogin',(req, res)=>{
    res.render('failLogin',{ layout: 'index' })
})

router.get('/facebook',passport.authenticate('facebook'))
router.get('/facebook/callback',passport.authenticate('facebook',{
    successRedirect: '/',
    failureRedirect: '/failLogin'
}))

router.get('/logout',isAuth,(req, res)=>{
    const fullname = req.user.fullName
    sendFacebookEmail(req.user,'logout')

    req.logout();
    res.render('logout',{ layout: 'index', username: fullname })
})


module.exports = router