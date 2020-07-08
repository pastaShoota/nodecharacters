import moment from 'moment';
import Character from './character.dto';

export const entityToDto = entity => {
  const age = moment().diff(moment(entity.birthDate), 'year');
  return new Character(entity.id, entity.firstName, entity.lastName, age);
};

export const dtoToEntity = dto => {
  const birthDate = moment().subtract(dto.age, 'year').startOf('year');
  return {
    id: dto.id,
    firstName: dto.firstName,
    lastName: dto.lastName,
    birthDate: birthDate.format()
  };
};
