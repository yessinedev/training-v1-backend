import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Strips properties not defined in DTO
    transform: true, // Automatically transforms payloads to DTO instances
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
