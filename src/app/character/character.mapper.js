const moment = require('moment');
const Character = require('./character.dto');

const entityToDto = entity => {
    const entity_ = entity || {};
    const age = entity_.birthDate ? moment().diff(moment(entity.birthDate), 'year') : 0;
    return new Character(entity_.id, entity_.firstName, entity_.lastName, age);
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
