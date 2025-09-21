import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS enable with multiple origins
  app.enableCors({
    origin: [
      'http://localhost:5173', // dev
      'https://edviron-software-dev-git-db1f4d-nadeem-ahmeds-projects-a061e572.vercel.app',
      'https://edviron-software-developer-assessment-dvs9-245k1jir6.vercel.app' 
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

