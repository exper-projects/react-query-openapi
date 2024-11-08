import { NestFactory } from '@nestjs/core';

import { AppModule } from './modules/app.module';
import { setupSwagger } from './core/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  setupSwagger(app);

  await app.listen(3000);
}
bootstrap();
