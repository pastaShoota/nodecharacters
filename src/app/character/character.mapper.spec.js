const expect = require('chai').expect;
const mapper = require('./character.mapper');
const Character = require('./character.dto');

const entity = {
  firstName: 'John',
  lastName: 'Doe',
  birthDate: '1990-01-01T00:00:00.000Z'
};

const dto = mapper.entityToDto(entity);

expect(dto).to.be.instanceOf(Character);
expect(dto).to.be.have.property('firstName');
expect(dto).to.be.have.property('lastName');
expect(dto).to.be.have.property('age');
