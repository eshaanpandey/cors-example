import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['https://allowed-origin.com'], // Specify the exact allowed origins
    methods: 'GET,POST',  // Allowed HTTP methods
    credentials: true,    // Whether credentials (cookies) are allowed
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
