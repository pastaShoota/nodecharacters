import express from 'express';
import { AppError, AppErrorType } from './common/error/app-error';
import authRouter from './auth/auth.router';
import characterRouter from './character/character.router';

const router = express.Router();

router
  .use('/auth', authRouter)
  .use('/characters', characterRouter)
  .use('*', (req, res, next) => next(new AppError(AppErrorType.ENDPOINT_NOT_FOUND)));

export default router;
