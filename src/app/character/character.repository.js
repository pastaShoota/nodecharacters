const fs = require('fs').promises;
const appError = require('../common/error/app-error');

const find = () => Promise.all([0, 1]
  .map(index => './src/assets/characters-' + index + '.json')
  .map(filePath => fs.readFile(filePath, 'utf-8')))
  .then(fileContents => fileContents
    .map(fileContent => JSON.parse(fileContent))
    .reduce((acc, characters) => acc.concat(characters), []));

const get = id => find()
  .then(characters => characters.find(character => character.id === id))
  .then(character => character || Promise.reject(new appError.AppError(appError.AppErrorType.RESOURCE_NOT_FOUND)));

module.exports = {
  find: find,
  get: get
};
