import { Controller, Get, Render } from '@nestjs/common';
import { ProductsService } from './products/products.service';

@Controller()
export class AppController {
  constructor(private readonly ProductsService: ProductsService) {}
 
  @Get()
  @Render('main')
  root() {
    return {
     }
  }

  @Get('productos/vista')
  @Render('vista')
  async vistaProductos() {
    const productos = await this.ProductsService.findAll()
    return {
      hayProductos: productos.length > 0 ? true : false,
      productos: productos
     }
  }
}
