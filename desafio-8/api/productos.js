class Productos {
  constructor() {
    this.productos = []
  }

  obtener(id) {
    const producto = this.productos.find(prod => prod.id === id)
    return producto
  }

  guardar(producto) {
    producto.id = this.productos.length + 1
    this.productos.push(producto)

    return producto
  }

  listar() {
    return this.productos
  }

}

// exporto una instancia de la clase
module.exports = new Productos()
