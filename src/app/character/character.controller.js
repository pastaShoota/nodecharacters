const repository = require('./character.repository.remote');
const mapper = require('./character.mapper');

const find = (req, res, next) => {
  repository.find()
    .then(characters => characters.map(character => mapper.entityToDto(character)))
    .then(characters => res.json(characters))
    .catch(next);
};

const get = (req, res, next) => {
  repository.get(req.params.id)
    .then(character => mapper.entityToDto(character))
    .then(character => res.json(character))
    .catch(next);
};

const create = (req, res, next) => {
  let entity = mapper.dtoToEntity(req.body);
  repository.post(entity)
      .then(responseData => {
        res.status(201)
        .json(responseData);
      })
      .catch(next);
};

const update = (req, res, next) => {
  let entity = mapper.dtoToEntityWithId(req.body, req.params.id);
  repository.put(entity)
      .then(responseData => {
          res.send("Updated");
      })
};

const remove = (req, res, next) => {
  repository.del(req.params.id)
      .then(response => {
          res.send('Removed')
      });
};

module.exports = {
  find: find,
  get: get,
  create: create,
  update: update,
  remove: remove
};
