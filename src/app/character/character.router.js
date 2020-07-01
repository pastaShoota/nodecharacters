const express = require('express');
const controller = require('./character.controller');
const { authMiddleware, isAdminMiddleware } = require('../auth/auth.middleware');

const router = express.Router();

router
  .get('/',  (req, res, next) => controller.find(req, res, next))
  .get('/:id', (req, res, next) => controller.get(req, res, next))
  .post('/', authMiddleware, (req, res, next) => controller.create(req, res, next))
  .put('/:id', authMiddleware, (req, res, next) => controller.update(req, res, next))
  .delete('/:id', authMiddleware, isAdminMiddleware, (req, res, next) => controller.remove(req, res, next));

module.exports = router;
