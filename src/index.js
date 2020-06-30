console.log('TP-2');

const characterRepository = require('./character/character.repository');
const characterMapper = require('./character/character.mapper');

characterRepository.find()
  .then(characters => characters.map(character => characterMapper.entityToDto(character)))
  .then(characters => characters.forEach(data => console.log(data)));
