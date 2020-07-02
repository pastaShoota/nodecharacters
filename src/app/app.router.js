const express = require('express');
const characterRouter = require('./character/character.router');
const authentication = require('./common/auth/authentication')

const router = express.Router();

router
  .use('/characters', characterRouter)
    .get('/login', authentication.login );

module.exports = router;
