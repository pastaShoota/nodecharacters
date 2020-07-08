export class AppErrorType {

  static RESOURCE_NOT_FOUND = new AppErrorType('RESOURCE_NOT_FOUND', 404, 'The requested resource was not found');
  static ENDPOINT_NOT_FOUND = new AppErrorType('ENDPOINT_NOT_FOUND', 400, 'The endpoint was not found');
  static REMOTE_SERVER_ERROR = new AppErrorType('REMOTE_SERVER_ERROR', 502, 'The remote server has returned an error');
  static BAD_LOGIN = new AppErrorType('BAD_LOGIN', 401, 'The provided login is incorrect');
  static AUTHENTICATION_ERROR = new AppErrorType('AUTHENTICATION_ERROR', 500, 'An error occurred during login process');
  static AUTHORIZATION_ERROR = new AppErrorType('AUTHORIZATION_ERROR', 403, 'User is not authorized to access this resource');
  static INTERNAL_ERROR = new AppErrorType('INTERNAL_ERROR', 500, 'An error has occurred while processing the request');

  constructor(
    public code,
    public httpCode,
    public description) {
  }
}


export class AppError extends Error {
  constructor(
    public type: AppErrorType,
    message?: string | Object,
    public publicMessage?: string) {
    super(message || type && type.description);
    this.type = type;
    this.publicMessage = publicMessage || type && type.description;
  }
}
