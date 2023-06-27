import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', '..', 'client', 'public'));
  // console.log(join(__dirname, '..', 'client', 'src'))
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', '..', 'client', 'public', 'index.html'));
  });
  app.enableCors(); // 필요한 경우 CORS 설정
  await app.listen(3000);
}

bootstrap();
