const express = require('express')
const router = express.Router()
const productModel = require('../models/Producto')



router.get('/vista',async (req,res)=>{
    const productos = await productModel.getAll()
    res.render('vista',{ layout: 'index',productos: productos, hayProductos:  productos.length ? true : false})
  })

module.exports= router