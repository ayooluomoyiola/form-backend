import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 4000);

  app.enableCors({
    origin: 'http://localhost:5173',
    methods: 'GET,POST',
    credentials: true,
  });
}
bootstrap();
