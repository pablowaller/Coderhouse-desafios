import { Module } from '@nestjs/common';
import { ProductsModule } from 'src/products/products.module';
import { EventsGateway } from './events.gateway';

@Module({
  providers: [EventsGateway],
  imports: [ProductsModule]
})
export class EventsModule {}
