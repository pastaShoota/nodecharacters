const express = require('express');
const controller = require('./character.controller')

const router = express.Router();

router
  .get('/', (req, res) => controller.find(req, res))
  .get('/:id', (req, res) => controller.get(req, res))
  .post('/', (req, res) => controller.create(req, res))
  .put('/', (req, res) => controller.update(req, res))
  .delete('/:id', (req, res) => controller.remove(req, res));

module.exports = router;
