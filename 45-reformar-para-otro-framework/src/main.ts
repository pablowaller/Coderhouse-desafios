import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname,'..','src/public'))
  app.setBaseViewsDir(join(__dirname, '..','src/views'))
  app.setViewEngine('hbs')
  app.set('view options', { layout: 'layouts/index' });

  await app.listen(3000);
}
bootstrap();
