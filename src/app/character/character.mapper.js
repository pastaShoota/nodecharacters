const moment = require('moment');
const Character = require('./character.dto');

const entityToDto = entity => {
    const age = moment().diff(moment(entity.birthDate), 'year');
    return new Character(entity.id, entity.firstName, entity.lastName, age);
  };

const dtoToEntity = dto => {
    const birthDate = moment().add(-dto.age || 0, 'years').toISOString();
    return {
      firstName: dto.firstName,
      lastName: dto.lastName,
      birthDate: birthDate
    }
};

const dtoToEntityWithId = (dto, id) => {
    return {...dtoToEntity(dto), id: id};
};

module.exports = {entityToDto, dtoToEntity, dtoToEntityWithId};
