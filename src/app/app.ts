import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import appRouter from './app.router';
import { errorMiddleware } from './common/error/error.middleware';
import { expressLogger } from './common/logger.util';

const app = express();

app
  .use(expressLogger)
  .use(helmet())
  .use(compression())
  .use(express.json())
  .use(appRouter)
  .use(errorMiddleware);

export default app;
