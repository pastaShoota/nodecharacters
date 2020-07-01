const express = require('express');
const appError = require('./common/error/app-error');
const authRouter = require('./auth/auth.router');
const characterRouter = require('./character/character.router');

const router = express.Router();

router
  .use('/auth', authRouter)
  .use('/characters', characterRouter)
  .use('*', (req, res, next) => next(new appError.AppError(appError.AppErrorType.ENDPOINT_NOT_FOUND)));

module.exports = router;
