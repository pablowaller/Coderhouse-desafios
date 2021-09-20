const request = require('supertest')(`http://localhost:8080`)
const expect = require('chai').expect
const Producto = require('../services/Producto')

describe('Test Product Api Resource', () => {
    let idProducto; 
    describe('GET: api/productos/listar', () => {
        it('should return 200', async () => {
            let response = await request.get('/api/productos/listar')
            expect(response.status).to.eql(200)
        })
        it('should return a array of Products', async () => {
            let response = await request.get('/api/productos/listar')
            expect(response.body).to.be.a('array')
        })
    })

    describe('POST: api/productos/guardar', () => {
        it('should save product and return item and status 201', async () => {
            const producto = {
                title: 'Nuevo Articulo',
                price: 420,
                thumbnail: 'http://somesomesome.jpg'
            }
            let response = await request.post('/api/productos/guardar').send(producto)

            expect(response.status).to.be.eql(201)
            
            const savedProduct = response.body
            idProducto = response.body._id

            expect(savedProduct).to.include.keys('title','price','thumbnail','_id')

            expect(savedProduct.title).to.be.eql(producto.title)
            expect(savedProduct.price).to.be.eql(producto.price)
            expect(savedProduct.thumbnail).to.be.eql(producto.thumbnail)
        })
    })

    describe('PUT: api/productos/actualizar', () => {
        it('should update product and return status 200', async () => {
            const producto = {
                title: 'Nuevo Articulo Actualizado',
                price: 421,
                thumbnail: 'http://somesomesome2.jpg'
            }
            let response = await
             request.put('/api/productos/actualizar/'+idProducto).send(producto)
            expect(response.status).to.be.eql(200)
            
            const savedProduct = response.body
            expect(savedProduct).to.include.keys('title','price','thumbnail','_id')

            expect(savedProduct.title).to.be.eql(producto.title)
            expect(savedProduct.price).to.be.eql(producto.price)
            expect(savedProduct.thumbnail).to.be.eql(producto.thumbnail)
        })
    })

    
    describe('DELETE: api/productos/borrar', () => {
        it('should delete product and return status 200', async () => {
            let response = await request.delete('/api/productos/borrar/'+idProducto)
            expect(response.status).to.be.eql(200)
            
            const deletedProduct = response.body.producto

            expect(deletedProduct).to.include.keys('title','price','thumbnail','_id')

        })
    })
})