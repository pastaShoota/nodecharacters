import { AppError, AppErrorType } from './app-error';
import { logger } from '../logger.util';

export const errorMiddleware = (error, req, res, next) => {
  if (error instanceof AppError) {
    res.status(error.type.httpCode).json({
      code: error.type.code,
      message: error.publicMessage
    });
    logger.error(error.message);
  } else {
    const errorType = AppErrorType.INTERNAL_ERROR;
    res.status(errorType.httpCode).json({
      code: errorType.code,
      message: errorType.description
    });
    logger.error(error);
  }
};
