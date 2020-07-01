const moment = require('moment');
const service = require('./auth.service');
const { AppError, AppErrorType } = require('../common/error/app-error');

const extractToken = req => {
  const authorization = req.header('Authorization');
  if (authorization) {
    const authorizationPrefix = 'Bearer ';
    return authorization.startsWith(authorizationPrefix) && authorization.split(authorizationPrefix)[1];
  }
};

module.exports = {
  authMiddleware: (req, res, next) => {
    Promise.resolve(req)
      .then(req => extractToken(req))
      .then(token => service.verify(token))
      .then(() => next())
      .catch(next);
  },
  isAdminMiddleware: (req, res, next) => {
    Promise.resolve(req)
      .then(req => extractToken(req))
      .then(token => service.verify(token))
      .then(user => moment().diff(moment(user.birthDate), 'year') > 60 ? next() : Promise.reject(new AppError(AppErrorType.AUTHORIZATION_ERROR)))
      .catch(next);
  }
}
