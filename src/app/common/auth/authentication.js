const jwt = require('jsonwebtoken');
const appError = require('../error/app-error');

const repository = require('../../character/character.repository.remote');

const KEY = '' + Math.random();

const login = (req, res) => {
    let userId = req.query.userId;
    let password = req.query.password;

    repository.get(userId).then(
        character => {
            jwt.sign(character, KEY, (err, token) => {
                res.send(token);
            });
        }
    );
}
const checkAuth = (req, res, next) => {
    let token = req.header('jwt');

    if (!token) {
        console.error('no token');
        next(new appError.AppError(appError.AppErrorType.UNAUTHENTICATED));
    } else {
        jwt.verify(token, KEY, (err, decoded) => {
            if (err) {
                console.error('token verification not good', err);
                next(new appError.AppError(appError.AppErrorType.WRONG_AUTHENT))
            } else {
                console.log('decoded token: ', decoded);
                next();
            }
        })
    }
}

module.exports = {login,checkAuth};