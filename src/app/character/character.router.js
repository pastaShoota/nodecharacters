const express = require('express');
const controller = require('./character.controller')

const router = express.Router();

router
  .get('/', (req, res, next) => controller.find(req, res, next))
  .get('/:id', (req, res, next) => controller.get(req, res, next))
  .post('/', (req, res, next) => controller.create(req, res, next))
  .put('/', (req, res, next) => controller.update(req, res, next))
  .delete('/:id', (req, res, next) => controller.remove(req, res, next));

module.exports = router;
