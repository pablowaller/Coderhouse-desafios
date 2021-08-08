const express = require('express')
const router = express.Router()
const { isAuth } = require('../middleware/auth')

router.get('/', isAuth, (req,res)=>{
    return res.render('main',{
      layout: 'index',
      isLogged: req.isAuthenticated() ,
      user: req.user
    })
  
})

module.exports = router