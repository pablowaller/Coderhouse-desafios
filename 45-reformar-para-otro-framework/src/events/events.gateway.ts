import { SubscribeMessage, WebSocketGateway, OnGatewayConnection, WebSocketServer } from '@nestjs/websockets';
import { ProductsService } from 'src/products/products.service';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';

@WebSocketGateway()
export class EventsGateway implements OnGatewayConnection {

  constructor(private productsService: ProductsService){}

@WebSocketServer() server: Server;
 private logger: Logger = new Logger('AppGateway');

 @SubscribeMessage('productos:update')
 async getUpdatedProducts(client: Socket, payload: string): Promise<any> {
  this.server.emit('productos', await this.productsService.findAll())
 }

 async afterInit(server: Server) {
  this.logger.log('Init');
 }

 handleDisconnect(client: Socket) {
  this.logger.log(`Client disconnected: ${client.id}`);
 }

 async handleConnection(client: Socket, ...args: any[]) {
  this.logger.log(`Client connected: ${client.id}`);
  this.server.emit('productos', await this.productsService.findAll())

 }
}

