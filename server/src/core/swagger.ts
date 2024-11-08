import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { writeFileSync } from 'fs';

export const setupSwagger = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('React Query - OpenAPI')
    .setDescription('Experiments with React Query, OpenAPI and Mongoose')
    .setVersion('1.0')
    .build();
  const swaggerDoc = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('swagger', app, swaggerDoc);
  writeFileSync('./openapi.json', JSON.stringify(swaggerDoc, undefined, 2));
};
