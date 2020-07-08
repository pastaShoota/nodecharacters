import jwt from 'jsonwebtoken';
import { AppError, AppErrorType } from '../common/error/app-error';
import { sign as jwtSign, verify as jwtVerify } from 'jwt-promise';

const secret = 'my-seceret';

export const sign = <T extends Object>(payload: T) => jwtSign(payload, secret)
    .catch(error => new AppError(AppErrorType.AUTHENTICATION_ERROR, error));

export const verify = <T>(token) => jwtVerify(token, secret)
    .catch(error => new AppError(AppErrorType.AUTHORIZATION_ERROR, error));

