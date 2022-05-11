import { NestExpressApplication } from '@nestjs/platform-express';
import { INestApplicationContext, INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExDEDog } from './dev-exports/de-Dog.m';
import { DEDog } from './dev-exports/de-dog';
import { join } from 'path';

async function bootstrap() {
  const app: NestExpressApplication = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); // New
  await app.listen(3000);
}
bootstrap();
