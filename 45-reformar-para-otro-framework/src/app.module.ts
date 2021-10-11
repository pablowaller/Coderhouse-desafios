import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { EventsModule } from './events/events.module';
@Module({
  imports: [ProductsModule, MongooseModule.forRoot('mongodb://localhost:27017/ecommerceTest'), EventsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}