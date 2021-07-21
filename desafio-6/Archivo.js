import fs from 'fs'

export default class Archivo {
  constructor(file) {
    this.file = file
  }

  async leer() {
    try {
      const data = await fs.promises.readFile(this.file)
      return JSON.parse(data)
    } catch (err) {
      return []
    }
  }

  async guardar(title, price, thumbnail) {
    try {
      const productos = await this.leer()

      const producto = {
        title: title,
        price: price,
        thumbnail: thumbnail,
        id: productos.length + 1
      }

      productos.push(producto)

      await fs.promises.writeFile(
        this.file,
        JSON.stringify(productos, null, '\t')
      )
      console.log(
        `Se ha creado el producto ${producto.title} con el id ${producto.id}`
      )
    } catch (err) {
      throw err
    }
  }

  async borrar() {
    try {
      await fs.promises.unlink(this.file)
      console.log('Se ha eliminado el archivo')
    } catch (err) {
      throw err
    }
  }
}
