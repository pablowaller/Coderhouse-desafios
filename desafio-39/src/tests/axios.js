const axios = require('axios')

const URL = 'http://localhost:8080/'


const listarProductos = async () => {
    try{
        return await axios.get(URL+'api/productos/listar')
    }catch (err) {
        console.error(err.response)
    }
}

const guardarProducto = async (data) => {
    try{
        return await axios.post(URL+'api/productos/guardar',data)
    }catch(err){
        console.error(err.response)
    }
}

const actualizarProducto = async (data, id) => {
    try{
        return await axios.put(URL+`api/productos/actualizar/${id}`,data)
    }catch(err){
        console.log(err.response)
    }
}

const borrarProducto = async (id) => {
    try{
        return await axios.delete(URL+`api/productos/borrar/${id}`)
    }catch(err){
        console.log(err.response)
    }
}


const axiosTest = async () => {
    console.log('//LISTANDO PRODUCTOS')
    let res =  await listarProductos()
    console.log(res.data)

    console.log('//GUARDANDO PRODUCTOS')

    res = await guardarProducto({
        title: 'Producto Ingresado',
        price: 50,
        thumbnail: 'http://image.jpg'
    })
    console.log(res.data)

    console.log('//ACTUALIZANDO PRODUCTO')
    const productoActualizado = await actualizarProducto({
        title: 'Nuevo Titulo',
        price: 49
    },res.data._id)

    console.log('Producto Actualizado:',productoActualizado.data)

    console.log('//ELiminandoProducto')
    const productoEliminado = await borrarProducto(productoActualizado.data._id)
    console.log(productoEliminado.data)
}

axiosTest()
