const express = require('express');
const appRouter = require('./app.router');
const errorMiddleware = require('./common/error/error.middleware');

const app = express();

app.use((req, res, next) => {
  console.log('Incoming request on path ' + req.path + ' with parameters ' + JSON.stringify(req.query));
  next();
})
app.use(express.json());
app.use(appRouter);
app.use(errorMiddleware);

module.exports = app;
