const express = require('express');
const controller = require('./character.controller');
const authMiddleware = require('../common/auth/checkAuth.middleware');

const router = express.Router();

router
    .use(authMiddleware)
  .get('/', (req, res, next) => controller.find(req, res, next))
  .get('/:id', (req, res, next) => controller.get(req, res, next))
  .post('/', (req, res, next) => controller.create(req, res, next))
  .put('/:id', (req, res, next) => controller.update(req, res, next))
  .delete('/:id', (req, res, next) => controller.remove(req, res, next));

module.exports = router;
