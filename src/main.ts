import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'https://my-esports-portal-front.vercel.app/',
    ],
  });
  await app.listen(4000);
}
bootstrap();
