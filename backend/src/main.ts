import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3001', // Allow only this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow these HTTP methods
    allowedHeaders: 'Content-Type, Accept', // Allow these headers
  });
  await app.listen(3000);
}
bootstrap();
