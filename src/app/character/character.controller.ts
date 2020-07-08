import * as repository from './character.repository';
import * as mapper from './character.mapper';

export const find = (req, res, next) => {
  repository.find()
    .then(characters => characters.map(character => mapper.entityToDto(character)))
    .then(characters => res.json(characters))
    .catch(next);
};

export const get = (req, res, next) => {
  repository.get(req.params.id)
    .then(character => mapper.entityToDto(character))
    .then(character => res.json(character))
    .catch(next);
};

export const create = (req, res, next) => {
  Promise.resolve(req.body)
    .then(character => mapper.dtoToEntity(character))
    .then(character => repository.create(character))
    .then(character => res.status(201).json(character))
    .catch(next);
};

export const update = (req, res, next) => {
  Promise.resolve(req.body)
    .then(character => {
      character.id = req.params.id;
      return character
    })
    .then(character => mapper.dtoToEntity(character))
    .then(character => repository.update(character))
    .then(character => res.json(character))
    .catch(next);
};

export const remove = (req, res, next) => {
  repository.remove(req.params.id)
    .then(() => res.sendStatus(204))
    .catch(next);
};
