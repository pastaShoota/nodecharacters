const repository = require('./character.repository');
const mapper = require('./character.mapper');

const find = (req, res) => {
  repository.find()
    .then(characters => characters.map(character => mapper.entityToDto(character)))
    .then(characters => res.json(characters));
};

const get = (req, res) => {
  repository.get(req.params.id)
    .then(character => mapper.entityToDto(character))
    .then(character => res.json(character));
};

const create = (req, res) => {
  res.status(501).json({ details: 'Feature not available yet' });
};

const update = (req, res) => {
  res.status(501).json({ details: 'Feature not available yet' });
};

const remove = (req, res) => {
  res.status(501).json({ details: 'Feature not available yet' });
};

module.exports = {
  find: find,
  get: get,
  create: create,
  update: update,
  remove: remove
};
