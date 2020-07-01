const jwt = require('jsonwebtoken');
const { AppError, AppErrorType } = require('../common/error/app-error');

const secret = 'my-seceret';

module.exports = {
  sign: payload => new Promise((resolve, reject) => {
    jwt.sign(payload, secret, (error, token) => {
      if (error) {
        reject(new AppError(AppErrorType.AUTHENTICATION_ERROR, error))
      } else {
        resolve(token);
      }
    });
  }),
  verify: token => new Promise((resolve, reject) => {
    jwt.verify(token, secret, (error, payload) => {
      if (error) {
        reject(new AppError(AppErrorType.AUTHORIZATION_ERROR, error))
      } else {
        resolve(payload);
      }
    });
  })
}
