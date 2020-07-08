import moment from 'moment';
import { verify } from './auth.service';
import { AppError, AppErrorType } from '../common/error/app-error';
import { NextFunction, Request, Response } from 'express';

const extractToken = (req: Request) => {
  const authorization = req.header('Authorization');
  if (authorization) {
    const authorizationPrefix = 'Bearer ';
    return authorization.startsWith(authorizationPrefix) && authorization.split(authorizationPrefix)[1];
  }
};

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(req)
    .then(req => extractToken(req))
    .then(token => verify(token))
    .then(user => {
      req['user'] = user;
      next();
    })
    .catch(next);
};
export const isAdminMiddleware = (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(req['user'])
    .then(user => moment().diff(moment(user.birthDate), 'year') > 60 ? next() : Promise.reject(new AppError(AppErrorType.AUTHORIZATION_ERROR)))
    .catch(next);
};
