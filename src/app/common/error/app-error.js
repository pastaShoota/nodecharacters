class AppErrorType {
  constructor(code, httpCode, description) {
    this.code = code;
    this.httpCode = httpCode;
    this.description = description;
  }
}
AppErrorType.RESOURCE_NOT_FOUND = new AppErrorType('RESOURCE_NOT_FOUND', 404, 'The requested resource was not found');
AppErrorType.INTERNAL_ERROR = new AppErrorType('INTERNAL_ERROR', 500, 'An error has occurred while processing the request');


class AppError extends Error {
  constructor(type, message, publicMessage) {
    super(message || type && type.description);
    this.type = type;
    this.publicMessage = publicMessage || type && type.description;
  }
}

exports.AppError = AppError;
exports.AppErrorType = AppErrorType;
