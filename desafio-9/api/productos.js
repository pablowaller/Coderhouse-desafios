class Productos {
  constructor() {
    this.productos = []
    this.currentId = 0
  }

  obtener(id) {
    const producto = this.productos.find(prod => prod.id === id)
    return producto
  }

  guardar(producto) {
    // aumenta el currentId en cada carga de productos
    this.currentId += 1
    producto.id = this.currentId
    this.productos.push(producto)
    return producto
  }

  listar() {
    return this.productos
  }

  actualizar(id, data) {
    let productoActualizado = {}
    let existe = false

    this.productos = this.productos.map(prod => {
      if (prod.id === id) {
        existe = true
        console.log(data)
        prod = { ...prod, ...data }
        productoActualizado = prod
        return productoActualizado
      } else {
        return prod
      }
    })

    if (!existe) throw new Error('No se encontro un producto con ese id')

    return productoActualizado
  }

  borrar(id) {
    let existe = false

    let productoEliminado = {}

    this.productos = this.productos.filter(prod => {
      if (prod.id !== id) {
        return prod
      } else {
        existe = true
        productoEliminado = prod
      }
    })

    if (!existe) throw new Error('No se encontro un producto con ese id')

    return productoEliminado
  }
}

// exporto una instancia de la clase
module.exports = new Productos()
