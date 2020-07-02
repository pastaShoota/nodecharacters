const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const appRouter = require('./app.router');
const errorMiddleware = require('./common/error/error.middleware');
const { expressLogger } = require('./common/logger.util');

const app = express();

app
  .use(expressLogger)
  .use(helmet())
  .use(compression())
  .use(express.json())
  .use(appRouter)
  .use(errorMiddleware);

module.exports = app;
