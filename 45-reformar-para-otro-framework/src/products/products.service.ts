import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product as IProduct } from 'src/interfaces/product.interface';
import { CreateProductDto } from './dto/createProduct';
import { Product, ProductDocument } from './schemas/product.schema';

@Injectable()
export class ProductsService {
    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>){}

    async findAll(): Promise<IProduct[]> {
        return await this.productModel.find().exec()
    }
    async findOne(id: string): Promise<IProduct>{
        return await this.productModel.findById(id).exec()
    }
    async create(createProductDto:CreateProductDto): Promise <IProduct>{
        const createdProduct = await this.productModel.create(createProductDto)
        return  createdProduct.save()
    }
    async update(id: string, createProductDto:CreateProductDto): Promise<IProduct>{
        const updated = await this.productModel.updateOne({id: id},{ $set: createProductDto })
        if(!updated) return undefined

        return this.productModel.findById(id).exec()
    }

    async delete(id: string): Promise<IProduct>{
        const product = await this.findOne(id)
        if(!product) return undefined
        await this.productModel.deleteOne({id: id})
        return product
    }
}
