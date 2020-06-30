console.log('TP-4');

const characterRepository = require('./app/character/character.repository');
const characterMapper = require('./app/character/character.mapper');

characterRepository.find()
  .then(characters => characters.map(character => characterMapper.entityToDto(character)))
  .then(characters => characters.forEach(data => console.log(data)));
