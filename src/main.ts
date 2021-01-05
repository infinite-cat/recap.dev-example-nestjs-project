import { NestFactory } from '@nestjs/core';
import express from 'express';
import { wrapNestJsModule, traceExpress, captureConsoleLogs, tracer } from '@recap.dev/client';

import { AppModule } from './app.module';

traceExpress(express);
captureConsoleLogs();

async function bootstrap() {
  const app = await NestFactory.create(wrapNestJsModule(AppModule));

  app.use((req, res, next) => {
    res.prependListener('finish', () => {
      tracer.setUnitName(`${process.env.environment}-${tracer.getCurrentTrace()?.functionCallEvents[1]?.functionName}`);
    });

    next();
  });

  await app.listen(3000);
}
bootstrap();
