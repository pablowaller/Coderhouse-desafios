const express = require('express')
const router = express.Router()
const { fork } = require('child_process')
const { isAuth } = require('../middleware/auth')
const numCPUs = require ('os').cpus().length


router.get('/', isAuth, (req,res)=>{
    return res.render('main',{
      layout: 'index',
      isLogged: req.isAuthenticated() ,
      user: req.user
    })
})

router.get('/info',(req,res)=>{
  const info = {
    argvs : process.argv,
    so: process.platform,
    nodeVersion: process.version,
    memoryUse: {
      rss:(process.memoryUsage().rss / 1024 / 1024).toFixed(2)+'MB',
      heapTotal:(process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)+'MB',
      heapUsed:(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)+'MB' ,
      external:(process.memoryUsage().external / 1024 / 1024).toFixed(2)+'MB',
      arrayBuffers:(process.memoryUsage().arrayBuffers / 1024 / 1024).toFixed(2)+'MB' ,

    },
    path: process.execPath,
    processId: process.pid,
    folder: process.cwd(),
    numCPUs: numCPUs
  }
  return res.render('info',{ layout:'index', info  } )
})

router.get('/randoms',(req,res)=>{
  const cantidad = req.query.cant || 100000000
  const computo = fork('./src/child_processes/generateRandoms.js')
  computo.send(cantidad)
  computo.on('message',numbers => {
    return res.json({ numbers })
  })
})

module.exports = router