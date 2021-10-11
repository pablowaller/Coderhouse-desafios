import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateProductDto } from './dto/createProduct';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService){}
  @Get()
  findAll(): any {
     return this.productsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id)
  }

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto)
  }

  @Put(':id')
  update(@Param('id') id:string, @Body() updateCatDto: CreateProductDto): any {
    return 'Todos los productos';
  }

  @Delete(':id')
  remove(@Param('id') id: string): any {
    return 'Todos los productos';
  }
}
