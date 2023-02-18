import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configServcie = app.get(ConfigService);
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');

  app.enableCors({
    origin: [`http://localhost:${+configServcie.get('PORT')}`],
  });

  await app.listen(+configServcie.get('SERVER_PORT'));
}
bootstrap();
