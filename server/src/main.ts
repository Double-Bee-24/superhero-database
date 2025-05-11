import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const config = app.get<ConfigService>(ConfigService);
  const port = config.get<number>('port');
  const env = config.get<string>('env');

  app.enableCors();
  app.setGlobalPrefix('api', { exclude: ['/'] });
  app.useGlobalPipes(new ValidationPipe({}));
  app.useStaticAssets(join(__dirname, '../../uploads'), {
    prefix: '/uploads/',
  });

  if (env !== '' && env !== 'production') {
    const config = new DocumentBuilder()
      .setTitle('SUPERHERO API')
      .setDescription('Test task')
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);
  }

  await app.listen(port, () => {
    console.log(`Server running on port ${port} in ${env} mode`);
  });
}
bootstrap();
