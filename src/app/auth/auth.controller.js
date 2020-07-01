const service = require('./auth.service');
const characterRepository = require('../character/character.repository');
const { AppError, AppErrorType } = require('../common/error/app-error');

const login = (req, res, next) => {
  Promise.resolve(req.body)
    .then(({ password }) => characterRepository.get(password))
    .catch(error => Promise.reject(new AppError(AppErrorType.AUTHENTICATION_ERROR, error)))
    .then(user => service.sign(user))
    .then(token => res.json({ token }))
    .catch(next);
};

module.exports = {
  login: login
}
