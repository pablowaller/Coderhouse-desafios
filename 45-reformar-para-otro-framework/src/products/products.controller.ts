import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CreateProductDto } from './dto/createProduct';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService){}
  @Get()
  async findAll() {
    const products = await this.productsService.findAll()
     if(products.length == 0){
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'No se encontraron Productos',
      }, HttpStatus.BAD_REQUEST);
     }  
     return products
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const product = await this.productsService.findOne(id)
    
    if(product == undefined){
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: 'No se encontro el producto',
      }, HttpStatus.NOT_FOUND);
    }
    return product
  }

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto)
  }

  @Put(':id')
  async update(@Param('id') id:string, @Body() updateCatDto: CreateProductDto): Promise<any> {
    const product = await  this.productsService.update(id, updateCatDto)

    if(product == undefined){
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: 'No se encontro el producto',
      }, HttpStatus.NOT_FOUND);
    }
    return {
      message: 'Se ha actualizado el producto',
      product: product
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const product = await  this.productsService.delete(id)

    if(product == undefined){
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: 'No se encontro el producto',
      }, HttpStatus.NOT_FOUND);
    }
    return {
      message: 'Se ha eliminado el producto',
      product: product
    }
  }
}
