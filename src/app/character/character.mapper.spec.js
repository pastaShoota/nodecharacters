const mapper = require('./character.mapper');
const expect = require('chai').expect;

const nullInputResult = mapper.entityToDto(null);

expect(nullInputResult).to.have.property('firstName', undefined);
expect(nullInputResult).to.have.property('lastName', undefined);
