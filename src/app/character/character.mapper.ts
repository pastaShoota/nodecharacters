import moment from 'moment';
import { CharacterDto, ICharacterEntity } from './character.model';

export const entityToDto = (entity: ICharacterEntity): CharacterDto => {
  const age = moment().diff(moment(entity.birthDate), 'year');
  return new CharacterDto(entity.id, entity.firstName, entity.lastName, age);
};

export const dtoToEntity = (dto: CharacterDto): ICharacterEntity => {
  const birthDate = moment().subtract(dto.age, 'year').startOf('year');
  return {
    id: dto.id,
    firstName: dto.firstName,
    lastName: dto.lastName,
    birthDate: birthDate.format()
  };
};
