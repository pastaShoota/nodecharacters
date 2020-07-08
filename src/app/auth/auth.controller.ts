import { sign } from './auth.service';
import * as characterRepository from '../character/character.repository';
import { AppError, AppErrorType } from '../common/error/app-error';

export const login = (req, res, next) => {
  Promise.resolve(req.body)
    .then(({ password }) => characterRepository.get(password))
    .catch(error => Promise.reject(new AppError(AppErrorType.AUTHENTICATION_ERROR, error)))
    .then(user => sign(user))
    .then(token => res.json({ token }))
    .catch(next);
};
