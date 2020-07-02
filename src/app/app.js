const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const appRouter = require('./app.router');
const errorMiddleware = require('./common/error/error.middleware');

const app = express();

app
  .use((req, res, next) => {
    console.log('Incoming request on path ' + req.path + ' with parameters ' + JSON.stringify(req.query));
    next();
  })
  .use(helmet())
  .use(compression())
  .use(express.json())
  .use(appRouter)
  .use(errorMiddleware);

module.exports = app;
