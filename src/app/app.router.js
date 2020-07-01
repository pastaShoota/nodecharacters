const express = require('express');
const characterRouter = require('./character/character.router');

const router = express.Router();

router
  .use('/characters', characterRouter);

module.exports = router;
