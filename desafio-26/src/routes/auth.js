const express = require('express')
const router = express.Router()

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
module.exports = router