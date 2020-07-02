const appError = require('../error/app-error');
const jwt = require('jsonwebtoken');

const checkAuth = (req, res, next) => {
    let token = req.header('jwt');

    if (!token) {
        console.error('no token');
        next(new appError.AppError(appError.AppErrorType.UNAUTHENTICATED));
    } else {
        jwt.verify(token);
        next();
    }
}

module.exports = checkAuth;