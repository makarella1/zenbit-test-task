import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');

  app.enableCors({ origin: ['http://localhost:5173'] });

  await app.listen(3000);
}
bootstrap();
