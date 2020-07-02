const express = require('express');
const appRouter = require('./app.router');
const errorMiddleware = require('./common/error/error.middleware');
const helmet = require('helmet');
const compression = require('compression');

const app = express();

app.use(helmet());
app.use(compression());
app.use(express.json());
app.use((req, res, next) => {
  console.log('Incoming request on path ' + req.path + ' with parameters ' + JSON.stringify(req.query));
  next();
});
app.use(appRouter);

app.use(errorMiddleware);

module.exports = app;
