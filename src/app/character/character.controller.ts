import { NextFunction, Request, Response } from 'express';
import * as repository from './character.repository';
import * as mapper from './character.mapper';

export const find = (req: Request, res: Response, next: NextFunction) => {
  repository.find()
    .then(characters => characters.map(character => mapper.entityToDto(character)))
    .then(characters => res.json(characters))
    .catch(next);
};

export const get = (req: Request, res: Response, next: NextFunction) => {
  repository.get(req.params.id)
    .then(character => mapper.entityToDto(character))
    .then(character => res.json(character))
    .catch(next);
};

export const create = (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(req.body)
    .then(character => mapper.dtoToEntity(character))
    .then(character => repository.create(character))
    .then(character => res.status(201).json(character))
    .catch(next);
};

export const update = (req: Request, res: Response, next: NextFunction) => {
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

export const remove = (req: Request, res: Response, next: NextFunction) => {
  repository.remove(req.params.id)
    .then(() => res.sendStatus(204))
    .catch(next);
};
