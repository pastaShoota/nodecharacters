import jwt from 'jsonwebtoken';
import { AppError, AppErrorType } from '../common/error/app-error';

const secret = 'my-seceret';

export const sign = payload => new Promise((resolve, reject) => {
  jwt.sign(payload, secret, (error, token) => {
    if (error) {
      reject(new AppError(AppErrorType.AUTHENTICATION_ERROR, error));
    } else {
      resolve(token);
    }
  });
});

export const verify = token => new Promise((resolve, reject) => {
  jwt.verify(token, secret, (error, payload) => {
    if (error) {
      reject(new AppError(AppErrorType.AUTHORIZATION_ERROR, error));
    } else {
      resolve(payload);
    }
  });
});
