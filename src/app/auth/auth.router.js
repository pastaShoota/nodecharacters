const express = require('express');
const controller = require('./auth.controller')

const router = express.Router();

router
  .post('/login', (req, res, next) => controller.login(req, res, next));

module.exports = router;
