import { expect } from 'chai';
import * as mapper from './character.mapper';
import { CharacterDto, ICharacterEntity } from './character.model';

describe('character mapper', () => {
  describe('entity to dto', () => {
    it('should return an instance of Character', () => {
      const entity: ICharacterEntity = {
        firstName: 'John',
        lastName: 'Doe',
        birthDate: '1990-01-01T00:00:00.000Z'
      };

      const dto = mapper.entityToDto(entity);

      expect(dto).to.be.instanceOf(CharacterDto);
    });

    it('should return an object with mapped properties', () => {
      const entity: ICharacterEntity = {
        firstName: 'John',
        lastName: 'Doe',
        birthDate: '1990-01-01T00:00:00.000Z'
      };

      const dto = mapper.entityToDto(entity);

      expect(dto).to.be.have.property('firstName');
      expect(dto).to.be.have.property('lastName');
      expect(dto).to.be.have.property('age');
    });

    it('should throw an error', () => {
      const entity = undefined;

      try {
        mapper.entityToDto(entity);
      } catch (e) {
        expect(e).to.be.ok;
      }
    });
  });

  describe('dto to entity', () => {
    it('should return an instance of Object', () => {
      const dto = new CharacterDto('x', 'John', 'Doe', 30);

      const entity = mapper.dtoToEntity(dto);

      expect(entity).to.be.instanceOf(Object);
    });

    it('should return an object with mapped properties', () => {
      const dto = new CharacterDto('x', 'John', 'Doe', 30);

      const entity = mapper.dtoToEntity(dto);

      expect(entity).to.be.have.property('firstName');
      expect(entity).to.be.have.property('lastName');
      expect(entity).to.be.have.property('birthDate');
    });

    it('should throw an error', () => {
      const dto = undefined;

      try {
        mapper.dtoToEntity(dto);
      } catch (e) {
        expect(e).to.be.ok;
      }
    });
  });
});
