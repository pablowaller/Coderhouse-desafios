const express = require('express')
const router = express.Router()
const productModel = require('../models/Producto')
const faker = require('faker')
faker.locale = "es";



router.get('/vista',async (req,res)=>{
    const productos = await productModel.getAll()
    res.render('vista',
      { layout: 'index',
        productos: productos, 
        hayProductos:  productos.length ? true : false,
      

      })
  })

router.get('/vista-test',async (req, res) => {

  const cantidad =  req.query.cant || 10
  let loop = 0
  let productos = []

  while (loop != cantidad){
    loop ++
    productos.push({ 
      title: faker.commerce.productName,
      price: faker.commerce.price,
      thumbnail: faker.random.image
    })
  }

  res.render('vista',{ layout: 'index',productos: productos, hayProductos:  productos.length ? true : false})

})

module.exports= router