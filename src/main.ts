import { initNestJsTracing, wrapNestJsModule } from '@recap.dev/client';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

initNestJsTracing();

async function bootstrap() {
  const app = await NestFactory.create(wrapNestJsModule(AppModule));

  await app.listen(3000);
}

bootstrap();
