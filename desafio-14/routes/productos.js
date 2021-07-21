const express = require('express')
const router = express.Router()
const proApi = require('../api/productos')



router.get('/vista',(req,res)=>{
    const productos = proApi.listar()
    res.render('vista',{ layout: 'index',productos: productos, hayProductos:  productos.length ? true : false})
  })

module.exports= router