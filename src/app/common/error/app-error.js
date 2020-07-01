class AppErrorType {
  constructor(code, httpCode, description) {
    this.code = code;
    this.httpCode = httpCode;
    this.description = description;
  }
}
AppErrorType.RESOURCE_NOT_FOUND = new AppErrorType('RESOURCE_NOT_FOUND', 404, 'The requested resource was not found');
AppErrorType.ENDPOINT_NOT_FOUND = new AppErrorType('ENDPOINT_NOT_FOUND', 400, 'The endpoint was not found');
AppErrorType.REMOTE_SERVER_ERROR = new AppErrorType('REMOTE_SERVER_ERROR', 502, 'The remote server has returned an error');
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
