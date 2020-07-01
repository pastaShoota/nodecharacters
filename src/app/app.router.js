const express = require('express');
const appError = require('./common/error/app-error');
const characterRouter = require('./character/character.router');

const router = express.Router();

router
  .use('/characters', characterRouter)
  .use('*', (req, res, next) => next(new appError.AppError(appError.AppErrorType.ENDPOINT_NOT_FOUND)));

module.exports = router;
