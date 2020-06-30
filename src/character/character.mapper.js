const Character = require('./character.dto');

module.exports = {
  entityToDto: entity => {
    const age = (new Date().valueOf() - new Date(entity.birthDate).valueOf()) / (1000 * 60 * 60 * 24 * 365);
    return new Character(entity.firstName, entity.lastName, age);
  }
};
