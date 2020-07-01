const express = require('express');
const appRouter = require('./app.router');

const app = express();

app.use((req, res, next) => {
  console.log('Incoming request on path ' + req.path + ' with parameters ' + JSON.stringify(req.query));
  next();
})
app.use(appRouter);

module.exports = app;
