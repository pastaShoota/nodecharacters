const appError = require('./app-error');

const errorMiddleware = (error, req, res, next) => {
  if (error instanceof appError.AppError) {
    res.status(error.type.code);
    res.status(error.type.httpCode).json({
      code: error.type.code,
      message: error.publicMessage
    });
    console.error(error.message);
  } else {
    const errorType = appError.AppErrorType.INTERNAL_ERROR;
    res.status(errorType.httpCode).json({
      code: errorType.code,
      message: errorType.description
    });
    console.error(error);
  }
};

module.exports = errorMiddleware;
