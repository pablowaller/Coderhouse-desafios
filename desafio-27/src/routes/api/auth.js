const express = require('express')
const router = express.Router()
const passport = require('passport')

router.post('/login',passport.authenticate('login',{ failureRedirect: '/auth/failLogin'}),(req, res)=>{
    res.redirect('/')
})

router.post('/signup',passport.authenticate('signup', { failureRedirect: '/auth/failSignUp'}),(req, res)=>{
    //return res.json({ message: 'Created User!', user: req.user})
    res.redirect('/')

})

router.get('/logout',(req, res)=>{
    const username = req.user.username
    req.logout();
    res.render('logout',{ layout: 'index', username: username })
})

module.exports = router