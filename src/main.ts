import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS globally
  app.enableCors({
    origin: ['https://frontend1.com', 'https://frontend2.com'], // Whitelist domains
    methods: 'GET,POST,PUT,DELETE', // Allowed HTTP methods
    credentials: true, // Allow cookies
  });

  await app.listen(3000);
}
bootstrap();
